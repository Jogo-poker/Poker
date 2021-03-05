const express = require('express');
const app = express();
const exphbs = require('express-handlebars');

	app.use(express.static(__dirname + '/public'));
	app.use(express.static(__dirname + '/views'));

	app.engine('hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
	app.set('view engine', 'hbs');

app.get('/', function(req, res){
	res.render('Home');
});

app.get('/Account/:Nick', function(req, res){
	res.render('Home', {nickname: req.params.Nick});
});

app.get('/Game', function(req, res){
	
});

app.listen(3000, function () {
	console.log("Servidor Rodando Na Porta 3000");
});