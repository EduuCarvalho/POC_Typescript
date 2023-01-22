import express from "express";
import routes from "./routes/routes.js"


const app = express();
app.use(express.json());
app.use(routes);

app.listen(4000, ()=>{
console.log(`Server is up and running!!!`)
});


// BANCO
// FILMES
//"id" SERIAL PRIMARY KEY,
// "nome" TEXT UNIQUE NOT NULL,
//"descricao" VARCHAR(350),
//"status" BOOLEAN NOT NULL DEFAULT FALSE,
//"plataformaId" INTEGER NOT NULL REFERENCES "plataforma"("id"),
//"generoId" INTERNET NOT NULL REFERENCES "genero"("id")


// plataforma
//"id" SERIAL PRIMARY KEY,
//"plat" TEXT UNIQUE NOT NULL


// genero
//"id" SERIAL PRIMARY KEY,
//"gen" TEXT UNIQUE NOT NULL,