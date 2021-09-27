import AnimaisRepository from "../repositories/animal.repository.js";
import ProprietarioRepository from "../repositories/proprietario.repository.js";

async function createAnimal(animais) {
    if (await ProprietarioRepository.getProprietario(animais.proprietario_id)) {
        return await AnimaisRepository.createAnimal(animais);
    }
    throw new Error("O proprietario_id informado não existe.");
}

async function getAnimal(proprietarioId) {
    if (proprietarioId) {
        return await AnimaisRepository.getAnimaisByProprietarioId(proprietarioId);
    }
    return await AnimaisRepository.getAnimal();
}
async function getAnimais(id) {
    return await AnimaisRepository.getAnimais(id);
}

async function deleteAnimal(id) {
    await AnimaisRepository.deleteAnimal(id);
}

async function updateAnimal(animais) {
    if (await ProprietarioRepository.getProprietario(animais.proprietario_id)) {
        return await AnimaisRepository.updateAnimal(animais);
    }
    throw new Error("O proprietario_id informado não existe.");
}

export default {
    createAnimal,
    getAnimal,
    getAnimais,
    deleteAnimal,
    updateAnimal
}