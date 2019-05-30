const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
    console.log('In users middleware');
    res.send('<ul><li>User 1</li><li>User 2</li></ul>');
});

app.use('/', (req, res, next) => {
    console.log('In default middleware');
    res.send('<h1>Default middleware!</h1>');
});

app.listen(3000);