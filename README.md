# chat-server-expressjs
This is an API for a chat application written in Node.js express. It uses mongodb for data storage.

#### Installation requirements
- [Node.js](https://nodejs.org/en/)
- Mongodb [Installation guide](https://docs.mongodb.com/manual/installation/)
- yarn (`npm  install -g yarn`)

#### Installation
First, you need to start mongodb.
- Open a terminal.
- Create a folder `mkdir -p data/db`
- Run `mongod --dbpath=data/db`

Run the app.
- Open a new teminal.
- Run `git clone https://github.com/john555/chat-server-expressjs.git`
- `cd chat-server-expressjs`
- Run `yarn start` or `yarn start:dev` (for development).
