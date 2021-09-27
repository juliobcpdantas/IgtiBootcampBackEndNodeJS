import express, { json } from "express";
import { promises as fs } from "fs";
const router = express.Router();


//------LISTAGEM DE TODOS OS PEDIDOS-----------------
// Função de listar pedidos do "pedidos.json"
async function listPedidos() {
  try {
    const data = await fs.readFile("pedidos.json");
    const jsonPedidos = JSON.parse(data);
    return jsonPedidos;
  } catch (err) {
    console.log(err);
  }
}
//Get de lista de pedidos
router.get("/listarPedidos", async (req, res) => {
  res.send(await listPedidos());
  console.log("0- solicitada lista de todos os pedidos");
});
//--------------------------------------------------------------
//1------CRIAÇÃO DE NOVO PEDIDO-------------------
// Função para criação de novos pedidos em "pedido.json"
//criar função
/*
  WrireFile (escrever em "pedidos.json") 
  - ID.string = NextID ==> NextID = NextID++
  - Cliente.string = inserido
  - Produto.string = inserido
  - Valor.float = Buscar em "pedido.json" string Produto === Produto
  e escrever respectivo Valor
  - Entregue.boolean = False
  - timestamp.string = data do momento da inserção 
  */
//Get de criação de novo pedido
router.get("/criarPedido", async (req, res) => {
  try {
    console.log("1- criação de novo pedido");
  } catch (err) {}
});
//;--------------------------------------------------------------
//2------ATUALIZAÇÃO DE PEDIDO-------------------
router.get("/atualizarPedido", async (req, res) => {
  try {
    console.log("2- atualização de pedido");
  } catch (err) {}
});
//;--------------------------------------------------------------
//3------ATUALIZAR STATUS DE PEDIDO-------------------
router.get("/mudarStatusPedido", async (req, res) => {
  try {
    console.log("3- mudança de status de pedido");
  } catch (err) {}
});
//;--------------------------------------------------------------
//4------EXCLUIR UM PEDIDO-------------------
router.get("/excluirPedido", async (req, res) => {
  try {
    console.log("4- exclusão de pedido");
  } catch (err) {}
});
//;--------------------------------------------------------------
//5------CONSULTAR UM PEDIDO ESPECÍFICO-------------------
router.get("/consultarPedido", async (req, res) => {
  try {
    console.log("5- consulta de um pedido");
  } catch (err) {}
});
//;--------------------------------------------------------------
//6------CONSULTAR VALOR TOTAL DE
//-------PEDIDOS JA ENTREGUES POR CLIENTE-------------------
router.get("/valorTotalEntregueCliente", async (req, res) => {
  try {
    console.log("6- valor total pedido entregue por cliente");
  } catch (err) {}
});
//;--------------------------------------------------------------
//7------CONSULTAR VALOR TOTAL DE
//-------PEDIDOS JA ENTREGUES POR PRODUTO-------------------
router.get("/valorTotalEntregueProduto", async (req, res) => {
  try {
    console.log("7- valor total pedido entregue por produto");
  } catch (err) {}
});
//;--------------------------------------------------------------
//8------RETORNAR PRODUTOS MAIS VENDIDOS,
//QUANTIDADE DE VEZES QUE FORAM PEDIDOS E
//RANQUEA-LOS EM ORDEM DECESCENTE DE MAIS PEDIDOS
// COM RESPECTIVAS QUANTIDADES
function rankingMaisVendidos() {
  try {

  } catch {}
};

//Get de ranking mais vendidos
router.get("/rankingMaisVendidos", async (req, res) => {
  res.send(await rankMaisVendidos());
    console.log("8- Rankins de Produtos mais vendidos e suas quantidades")
}

//;--------------------------------------------------------------
export default router;
