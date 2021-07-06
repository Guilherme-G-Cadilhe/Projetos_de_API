const express = require('express');
const app = express();
const data = require('./data.json');
// Pega os Dados falsos

app.use(express.json()); // middleware que lê json

// Faz a porta escutar requisições
app.listen(3000, function () {
  console.log('Server is running on port 3000');
});

// rotina exemplo de um get normal
app.get('/clients', function (req, res) {
  res.json(data);
});

//rotina exemplo de achar um cliente por id
app.get('/clients/:id', function (req, res) {
  const { id } = req.params;
  const client = data.find((cliente) => cliente.id === id);
  if (!client) return res.status(204).json();
  res.json(client);
});

//rotina exemplo de salvar um cliente novo
app.post('/clients', function (req, res) {
  const { name, email } = req.body;

  // salvar

  res.json({ name: name, email: email });
});

//rotina exemplo de atualizar dados do cliente
app.put('/clients/:id', function (req, res) {
  const { id } = req.params;
  const client = data.find((cliente) => cliente.id === id);
  if (!client) return res.status(204).json();

  const { name, email } = req.body;

  client.name = name;
  client.email = email;

  res.json(client);
});

//rotina exemplo de deletar um cliente
app.delete('/clients/:id', function (req, res) {
  const { id } = req.params;
  const clientFiltered = data.filter((client) => client.id !== id);

  res.json(clientFiltered);
});

// Verbos HTTP
//http://localhost:3000/client( Client seria um Resource)

// GET: Receber dados de um Resource
// POST: Enviar Dados ou informações para um Resource
// PUT: Atualizar os dados de um Resource
// DELETE: Deletar um Resource
