FROM node:12
WORKDIR /www/clean-node-api
COPY ./package.json .
RUN npm install --only=prod