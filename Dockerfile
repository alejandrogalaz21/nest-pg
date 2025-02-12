FROM node:lts As development

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:lts-slim as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json package-lock.json ./

RUN npm install --production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

USER node

CMD [ "node", "dist/main.js" ]