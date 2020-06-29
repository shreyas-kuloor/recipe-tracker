import express from 'express';

export const app: express.Application = express();

app.get('/', function (req, res) {
    res.status(200).send('Hello World!');
});

app.listen(3000, function () {
    console.log('App is listening on port 3000!');
});