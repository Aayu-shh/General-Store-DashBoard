const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());

app.use('/', (req, res) => {
    res.send('<h1>Api Running</h1>')
})
app.listen(8080);