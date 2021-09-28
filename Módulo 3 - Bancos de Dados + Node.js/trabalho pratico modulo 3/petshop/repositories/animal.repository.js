import { connect } from "./db.js";
//1.endpoint: criação de um animal
async function createAnimal(animais) {
    const conn = await connect();
    try {
        const sql = "INSERT INTO animais (nome, tipo, proprietario_id) VALUES ($1, $2, $3) RETURNING *"
        const values = [animais.nome, animais.tipo, animais.proprietario_id];
        const res = await conn.query(sql, values);
        return res.rows[0];
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}
//4.endpoint: Consulta de todos os animais
async function getAnimal() {
    const conn = await connect();
    try {
        const res = await conn.query("SELECT * FROM animais");
        return res.rows;
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}
//6.endpoint: Consulta de um animal por Proprietario_Id
//Semelhante ao "getAnimaisForProprietarioId",
//ocorria interferencia dos resultados de "deleteProprietario" e "getAnimal(proprietarioId)"
//Divergencias: "return res.rows[0];" e "return res.rows;""
//Resolver esta divergencia para compartilhar ambos functions para ambos endpoints
async function getAnimaisByProprietarioId(proprietarioId) {
    const conn = await connect();
    try {
        const res = await conn.query("SELECT * FROM animais WHERE proprietario_id = $1", [proprietarioId]);
        return res.rows;
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}
//5.endpoint: Consulta de um animal especifico Id
async function getAnimais(id) {
    const conn = await connect();
    try {
        const res = await conn.query("SELECT * FROM animais WHERE animal_id = $1", [id]);
        return res.rows[0];
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}
//Suport ao 5.endpoint proprietario: get de buscas de Animais por proprietario_id.
async function getAnimaisForProprietarioId(proprietarioId) {
    const conn = await connect();
    try {
        const res = await conn.query("SELECT * FROM animais WHERE proprietario_id = $1", [proprietarioId]);
        return res.rows[0];
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}
//3.endpoint: deletar um animal /Id
async function deleteAnimal(id) {
    const conn = await connect();
    try {
        await conn.query("DELETE FROM animais WHERE animal_id = $1", [id]);
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}
//2.endpoint: atualização de um animal
async function updateAnimal(animais) {
    const conn = await connect();
    try {
        const sql = 
            "UPDATE animais " +
            "   SET nome = $1, tipo = $2, proprietario_id = $3 " +
            " WHERE animal_id = $4 RETURNING *";
        const values = [animais.nome, animais.tipo, animais.proprietario_id, animais.animais_id];
        const res = await conn.query(sql, values);
        return res.rows[0];
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}

export default {
    createAnimal,
    getAnimal,
    getAnimaisByProprietarioId,
    getAnimais,
    getAnimaisForProprietarioId,
    deleteAnimal,
    updateAnimal
}
