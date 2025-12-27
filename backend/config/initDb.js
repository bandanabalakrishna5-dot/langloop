const { query } = require('./db');

async function initDatabase() {
    const createUsersTable = `
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            first_name VARCHAR(255) NOT NULL,
            last_name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `;

    try {
        await query(createUsersTable);
        console.log('✅ Users table ensured');
    } catch (error) {
        console.error('❌ Error creating users table:', error);
    }
}

module.exports = { initDatabase };
