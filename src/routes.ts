import { Router } from "express";
import UserController from "./controllers/UserController";
import ProductController from "./controllers/ProductController";

const routes = Router();

routes.get("/users", UserController.getUsers);
routes.get("/products", ProductController.getProducts);

export default routes;