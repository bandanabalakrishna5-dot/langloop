const { query } = require('../config/db');

class UserServiceSql {
    /**
     * Create a new user in the database
     */
    async createUser(userData) {
        const { firstName, lastName, email, password } = userData;
        const sql = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)';
        const result = await query(sql, [firstName, lastName, email, password]);
        return result.insertId;
    }

    /**
     * Find a user by email
     */
    async getUserByEmail(email) {
        const sql = 'SELECT * FROM users WHERE email = ?';
        const results = await query(sql, [email]);
        return results[0];
    }

    /**
     * Find a user by ID
     */
    async getUserById(id) {
        const sql = 'SELECT id, first_name, last_name, email, created_at FROM users WHERE id = ?';
        const results = await query(sql, [id]);
        return results[0];
    }

    /**
     * Update user details
     */
    async updateUser(id, updateData) {
        const fields = [];
        const params = [];

        if (updateData.firstName) {
            fields.push('first_name = ?');
            params.push(updateData.firstName);
        }
        if (updateData.lastName) {
            fields.push('last_name = ?');
            params.push(updateData.lastName);
        }
        if (updateData.email) {
            fields.push('email = ?');
            params.push(updateData.email);
        }
        if (updateData.password) {
            fields.push('password = ?');
            params.push(updateData.password);
        }

        if (fields.length === 0) return;

        const sql = `UPDATE users SET ${fields.join(', ')} WHERE id = ?`;
        params.push(id);

        return await query(sql, params);
    }

    /**
     * Delete a user
     */
    async deleteUser(id) {
        const sql = 'DELETE FROM users WHERE id = ?';
        return await query(sql, [id]);
    }

    /**
     * Get all users
     */
    async getAllUsers() {
        const sql = 'SELECT id, first_name, last_name, email, created_at FROM users';
        return await query(sql);
    }
}

module.exports = new UserServiceSql();
