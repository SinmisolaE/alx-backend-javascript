const express = require('express')

const app = express();
port = 12456;

app.get('/', (request, response) => {
  response.send('Hello Holberton School!')
});

app.listen(port, () => {
});

module.exports = app;
