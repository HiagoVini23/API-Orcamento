import { Router } from "express";
import UsersController from "./controllers/UserController";

const routes = Router();

routes.get("/users", UsersController.getUsers);

export default routes;