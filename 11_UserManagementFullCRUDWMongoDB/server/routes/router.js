const express = require("express");
const routes = express.Router();

const services = require("../services/render"); // Mostra e Direciona as páginas
const controller = require("../controller/controller"); // Controla a passagem de dados no mongoDB

/**       --- Rotas---
 * @description Root Route
 * @method GET /
 */
routes.get("/", services.homeRoutes);
// ---
/**
 * @description Add Usuário
 * @method GET /add-user
 */
routes.get("/add-user", services.add_user);
// ---
/**
 * @description Atualizar Usuário
 * @method GET /update-user
 */
routes.get("/update-user", services.update_user);

// APIS
routes.post("/api/users", controller.create);
routes.get("/api/users", controller.find);
routes.put("/api/users/:id", controller.update);
routes.delete("/api/users/:id", controller.delete);

module.exports = routes;
