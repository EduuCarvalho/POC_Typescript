import { Router } from "express"
import {getFilmeById, getHealth, postFilme, updateFilmDescription} from "../controllers/movies.controllers.js";
import { filmesPostValidations } from "../middlewares/filmesValidations.js";

const routes = Router();

routes.get("/health", getHealth);
routes.post("/filme",filmesPostValidations,postFilme)
routes.get("/filme/:id", getFilmeById)
routes.put("/update",updateFilmDescription)

export default routes;
