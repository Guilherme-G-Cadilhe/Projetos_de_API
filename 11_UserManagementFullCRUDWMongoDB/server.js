// ---- Imports -----
const dotenv = require("dotenv"); // Valores Secretos
const express = require("express"); // Server
const cors = require("cors"); // Habilita navegação CORS
const morgan = require("morgan"); // HTTP request logger
const path = require("path"); // pra pastas com caminho de EJS diferentes da "Views"
const connectDB = require("./server/database/connection"); // Conexão do MongoDB

// Configurando o .ENV
dotenv.config({ path: "config.env" });

// Váriaveis
const app = express();
const PORT = process.env.PORT || 8080;

// Habilita Req.Body , Json e usa CORS
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Habilita os Assets ( CSS , IMG, etc)
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

// Log requests
app.use(morgan("tiny"));

// MongoDB Connection
connectDB();

// Seta o View Engine
app.set("view engine", "ejs");
//app.set("views",path.resolve(__dirname,"views/pastaComEJSdentroDoViews"))
// Caso você coloque os EJS em uma pasta diferente do padrão view
// é necessario especificar o caminho dessa forma /\ ( acima )

//---- Carrega Rotas ----
app.use("/", require("./server/routes/router"));

// =--- Servidor ---=
app.listen(PORT, () => console.log(`Escutando em http://localhost:${PORT}`));
