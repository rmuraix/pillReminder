FROM node:16.16.0-alpine3.16
ENV NODE_ENV production

WORKDIR /app

RUN apk add --no-cache tini=0.19.0-r0 
ENTRYPOINT ["/sbin/tini", "--"]

COPY --chown=node:node . .

USER node