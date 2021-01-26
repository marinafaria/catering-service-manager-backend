const db = require('../db');

class StockSituation {
    static async getAll() {
        return await db('SituacaoEstoque').select();
    }

    static async create(stockSituation) {
        return await db('SituacaoEstoque').insert({ ...stockSituation });
    }
}

module.exports = StockSituation;
