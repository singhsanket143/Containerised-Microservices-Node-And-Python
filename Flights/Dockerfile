FROM node

WORKDIR /developer/nodejs/flights-service

COPY . .

RUN npm ci

CMD ["npm", "run", "dev"]