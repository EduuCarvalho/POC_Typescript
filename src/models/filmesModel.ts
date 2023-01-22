import joi from "joi";

export const filmesPostModel = joi.object({
    "nome": joi.string().required(),
    "descricao": joi.string().required(),
    "status": joi.boolean().required(),
    "plataformaId": joi.number().required(),
    "generoId": joi.number().required()
})
