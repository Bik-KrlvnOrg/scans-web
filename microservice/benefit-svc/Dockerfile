FROM node:12-alpine AS development

WORKDIR /usr/src/benefit-svc

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

COPY package*.json ./

RUN yarn global add @nestjs/cli

RUN yarn install --production=false

COPY . .

RUN yarn build

RUN yarn copy:proto-dist


FROM node:12-alpine as production

ARG NODE_ENV=production

ENV NODE_ENV=NODE_ENV

WORKDIR /usr/src/benefit-svc

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

COPY package*.json ./

RUN yarn install --production=true

COPY . .

COPY --from=development /usr/src/benefit-svc/dist ./dist

EXPOSE 5061

CMD [ "node","dist/main.js" ]