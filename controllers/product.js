const db = require('../db');

class Product {
    static async getAll() {
        return await db('Produtos').select();
    }

    static async create(product) {
        return await db('Produtos').insert({ ...product });
    }
}

module.exports = Product;