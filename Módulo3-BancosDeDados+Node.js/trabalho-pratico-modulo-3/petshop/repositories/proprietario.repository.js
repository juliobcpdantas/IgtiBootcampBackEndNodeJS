import { connect } from "./db.js";
//1.endpoint: criação de um proprietário
async function insertProprietario(proprietario) {
    const conn = await connect();
    try {
        const sql = "INSERT INTO proprietarios (nome, telefone) VALUES ($1, $2) RETURNING *"
        const values = [proprietario.nome, proprietario.telefone];
        const res = await conn.query(sql, values);
        return res.rows[0];
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}
//4.endpoint: Consulta de todos os proprietários
async function getProprietarios() {
    const conn = await connect();
    try {
        const res = await conn.query("SELECT * FROM proprietarios");
        return res.rows;
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}
//5.endpoint: Consulta de um proprietário especifico Id
async function getProprietario(id) {
    const conn = await connect();
    try {
        const res = await conn.query("SELECT * FROM proprietarios WHERE proprietario_id = $1", [id]);
        return res.rows[0];
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}
//3.endpoint: deletar proprietário caso não exista animal vinculado animal.proprietario_id
async function deleteProprietario(id) {
    const conn = await connect();
    try {
        await conn.query("DELETE FROM proprietarios WHERE proprietario_id = $1", [id]);
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}
//2.endpoint: atualização de um proprietário
async function updateProprietario(proprietario) {
    const conn = await connect();
    try {
        const sql = 
            "UPDATE proprietarios " +
            "   SET nome = $1, telefone = $2 " +
            " WHERE proprietario_id = $3 RETURNING *";
        const values = [proprietario.nome, proprietario.telefone, proprietario.proprietario_id];
        const res = await conn.query(sql, values);
        return res.rows[0];
    } catch (err) {
        throw err;
    } finally {
        conn.release();
    }
}

export default {
    insertProprietario,
    getProprietarios,
    getProprietario,
    updateProprietario,
    deleteProprietario
}
