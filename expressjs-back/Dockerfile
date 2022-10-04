FROM node:18-alpine as base

WORKDIR /src
COPY package*.json /
EXPOSE 3000

FROM base as production
ENV NODE_ENV=production
RUN yarn install
COPY . /
CMD ["yarn", "start"]

FROM base as dev
ENV NODE_ENV=development
RUN yarn global add nodemon && yarn install
COPY . /
CMD ["yarn", "dev"]