import express from "express"; //importar modulo express
import apiController from "../controllers/controller.js"; //importar async functions de controller.js

const router = express.Router();
router.use(express.json());

router.post("/criarPedido", apiController.criarPedido);
router.put("/atualizarPedido", apiController.atualizarPedido);
router.patch("/atualizarStatus", apiController.atualizarStatus);
router.get("/consultarPedido/:id", apiController.consultarPedido);
router.delete("/excluirPedido", apiController.excluirPedido);
router.get("/valorTotalCliente/:data", apiController.consultaVTCP);
router.get("/valorTotalProduto/:data", apiController.consultaVTCP);
router.get("/maisVendidos", apiController.maisVendidos);

router.use((err, req, res, next) => {
  console.log(err);
  res.status(400).send({ error: err.message });
});

export default router; //exportar const router
