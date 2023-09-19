/**
 * Create a small HTTP server using Express
 */

const express = require('express');

const app = express();
const PORT = 1245;

app.get('/', (_, res) => {
  res.send('Hello Holberton School!\n');
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

module.exports = app;
