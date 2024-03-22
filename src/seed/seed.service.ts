import { BrandsService } from './../brands/brands.service'
import { Injectable } from '@nestjs/common'
import { CarsService } from './../cars/cars.service'

import { CARS_SEED, BRANDS_SEED } from './seed'

@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService,
  ) {}

  populateDB() {
    // CARS_SEED
    // BRANDS_SEED
    this.carsService.fillCarsWithSeedData(CARS_SEED)
    this.brandsService.fillCarsWithSeedData(BRANDS_SEED)

    return 'Seed executed'
  }
}
