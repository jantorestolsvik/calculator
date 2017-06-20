var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/hello', function (req, res) {
    res.send({hello: "world"});
});

app.use(express.static(__dirname + '/public'));

const port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log(`App listening on port ${port}!`)
});