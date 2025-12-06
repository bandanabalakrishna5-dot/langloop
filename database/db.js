const mysql = require('mysql2');

// Create a pool of connections
const pool = mysql.createPool({
    host: '127.0.0.1',      // Replace with your database host
    user: 'root',           // Replace with your database user
    password: 'A17QrtmN0@!TF',   // Replace with your database password
    database: 'companys', // Replace with your database name
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Export the promise-wrapped pool
module.exports = pool.promise();
