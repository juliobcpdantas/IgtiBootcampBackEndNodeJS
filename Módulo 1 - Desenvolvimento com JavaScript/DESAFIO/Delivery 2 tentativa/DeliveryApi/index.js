import express from "express"; //importar modulo express
import apiRouter from "./Routers/router.js"; //importar const router de router.js
import { promises as fs, readSync } from "fs"; //importar funçao promises***

const { readFile } = fs;

global.fileName = "pedidos.json"; //declarar variável global

const app = express(); //utilização do express em variavel app
app.use(express.json()); //app usará .json
app.use("/delivery", apiRouter); //definição de url para acesso as routers

app.listen(8080, async () => {
  //definindo porta de acesso
  try {
    await readFile(fileName); //leitura do "pedidos.json"
    console.log("API inicializada");
  } catch (err) {
    console.log(err);
  }
});
