const db = require('../db');

class Supply {
    static async getAll() {
        return await db('Insumos').select();
    }

    static async create(supply) {
        return await db('Insumos').insert({ ...supply });
    }
}

module.exports = Supply;