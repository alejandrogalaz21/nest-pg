## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

### Estructura del Proyecto

```
src
└── common
    ├── decorators
    ├── dtos
    ├── filters
    ├── guards
    ├── interceptors
    ├── middleware
    ├── pipes
    ├── common.controller.ts
    ├── common.module.ts
    └── common.service.ts

```

Enviroments Variables :

```env
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USER=username
DB_PASSWORD=password
DB_NAME=name
```

## Installation

```sh
$ yarn install
```

## Running the app

```sh
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```sh
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Installation - Docker

```sh
# prod
$ docker-compose up -d

# dev
$ docker-compose -f docker-compose.dev.yml up -d
```

# Resources

- [Nest.js Cheat Sheet](https://devtalles.com/files/nest-cheatsheet.pdf) Nest Cheat Sheet By [Klerith](https://github.com/Klerith) Fernando Herrera.

- [How to use TypeOrmModule forRootAsync and configService](https://thriveread.com/typeormmodule-forrootasync-with-configservice/)
