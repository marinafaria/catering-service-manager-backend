const db = require('../db');

class QuotedProduct {
    static async getAll() {
        return await db('ProdutosOrcados').select();
    }

    static async create(quotedProducts) {
        return await db('ProdutosOrcados').insert(quotedProducts);
    }
}

module.exports = QuotedProduct;
