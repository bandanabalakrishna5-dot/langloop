const bcrypt = require('bcrypt');
const userServiceSql = require('./userServiceSql');

class UserService {
    /**
     * Register a new user
     */
    async registerUser(userData) {
        const { firstName, lastName, email, password } = userData;

        // Hash the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Pass the hashed password to the SQL service
        const userId = await userServiceSql.createUser({
            firstName,
            lastName,
            email,
            password: hashedPassword
        });

        return {
            id: userId,
            firstName,
            lastName,
            email
        };
    }

    /**
     * Authenticate a user
     */
    async loginUser(email, password) {
        const user = await userServiceSql.getUserByEmail(email);
        if (!user) {
            throw new Error('Invalid email or password');
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            throw new Error('Invalid email or password');
        }

        // Don't return the password
        const { password: _, ...userWithoutPassword } = user;
        return userWithoutPassword;
    }

    /**
     * Get user by ID
     */
    async getUserDetails(id) {
        const user = await userServiceSql.getUserById(id);
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    }

    /**
     * Get all users
     */
    async listAllUsers() {
        return await userServiceSql.getAllUsers();
    }

    /**
     * Update user information
     */
    async updateProfile(id, updateData) {
        // If password is being updated, hash it
        if (updateData.password) {
            updateData.password = await bcrypt.hash(updateData.password, 10);
        }
        await userServiceSql.updateUser(id, updateData);
        return { id, ...updateData };
    }

    /**
     * Remove a user
     */
    async removeUser(id) {
        return await userServiceSql.deleteUser(id);
    }
}

module.exports = new UserService();
