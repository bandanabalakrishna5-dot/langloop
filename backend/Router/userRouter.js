const express = require('express');
const router = express.Router();
const userController = require('../Controller/user.controller');

// Define user routes
router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/', userController.getAll);
router.get('/:id', userController.getProfile);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

module.exports = router;
