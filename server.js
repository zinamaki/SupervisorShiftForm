var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
	console.log("Listening on " + port);
});