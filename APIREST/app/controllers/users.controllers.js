import { pool } from "../config/database/db";
import message from "../config/message";

export const createUser = async (req, res) => {
    try {
        const name = req.body.name;
        // const result = await pool.query(`INSERT INTO users(name) VALUES('${name}')`);
        // res.json(result);
        const result = await pool.query(`call spInsertarUser('${name}')`)
    } catch ( error ) {
        message(error.message, "danger");
        res.status(500);
    }
}
export const listUser = async (req, res) => {
    try {
        const result = await pool.query(`call spListarUser()`);
        res.json(result);
    } catch (error) {
        message(error.message, "danger");
        res.status(500);
        
    }
}
export const findUser = async(req, res)=>{
    try {
        const id = req.params.id;
        const result = await pool.query(`call spEncontrarUser(${id})`);
        res.json(result);
    } catch (error) {
        message(error.message, "danger");
        res.status(500);
    }
}
export const pingUser = async(req, res)=>{
    try {
        const result = await pool.query(`SELECT 'HOLA' AS result`);
        res.send(result[0].result);
    } catch (error) {
        message(error.message, "danger");
        res.status(500);
    }
} 
export const updateUser = async(req, res)=>{
    try { 
        const id = req.params.id;
        const name = req.body.name;
        const result = await pool.query(`call spModificarUser(${id},${'name'})`);
        res.json(result);
    } catch (error) {
        message(error.message, "danger");
        res.status(500);
    }
}
export const deleteUSER = async(req, res)=>{
    try { 
        const id = req.params.id;
        const result = await pool.query(`call spEliminarUser(${id})`);
        res.json(result);
    } catch (error) {
        message(error.message, "danger");
        res.status(500);
    }
}