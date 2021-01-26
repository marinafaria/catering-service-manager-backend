const db = require('../db');

class Client {
    static async getAll() {
        return await db('Clientes').select();
    }

    static async create(client) {
        return await db('Clientes').insert({ ...client });
    }
}

module.exports = Client;