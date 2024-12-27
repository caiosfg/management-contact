
FROM node:latest

WORKDIR /app

RUN rm -rf ./node_modules
RUN rm -rf package-lock.json

COPY package*.json ./ 
RUN npm install  

COPY . .

EXPOSE 3333

RUN apt-get update -y && apt-get install -y openssl

CMD ["npm", "run", "dev"]