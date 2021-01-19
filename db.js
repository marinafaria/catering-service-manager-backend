const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '158.101.119.13',
        user: 'root',
        password: '@Aa12345',
        database: 'DB'
    }
});

module.exports = knex;