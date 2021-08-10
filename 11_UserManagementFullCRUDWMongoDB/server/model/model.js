const mongoose = require("mongoose");

let scheme = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Define que campo obrigatorio
  },
  email: {
    type: String,
    required: true,
    unique: true, //Define que só aceita emails únicos
  },
  profissao: {
    type: String,
    required: true,
  },
  gender: String,
  status: String,
});

const Userdb = mongoose.model("userdb", scheme);

module.exports = Userdb;
