const express = require('express');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.listen(process.env.PORT || 3000, () => console.log('Server started'));

app.get('/', (req, res) => res.send('Still alive'));
