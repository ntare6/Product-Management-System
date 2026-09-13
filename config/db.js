//import the pg module(we intsalled) only since it returns mutiple classes and functions like client,pool
const {Pool} = require('pg');
//require('dotenv') returns the object and config load the variables in memory

require ('dotenv').config();

//since tests are run many times we need to separate them from dev and prod

const getDbName = () => {

    //uses NODE_ENV to know which environment to use
    switch (process.env.NODE_ENV){
        //returns env database tied to env file
        case 'test' : return process.env.DB_NAME_TEST;
        case 'production': return process.env.DB_NAME_PROD;
        default: return process.env.DB_NAME_DEV;
        
    }
};


const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database:getDbName(),
    ssl: process.env.NODE_ENV ==='production' ? { rejectUnauthorized: false} : false,
});

pool.on('connect', () => {
    console.log(`Connected to postgreSQL Database: ${getDbName()} `)
})

pool.on('error', (err) => {
    console.error('unexpcted error on idle client', err)
    process.exit(-1);
});

module.exports = {
    query: (text, params) => pool.query(text, params),
    pool,
};