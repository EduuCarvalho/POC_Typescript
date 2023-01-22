import { Request,Response } from "express"
import connectionDB from "../database/database.js";

type Filme = {
    nome: string,
    descricao: string,
    status: boolean,
    plat: string,
    gen: string
}

export async function getHealth (req: Request, res: Response){
    
    res.send("OK")

};

export async function postFilme (req: Request, res: Response){
    const filme = req.body as Filme;
    console.log("PASSEI POR AQUI MAS N ENTREI NO BANCO")

    try{
        await connectionDB.query(
            `INSERT INTO filme JOIN genero JOIN plataforma VALUES(nome,descricao,status,plat,gen) VALUES ($1,$2,$3,$4,$5);`,[filme.nome,filme.descricao,filme.status,filme.plat,filme.gen]
        ) 
        res.status(200).send("Post feito com sucesso!")
    }catch (err){
        console.log(err)
        res.sendStatus(501)
    }
}

