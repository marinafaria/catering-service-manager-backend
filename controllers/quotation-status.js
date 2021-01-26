const db = require('../db');

class QuotationStatus {
    static async getAll() {
        return await db('StatusOrcamento').select();
    }

    static async create(quotationStatus) {
        return await db('StatusOrcamento').insert({ ...quotationStatus });
    }
}

module.exports = QuotationStatus;
