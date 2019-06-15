FROM node:10-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

EXPOSE 8043
CMD [ "node", "./src/index.js"]