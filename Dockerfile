FROM node:14-alpine

WORKDIR /usr/app

RUN npm i -g live-server

COPY ./package.json ./

RUN npm install

COPY ./ ./

RUN npm run compile:sass-prod

CMD [ "live-server", "--port=9000" ]

