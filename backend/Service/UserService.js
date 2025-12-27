const bcrypt = require('bcrypt');
const User = require('../Models/User');


class UserService {
    /**
     * Register a new user
     */
    async registerUser(userData) {
        const { firstName, lastName, email, password } = userData;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            throw new Error('User already exists with this email');
        }

        // Hash the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create new user in MongoDB
        const user = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword
        });

        await user.save();

        return {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email
        };
    }

    /**
     * Authenticate a user
     */
    async loginUser(email, password) {
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error('Invalid email or password');
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            throw new Error('Invalid email or password');
        }

        // Don't return the password
        return {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            createdAt: user.createdAt
        };
    }

    /**
     * Get user by ID
     */
    async getUserDetails(id) {
        const user = await User.findById(id).select('-password');
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    }

    /**
     * Get all users
     */
    async listAllUsers() {
        return await User.find().select('-password');
    }

    /**
     * Update user information
     */
    async updateProfile(id, updateData) {
        // If password is being updated, hash it
        if (updateData.password) {
            updateData.password = await bcrypt.hash(updateData.password, 10);
        }

        const user = await User.findByIdAndUpdate(id, updateData, { new: true, runValidators: true }).select('-password');

        if (!user) {
            throw new Error('User not found');
        }

        return user;
    }

    /**
     * Remove a user
     */
    async removeUser(id) {
        const result = await User.findByIdAndDelete(id);
        if (!result) {
            throw new Error('User not found');
        }
        return result;
    }
}

module.exports = new UserService();
