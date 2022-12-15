const { default: Password } = require("antd/lib/input/Password");

const Pool = require("pg").Pool;

const pool = new Pool({
    user : 'postgres',
    password : "eboz9499",
    host: "localhost",
    port : 5432,
    database : "pernuser"
}); 


module.exports = pool;