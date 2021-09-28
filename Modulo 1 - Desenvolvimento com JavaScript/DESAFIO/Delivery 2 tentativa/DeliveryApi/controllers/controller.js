import apiService from "../Services/services.js"; //importar async functions de service.js

async function criarPedido(req, res, next) {
  try {
    let pedido = req.body;
    if (!pedido.cliente || !pedido.produto) {
      throw new Error("Dados inválidos");
    }
    pedido = await apiService.criarPedido(pedido);
    res.send({ pedido });
  } catch (err) {
    next(err);
  }
}

async function atualizarPedido(req, res, next) {
  try {
    const pedido = req.body;
    if (
      !pedido.id ||
      !pedido.cliente ||
      !pedido.produto ||
      pedido.valor == null
    ) {
      throw new Error("ID, Cliente, produto ou valor sao invalidos");
    }
    res.send(await apiService.atualizarPedido(pedido));
  } catch (err) {
    next(err);
  }
}

async function atualizarStatus(req, res, next) {
  try {
    const pedido = req.body;

    if (!pedido.id || pedido.entregue == undefined) {
      throw new Error("Id ou status de entrega incorretos");
    }

    res.send(await apiService.atualizarStatus(pedido));
  } catch (err) {
    next(err);
  }
}

async function excluirPedido(req, res, next) {
  try {
    await apiService.excluirPedido(req.body.id);
    res.end();
  } catch (err) {
    next(err);
  }
}

async function consultarPedido(req, res, next) {
  try {
    if (!req.params.id) {
      throw new Error("Pedido nao encontrado");
    }
    res.send(await apiService.consultarPedido(req.params.id));
  } catch (err) {
    next(err);
  }
}

async function consultaVTCP(req, res, next) {
  try {
    res.send(await apiService.consultaVTCP(req.params.data));
  } catch (err) {
    next(err);
  }
}

async function maisVendidos(req, res, next) {
  try {
    res.send(await apiService.maisVendidos());
  } catch (err) {
    next(err);
  }
}

export default {
  //exportar async functions
  criarPedido,
  atualizarPedido,
  atualizarStatus,
  excluirPedido,
  consultarPedido,
  consultaVTCP,
  maisVendidos,
};
