const express = require('express');
const queryDB = require('./db');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.listen(process.env.PORT || 3000, () => console.log('Server started'));

app.get('/', (req, res) => {
    queryDB('SELECT * FROM "User"', [], (err, result) => {
        res.send(result.rows);
    });
});

/*
    +
    *
    /


*/

function add(a, b, cb) {
    setTimeout(() => {
        if (typeof a !== 'number' || typeof b !== 'number') return cb('Type error');
        cb(undefined, a + b);
    }, 2000);
}
