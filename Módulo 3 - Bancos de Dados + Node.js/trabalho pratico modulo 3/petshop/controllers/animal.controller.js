import AnimaisService from "../services/animal.service.js";

async function createAnimal(req, res, next) {
    try {
        let animais = req.body;
        if (!animais.nome || !animais.tipo || !animais.proprietario_id) {
            throw new Error("Nome, Tipo e Proprietario ID são obrigatórios.");
        }        
        animais = await AnimaisService.createAnimal(animais);
        res.send(animais);
        logger.info(`POST /animal - ${JSON.stringify(animais)}`);
    } catch (err) {
        next(err);
    }
}

async function getAnimal(req, res, next) {
    try {
        res.send(await AnimaisService.getAnimal(req.query.proprietario_id));
        logger.info("GET /animal");
    } catch (err) {
        next(err);
    }
}

async function getAnimais(req, res, next) {
    try {
        res.send(await AnimaisService.getAnimais(req.params.id));
        logger.info("GET /animal");
    } catch (err) {
        next(err);
    }
}

async function deleteAnimal(req, res, next) {
    try {
        await AnimaisService.deleteAnimal(req.params.id)
        res.end();
        logger.info("DELETE /animal");
    } catch (err) {
        next(err);
    }
}

async function updateAnimal(req, res, next) {
    try {
        let animais = req.body;
        if (!animais.animal_id || !animais.nome || !animais.tipo || !animais.proprietario_id) {
            throw new Error("Animal ID, Nome, Tipo e Proprietario ID são obrigatórios.");
        }        
        animais = await AnimaisService.updateAnimal(animais);
        res.send(animais);
        logger.info(`PUT /animal - ${JSON.stringify(animais)}`);
    } catch (err) {
        next(err);
    }
}

export default {
    createAnimal,
    getAnimal,
    getAnimais,
    deleteAnimal,
    updateAnimal
}