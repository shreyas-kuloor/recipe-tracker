import express from 'express';

export const server: express.Application = express();

server.get('/', function (req, res) {
  res.status(200).send('Hello World!');
});

server.listen(process.env.PORT, function () {
  console.log('App is listening on port 3000!');
});
