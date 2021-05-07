FROM node:latest
WORKDIR /code
RUN mkdir /src
COPY package.json ./
RUN npm install
CMD [ "node", "./src/app.js" ]
