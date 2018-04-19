const express = require('express');
const path = require('path');

const app = express();

app.use('/', express.static(__dirname + '/dist'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/dist/index.html');
});

app.listen(3001, function() {
    console.log('Listening on port 3001...');
});