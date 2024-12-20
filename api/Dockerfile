
FROM node:latest

WORKDIR /app

RUN rm -rf ./node_modules
RUN rm -rf package-lock.json

COPY package*.json ./ 
RUN npm install  

COPY . .

CMD [“npm”, “start”]