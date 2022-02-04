FROM node:16.13.2-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json .
RUN npm install
# Bundle app source
COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start:debug" ]