import { v4 as uuid } from 'uuid'
import { Car } from 'src/cars/interfaces/car.interface'
import { Brand } from 'src/brands/entities/brand.entity'

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Corolla',
  },
  {
    id: uuid(),
    brand: 'Honda',
    model: 'Civic',
  },
  {
    id: uuid(),
    brand: 'Jeep',
    model: 'Cherokee',
  },
]

export const BRANDS_SEED: Brand[] = [
  {
    id: uuid(),
    name: 'Volvo',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Toyota',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Honda',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Jeep',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Tesla',
    createdAt: new Date().getTime(),
  },
]
