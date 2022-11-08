FROM node:16.18.1-buster-slim
ENV NODE_ENV production

COPY . .

WORKDIR /app

RUN npm install @google/clasp@2.3.1 -g

USER node