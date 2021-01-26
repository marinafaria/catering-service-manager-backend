const db = require('../db');

class QuotedProduct {
    static async getAll() {
        return await db('ProdutosOrcados').select();
    }

    static async create(quotedProduct) {
        return await db('ProdutosOrcados').insert({ ...quotedProduct });
    }
}

module.exports = QuotedProduct;
