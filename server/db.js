const Pool = require("pg").Pool;

const pool = new Pool({
    user: "mohammadbakeer320",
    password:"1a2b3cMjB(())*",
    host: "localhost",
    port: 5432,
    database: "perntodo"
})

module.exports = pool;