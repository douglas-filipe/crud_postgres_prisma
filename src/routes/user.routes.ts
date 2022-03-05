/**
 * Responsável por criar as rotas da aplicação
 * e em cada rota é chamado um Controller e/ou
 * Middleware, que veremos em outro projeto
 */
import express from "express";
import {
  createUserController,
  deleteUserController,
  listUsersController,
  updateUserController,
  userDetailsController,
} from "../controllers/user.controller";
const route = express.Router();

route.get("/users", listUsersController);
route.get("/user/:id", userDetailsController);
route.post("/user", createUserController);
route.patch("/user/:id", updateUserController);
route.delete("/user/:id", deleteUserController);

export default route;
