const userService = require('../Service/UserService');

class UserController {
    /**
     * Handle user registration
     */
    async register(req, res) {
        try {
            const user = await userService.registerUser(req.body);
            res.status(201).json({
                message: 'User registered successfully',
                data: user
            });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Handle user login
     */
    async login(req, res) {
        try {
            const { email, password } = req.body;
            const user = await userService.loginUser(email, password);
            res.status(200).json({
                message: 'Login successful',
                data: user
            });
        } catch (error) {
            res.status(401).json({ error: error.message });
        }
    }

    /**
     * Get user profile by ID
     */
    async getProfile(req, res) {
        try {
            const user = await userService.getUserDetails(req.params.id);
            res.status(200).json(user);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    /**
     * Get all users
     */
    async getAll(req, res) {
        try {
            const users = await userService.listAllUsers();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Update user profile
     */
    async update(req, res) {
        try {
            const updatedUser = await userService.updateProfile(req.params.id, req.body);
            res.status(200).json({
                message: 'User updated successfully',
                data: updatedUser
            });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Delete user
     */
    async delete(req, res) {
        try {
            await userService.removeUser(req.params.id);
            res.status(200).json({ message: 'User deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new UserController();