console.log("projeto iniciado");

//import { promises as fs } from 'fs';
import fs from "fs";

let arrayCarros = [];

init();

function init() {
  // Carregando a base de dados
  carregarCarros();
  returnMarcasMais();
  returnMarcasMenos();
}

// Criar uma função que retorne o nome da marca que mais possui modelos.
function carregarCarros() {
  try {
    const data = fs.readFileSync("./car-list.json");
    const jsonCarros = JSON.parse(data);
    arrayCarros = Object.values(jsonCarros);
  } catch (err) {
    console.log(err);
  }
}

function returnMarcasMais() {
  let marcaQtd = 0;
  let ArraymarcaNome = [];

  for (let index = 0; index < arrayCarros.length; index++) {
    const element = arrayCarros[index];
    if (element.models.length > marcaQtd) {
      ArraymarcaNome.length = 0;
      ArraymarcaNome = [];
      ArraymarcaNome = [element.brand];
      marcaQtd = element.models.length;
    } else if ((element.models.length = marcaQtd)) {
      ArraymarcaNome.push(element.brand);
    }
  }

  console.log(ArraymarcaNome);
}

function returnMarcasMenos() {
  let marcaQtd = 99;
  var marcaNome;

  for (let index = 0; index < arrayCarros.length; index++) {
    const element = arrayCarros[index];
    if (element.models.length < marcaQtd) {
      marcaNome = element.brand;
      marcaQtd = element.models.length;
    }
  }
  console.log(marcaNome);
}
