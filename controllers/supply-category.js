const db = require('../db');

class SupplyCategory {
    static async getAll() {
        return await db('CategoriaInsumo').select();
    }

    static async create(supplyCategory) {
        return await db('CategoriaInsumo').insert({ ...supplyCategory });
    }
}

module.exports = SupplyCategory;