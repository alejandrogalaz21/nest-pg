FROM node:lts As development

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

FROM node:lts-slim as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

USER node

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json yarn.lock ./

RUN yarn install --production --frozen-lockfile

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD [ "node", "dist/main.js" ]