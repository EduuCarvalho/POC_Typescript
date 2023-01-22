import { Request, Response } from "express"
import connectionDB from "../database/database.js";
import { postFilmes } from "../repositories/filmesRepository.js";


type Filme = {
    nome: string,
    descricao: string,
    status: boolean,
    plataformaId: number,
    generoId: number
}

export async function getHealth(req: Request, res: Response) {
    res.send("OK")
};

export async function postFilme(req: Request, res: Response) {
    const filme = req.body as Filme;

    try {
        await postFilmes(filme.nome, filme.descricao, filme.status, filme.plataformaId, filme.generoId)

        res.status(200).send("Post feito com sucesso!")
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}


