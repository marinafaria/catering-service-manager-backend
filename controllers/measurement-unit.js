const db = require('../db');

class MeasurementUnit {
    static async getAll() {
        return await db('UnidadeMedida').select();
    }

    static async create(measurementUnit) {
        return await db('UnidadeMedida').insert({ ...measurementUnit });
    }
}

module.exports = MeasurementUnit;