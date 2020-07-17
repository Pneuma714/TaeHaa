const express = require('express');
const path = require('path');

const app = express();

app.use('/', express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(process.argv[0] ? 8080 : process.env.PORT);