const connectDB = require('./db');

async function initDatabase() {
    await connectDB();
}

module.exports = { initDatabase };
