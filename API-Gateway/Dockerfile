FROM node

WORKDIR /developer/nodejs/api-gateway

COPY . .

RUN npm ci

CMD ["npm", "run", "dev"]