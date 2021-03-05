const express = require('express');
const app = express();
const exphbs = require('express-handlebars');

	app.use(express.static(__dirname + '/public'));
	app.use(express.static(__dirname + '/views'));

	app.engine('hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
	app.set('view engine', 'hbs');


app.listen(3000, function () {
	console.log(__dirname)
})

app.get('/Jogo2', function(req, res){
	res.render('qualquer')
})

app.get('/RotaJogo', function(req, res){
	res.render('teste')
})