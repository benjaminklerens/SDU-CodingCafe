// Require express and create an instance of it
var express = require('express');
var app = express();

// on the request to root (localhost:3000/)
app.get('/', function (req, res) {
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
    res.send("Velkommen til Code Café's root");
});



// Change the 404 message modifing the middleware
app.use(function(req, res, next) {
    res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
});

// start the server in the port 8000 !
app.listen(8000, function () {
    console.log('Example app listening on port 8000.');
});