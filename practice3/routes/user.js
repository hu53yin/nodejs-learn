const path = require('path');
const express = require('express');
const rootDir = require('../util/path');

const router = express.Router();

router.get('/users', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'user.html'));
});

module.exports = router;