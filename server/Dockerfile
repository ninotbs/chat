# Dockerfile for Node Express Backend api (production)

FROM node:lts-alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json yarn*.lock ./
RUN yarn --frozen-lockfile

# Copy app source code
COPY . .

# build
RUN yarn run build

ARG NODE_ENV=production
ARG PORT

CMD ["yarn", "start"]

# Exports
EXPOSE ${PORT}