const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({
    event: 'Semana Omnistack 11',
    dev: 'Adriano Rocha',
    message: 'Hello World',
  });
});

app.listen(3333);
