const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    // mongodb connection string
    const conexao = await mongoose.connect(process.env.MONGO_URI, {
      // Opções para definir permissões na conexão
      useNewUrlParser: true, // Obrigatorio
      useUnifiedTopology: true, // Obrigatorio
      useFindAndModify: false, //  \/ Opcionais
      useCreateIndex: true,
    });
    console.log(`MongoDB connected: ${conexao.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
