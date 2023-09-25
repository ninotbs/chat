# ChatApp
MERN Stack Chat App

# Introductioin
Chat App is a real-time messaging service build with Node.js, Mongodb, Express.js, Socket.IO

## Key features:
* Persistance messages in MongoDB (syntax error need to fix)
* Real-time message sending using WebSockets (Socket.IO)
* Scalable architecture with future ability to scale horizontally

## Installation
```bash
git clone https://github.com/ninotbs/chat.git && cd chat/backend
yarn
````

## Docker
This project has ready to test docker-compose configs.
There are two docker-compose and Dockerfiles, one for production and the other for development with hot reload and debug ability.

First, you'll need to copy `.env.example` or `.env`

After setting `.env`, you are ready to run the backend servers:
```bash
docker-compose up -d

# or
docker-compose -f ./docker-compose.dev.yml up -d

