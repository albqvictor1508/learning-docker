FROM node:20 AS builder

WORKDIR /web

COPY . .

RUN rm -rf node_modules
RUN npm i
RUN npm run build