const { config } = require('./config/config');
const express = require('express');
const app = express();

app.get('/', function(req, res){
	res.status(200).send({
		message: 'GET Home route funciona'
	});
});

app.listen(config.port, () => {
    console.log("servidor running");
});