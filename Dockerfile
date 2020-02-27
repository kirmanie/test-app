FROM node:12.6.0

ADD . .

RUN npm install

CMD node app.js