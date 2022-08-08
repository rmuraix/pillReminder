FROM node:16.16.0-buster-slim
ENV NODE_ENV production

COPY . .

WORKDIR /app

RUN npm i @google/clasp -g

USER node