import express from "express";
import { routes } from "./routes.js"; // Importa as rotas ( Get,Post,etc)
import cors from "cors"; // Habilita navegação CORS

// Váriaveis
const app = express();
const PORT = process.env.PORT || 3000;

// Habilita Req.Body e Json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// =--- Servidor ---=
app.use(routes); //Passa as outras rotas para o servidor
app.get("/", (req, res) => res.redirect("/users"));

app.listen(PORT, () => {
  console.log(`Escutando na porta ${PORT} em http://localhost:${PORT}`);
});
