const db = require('../db');

class EventType {
    static async getAll() {
        return await db('TipoEvento').select();
    }

    static async create(eventType) {
        return await db('TipoEvento').insert({ ...eventType });
    }
}

module.exports = EventType;