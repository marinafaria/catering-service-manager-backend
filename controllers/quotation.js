const db = require('../db');

// está incompleto, refazer

class Quotation {
    static async getAll() {
        return await db('Orcamentos').select();
    }

    static async create(quotation) {
        return await db('Orcamentos').insert({ ...quotation, statusOrcamento: 'Não aprovado', dataOrcamento: new Date() });
    }
}

module.exports = Quotation;