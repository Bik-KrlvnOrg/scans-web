
FROM node:12-alpine AS development

WORKDIR /usr/src/gateway

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

COPY package*.json ./

RUN yarn global add @nestjs/cli

RUN yarn install --production=false

COPY . .

RUN yarn build

RUN yarn copy:proto-dist


FROM node:12-alpine AS production

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

WORKDIR /usr/src/gateway

ARG NODE_ENV=production

ENV NODE_ENV=${NODE_ENV}

COPY package*.json ./

RUN yarn install --production=true

COPY . .

COPY --from=development /usr/src/gateway/dist ./dist

EXPOSE 4000

CMD [ "node","dist/main.js" ]