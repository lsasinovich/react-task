const express = require('express');
const path = require('path');

const app = express();

app.use('/public', express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(3001, function() {
    console.log('Listening on port 3001...');
});