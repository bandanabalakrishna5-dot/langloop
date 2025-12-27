const express = require('express');
const router = express.Router();
const userRouter = require('./userRouter');


// Register sub-routers
router.use('/users', userRouter);

module.exports = router;