//organizar, criar um diretorio proprio para colocar os render. (n sei bem onde criar pos isso não criei).

const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const session = require('express-session');
const bodyParser = require('body-parser');

	app.use(session({secret:'asgdkajsdhkajfhskajdhakshn'}));
	app.use(bodyParser.urlencoded({extended:true}));
	app.use(express.static(__dirname + '/public'));
	app.use(express.static(__dirname + '/views'));

	app.engine('hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
	app.set('view engine', 'hbs');

app.post('/Login', function(req, res){
	var email = "teste@teste"; //simulando banco de dados
	var senha = "123"; // simulando banco de dados
	if(req.body.Email == email && req.body.Pass == senha ){
		res.redirect('/');
	}else{
		res.render('Login');
	}	
});

app.get('/', function(req, res){
	res.render('Home');
});
app.get('/App', function(req, res){
	res.render('Pagina');
});

app.get('/Jogar', function(req, res){
	res.render('Jogar');
});
app.get('/Loja', function(req, res){
	res.render('Loja');
});
app.get('/Conta', function(req, res){
	res.render('Conta');
});
app.get('/Login', function(req, res){
	res.render('Login');
});
app.get('/Cadastro', function(req, res){
	res.render('Cadastro');
});

app.get('/Account/:Nick', function(req, res){
	res.render('Home', {nickname: req.params.Nick});
});

app.get('/Game', function(req, res){
	
});

app.listen(3000, function () {
	console.log("Servidor Rodando Na Porta 3000");
});