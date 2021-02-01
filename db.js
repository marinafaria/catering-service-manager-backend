const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '158.101.119.13',
        user: 'root',
        password: '@Aa12345',
        database: 'DB'
    },
    pool: { min: 0, max: 7 }
});

module.exports = knex;