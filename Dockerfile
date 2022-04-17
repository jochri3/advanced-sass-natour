FROM node:16-alpine as build

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run compile-sass:prod

FROM nginx
EXPOSE 80
COPY --from=build /app /usr/share/nginx/html