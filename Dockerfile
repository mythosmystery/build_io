FROM node:18.9.1-bullseye-slim as builder

COPY ./package.json ./package.json

RUN yarn

COPY . .

RUN yarn build

EXPOSE 3000

CMD [ "yarn", "start:prod" ]

