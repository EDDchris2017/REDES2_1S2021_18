FROM node:latest
WORKDIR /code
RUN mkdir /src
copy package.json .
RUN npm install
CMD [ "npm", "start" ]
