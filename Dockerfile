FROM node:alpine AS build

WORKDIR /app

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

RUN set -xe \
    && npm install --unsafe-perm -g node-gyp webpack-dev-server rimraf webpack typescript @angular/cli \
    && rm -rf /var/cache/apk/* /tmp/*

COPY ./ .

RUN npm install
RUN ng build


##############  nginx

FROM nginx:latest
COPY --from=build /app/dist/order-state-demo /usr/share/nginx/html
EXPOSE 80
