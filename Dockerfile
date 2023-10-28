FROM node:20.3.0 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .
EXPOSE 8080
CMD ["npm", "start"]
