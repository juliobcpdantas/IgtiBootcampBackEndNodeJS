import apiRepository from "../Repositories/repository.js"; //importar async functions de repository.js

async function criarPedido(pedido) {
  return await apiRepository.criarPedido(pedido);
}

async function atualizarPedido(pedido) {
  return await apiRepository.atualizarPedido(pedido);
}

async function atualizarStatus(pedido) {
  const pd = await apiRepository.consultarPedido(pedido.id);
  pd.entregue = pedido.entregue;
  return await apiRepository.atualizarPedido(pd);
}

async function excluirPedido(pedido) {
  return await apiRepository.excluirPedido(pedido);
}

async function consultarPedido(pedido) {
  return await apiRepository.consultarPedido(pedido);
}

async function consultaVTCP(data) {
  return await apiRepository.consultaVTCP(data);
}

async function maisVendidos() {
  return await apiRepository.maisVendidos();
}

export default {
  criarPedido,
  atualizarPedido,
  atualizarStatus,
  excluirPedido,
  consultarPedido,
  consultaVTCP,
  maisVendidos,
};
