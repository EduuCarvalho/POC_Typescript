import connectionDB from "../database/database.js";


export async function postFilmes(nome: string, descricao: string, status : boolean, plataformaId: number, generoId: number) {
        return connectionDB.query(
            `INSERT INTO filmes (nome,descricao,status,"plataformaId", "generoId") VALUES ($1,$2,$3,$4,$5);`,[nome,descricao,status,plataformaId,generoId]
            )

}


