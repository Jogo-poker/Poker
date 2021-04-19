const mongoose = require('mongoose');
const uri = 'mongodb+srv://admin:12345678@cluster0.joqie.mongodb.net/teste';
    

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

