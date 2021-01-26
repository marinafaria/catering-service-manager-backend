const db = require('../db');

class ProductCategory {
    static async getAll() {
        return await db('CategoriaProduto').select();
    }

    static async create(productCategory) {
        return await db('CateogriaProduto').insert({ ...productCategory });
    }
}

module.exports = ProductCategory;
