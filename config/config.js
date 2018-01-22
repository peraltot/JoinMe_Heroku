const dotenv = require("dotenv").config();


module.exports = {
    development: {
        username: process.env.DBUSER,
        password: process.env.DBPASS,
        database: process.env.DB,
        host: "mna97msstjnkkp7h.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        dialect: "mysql"
    },
    test: {
        username: process.env.DBUSER,
        password: process.env.DBPASS,
        database: process.env.DB,
        host: "mna97msstjnkkp7h.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        dialect: "mysql"
    },
    production: {
        username: process.env.DBUSER,
        password: process.env.DBPASS,
        database: process.env.DB,
        host: "mna97msstjnkkp7h.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        dialect: "mysql"
    }
}