// Require express and create an instance of it
var express = require('express');
var app = express();
var path = require('path')

var server_port = process.env.PORT || 8000;

// on the request to root (localhost:3000/)
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/benjamin', function (req, res) {
    res.json({
        firstname: "Benjamin",
        lastname: "Klerens",
        age: 24,
        fieldofstudy: "Software Engineering"
    })
});

app.get('/sarah', function (req, res) {
    res.json({
        firstname: "Sarah",
        lastname: "Pradel",
        age: "??",
        fieldofstudy: "Software Teknologi"
    })
});



// Change the 404 message modifing the middleware
app.use(function(req, res, next) {
    res.status(404).send("Ruten eksisterer desværre ikke :( \n Prøv /benjamin eller /sarah");
});

// start the server in the port 8000 !
app.listen(server_port, function () {
    console.log('Server åbnet på port 8000.');
});