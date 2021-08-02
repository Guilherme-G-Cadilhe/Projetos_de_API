import express from "express";
import { usersController } from "./src/controllers/usersController.js"; // Controle de Úsuarios

const routes = express.Router(); // Objeto guarda rotas

// Rotas
//Todas as rotas aqui estão começando com '/users' como definido no server.js
routes.get("/users", usersController.getUsers);
routes.get("/users/:id", usersController.getSingleUser); // '/users/2' => req.params
routes.post("/users", usersController.createUser); // Cria um usuário
routes.delete("/users/:id", usersController.deleteUser); // Deleta por ID o usuário
routes.patch("/users/:id", usersController.updateUser); //Atualiza parcialmente os dados

export { routes };
