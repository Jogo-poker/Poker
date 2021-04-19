const mongoose = require('mongoose');
require('dotenv-safe').config();

const uri = 'mongodb+srv://admin:'+process.env.MONGOPASS+'@cluster0.joqie.mongodb.net/teste';
console.log(uri);

mongoose.Promise = global.Promise;

mongoose.connect(uri, { 
	useNewUrlParser: true, 
	useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
	console.log('Conectado Ao Banco de Dados!');
});

mongoose.connection.on('error', (err) => {
	console.log('Erro Na Conexão' + err);
});

mongoose.connection.on('disconnect', () => {
	console.log('Desconectado :(');
});

