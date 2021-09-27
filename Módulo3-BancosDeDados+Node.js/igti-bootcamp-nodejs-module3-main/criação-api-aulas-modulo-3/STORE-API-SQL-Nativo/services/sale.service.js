import SaleRepository from "../repositories/sale.repository.js";

async function createSale(sale) {
  return await SaleRepository.insertSale(sale);
}

async function getSales() {
  return await SaleRepository.getSales();
}

async function getSale(id) {
  return await SaleRepository.getSale(id);
}

async function deleteSale(id) {
  await SaleRepository.deleteSale(id);
}

async function updateSale(sale) {
  return await SaleRepository.updateSale(sale);
}

export default {
  createSale,
  getSales,
  getSale,
  deleteSale,
  updateSale
}