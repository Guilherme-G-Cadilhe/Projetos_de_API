const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');

app.use(cors());

app.get('/', async (req, res) => {
  try {
    //Por padrão o AXIOS tem a response em Json no DATA
    const { data } = await axios('https://jsonplaceholder.typicode.com/users');

    res.json(data);
  } catch (error) {
    console.error(error);
  }
});

app.listen('3000');
