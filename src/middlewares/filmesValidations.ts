import { NextFunction, Request,Response } from "express";
import { filmesPostModel } from "../models/filmesModel";

export async function filmesPostValidations(req: Request,res: Response,next:NextFunction) {
        const { error } = filmesPostModel.validate(req.body,{abortEarly:false});

        if(error) return res.status(422).send(error.details.map(detail=> detail.message));
        
}   