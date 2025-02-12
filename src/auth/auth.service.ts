import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UsersService } from '../users/users.service'
import * as bcrypt from 'bcrypt'
import { instanceToPlain, plainToInstance } from 'class-transformer'
import { User } from '../users/entities/user.entity'

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByEmail(email)
    if (user && (await bcrypt.compare(password, user.password))) {
      return plainToInstance(User, user)
    }
    return null
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id }
    const userWithoutPassword = instanceToPlain(user, {
      excludePrefixes: ['password']
    })
    return {
      access_token: this.jwtService.sign(payload),
      user: userWithoutPassword
    }
  }
}
