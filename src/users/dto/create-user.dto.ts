import { IsEmail, IsNotEmpty, MinLength, IsString } from 'class-validator'
export class CreateUserDto {
  @IsNotEmpty()
  @MinLength(2)
  name: string

  @IsNotEmpty()
  @MinLength(2)
  lastName: string

  @IsEmail()
  @IsNotEmpty()
  email: string

  @IsString()
  @MinLength(4)
  @IsNotEmpty()
  password: string
}
