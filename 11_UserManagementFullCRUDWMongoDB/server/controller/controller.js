let Userdb = require("../model/model");

// Cria e salva novos usuários
exports.create = (req, res) => {
  //Valida request ( Pedido )
  if (!req.body) {
    res.status(404).send({ message: "Conteúdo não pode ser vazio!" });
    return;
  }

  // Cria usuário
  const user = new Userdb({
    name: req.body.name,
    email: req.body.email,
    profissao: req.body.profissao,
    gender: req.body.gender,
    status: req.body.status,
  });

  // Salva usuário no Banco de Dados
  user
    .save(user)
    .then((data) => {
      //res.send(data);
      res.redirect("/add-user");
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Ocorreu algum erro durante a criação do usuário",
      });
    });
};

// Busca e retorna todos os usuários / um único usuário
exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;

    Userdb.findById(id)
      .then((data) => {
        if (!data) {
          res
            .status(404)
            .send({ message: `Usuário de ID ${id}. não encontrado` });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: `Erro ao achar Usuário de ID ${id}.` });
      });
  } else {
    Userdb.find() // Acha todos os usuários
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Ocorreu algum erro ao pegar os usuários",
        });
      });
  }
};

// Atualiza um usuário identificado por ID
exports.update = (req, res) => {
  if (!req.body) {
    return res
      .status(400)
      .send({ message: "Campos para atualização não podem ser vazios" });
  }
  const id = req.params.id;
  Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Não foi possivel atualizar usuário com id ${id}. Talvez não foi encontrado!`,
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Erro ao atualizar informações" });
    });
};

// Deleta um usuário identificado por ID
exports.delete = (req, res) => {
  const id = req.params.id;

  Userdb.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Não possivel deletar usuario de id: ${id}. Talvez ID esteja errado`,
        });
      } else {
        res.send({ message: "Usuário deletado com sucesso!" });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: `Não possivel deletar usuario de id: ${id}.` });
    });
};
