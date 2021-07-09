const express = require('express');
const app = express();
const cors = require('cors');
app.use(
  cors({
    origin: 'http://127.0.0.1:5500',
    credentials: true,
  })
);

app.get('/data', (req, res) => {
  res.json({ name: 'bobnini', favoriteFood: 'chicken' });
});

app.listen(3000);
