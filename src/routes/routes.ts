import { Router } from "express"
import {getHealth, postFilme} from "../controllers/movies.controllers.js";

const routes = Router();

routes.get("/health", getHealth);
routes.post("/filme",postFilme)

export default routes;
