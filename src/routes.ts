import { Router } from "express";
import UserController from "./controllers/UserController";
import ProductController from "./controllers/ProductController";
import BudgetController from "./controllers/BudgetController";

const routes = Router();

routes.get("/users", UserController.getUsers);
routes.get("/products", ProductController.getProducts);
routes.get("/budget", BudgetController.doBudget);

export default routes;