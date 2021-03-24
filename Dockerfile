FROM node:14

# Create app directory
WORKDIR /app

COPY /api/package.json /app
COPY /api/yarn.lock /app

RUN yarn install --pure-lockfile

COPY . /app

EXPOSE 8080

RUN yarn workspace api build

CMD ["yarn", "workspace", "api", "start"]
