import express from 'express';

export const server: express.Application = express();

server.get('/', function (req, res) {
  res.status(200).send('Hello World!');
});

server.listen(3000, function () {
  console.log('App is listening on port 3000!');
});
