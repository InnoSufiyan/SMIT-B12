FROM node:16-alpine

WORKDIR /app

COPY . .

RUN npm install

USER node

CMD [ "npm", "start" ]

EXPOSE 5000
