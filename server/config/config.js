const mysql = require('mysql2/promise');

const conn = mysql.createPool({
    host: 'achi-store.ctyetg9uawza.ap-southeast-2.rds.amazonaws.com',
    user: 'admin',
    password: 'webpro2022itkmitl',
    database: 'database_achi',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

module.exports = conn;