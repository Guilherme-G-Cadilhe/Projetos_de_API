const axios = require("axios");

exports.homeRoutes = (req, res) => {
  // Make a get request to /api/users
  axios
    .get("http://localhost:3000/api/users")
    .then(function (response) {
      res.render("index", { users: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.add_user = (req, res) => {
  res.render("add_user");
};

exports.update_user = async (req, res) => {
  try {
    const dadosUsuario = await axios.get("http://localhost:3000/api/users", {
      params: { id: req.query.id },
    });
    console.log(dadosUsuario.data);
    res.render("update_user", { user: dadosUsuario.data });
  } catch (error) {
    res.send(error);
    console.log(error);
  }
};
