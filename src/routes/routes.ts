import { Router } from "express"
import {getHealth, postFilme} from "../controllers/movies.controllers.js";
import { filmesPostValidations } from "../middlewares/filmesValidations.js";

const routes = Router();

routes.get("/health", getHealth);
routes.post("/filme",filmesPostValidations,postFilme)

export default routes;
