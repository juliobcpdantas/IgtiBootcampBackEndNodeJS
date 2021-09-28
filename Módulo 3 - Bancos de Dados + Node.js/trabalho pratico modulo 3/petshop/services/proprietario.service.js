import ProprietarioRepository from "../repositories/proprietario.repository.js";
import AnimalRepository from "../repositories/animal.repository.js";//importar para validação de deleteProprietario

//1.endpoint: criação de um proprietário
async function createProprietario(proprietario) {
    return await ProprietarioRepository.insertProprietario(proprietario);
}
//4.endpoint: Consulta de todos os proprietários
async function getProprietarios() {
    return await ProprietarioRepository.getProprietarios();
}
//5.endpoint: Consulta de um proprietário especifico Id
async function getProprietario(id) {
    return await ProprietarioRepository.getProprietario(id);
}
//3.endpoint: deletar proprietário caso não exista animal vinculado animal.proprietario_id
async function deleteProprietario(id) {
    if (await AnimalRepository.getAnimaisForProprietarioId(id)) {
        throw new Error("Proprietario não pode ser deletado, animal Vinculado")
    }
    return await ProprietarioRepository.deleteProprietario(id);
}
//2.endpoint: atualização de um proprietário
async function updateProprietario(proprietario) {
    return await ProprietarioRepository.updateProprietario(proprietario);
}

export default {
    createProprietario,
    getProprietarios,
    getProprietario,
    deleteProprietario,
    updateProprietario
}