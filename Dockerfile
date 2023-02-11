FROM node:18.9.1-bullseye-slim as builder

RUN npx playwright install

COPY ./package.json ./package.json

RUN yarn

COPY . .

RUN yarn build

RUN yarn test

RUN yarn test:unit

EXPOSE 3000

CMD [ "yarn", "start:prod" ]

