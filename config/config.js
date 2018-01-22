const dotenv = require("dotenv").config();


module.exports = {
    development: {
        // user_env_variable: process.env.JAWSDB_URL
        username: process.env.DBUSER,
        password: process.env.DBPASS,
        database: process.env.DB,
        host: "127.0.0.1",
        dialect: "mysql"
    },
    test: {
        // user_env_variable: process.env.JAWSDB_URL
        username: process.env.DBUSER,
        password: process.env.DBPASS,
        database: process.env.DB,
        host: "127.0.0.1",
        dialect: "mysql"
    },
    production: {
    user_env_variable: process.env.JAWSDB_URL
    }
 }