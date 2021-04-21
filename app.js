const cons = require('consolidate'),
    express = require('express'),
    app = require('./config/express')();;
    exphbs = require('express-handlebars'),
    session = require('express-session'),
    flash = require('connect-flash');
    
    require('./config/database');
    require('dotenv-safe').config();

    app.use(express.static(__dirname+'/public'))
    app.use(express.static(__dirname+'/views'))

    app.engine('hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}))
    app.set('view engine', 'hbs')

    app.use(session({
        secret: process.env.secret,
        resave: true,
        saveUninitialized: true
        }));
    app.use(flash());



app.use((req, res, next) => {
	res.locals.success_msg =  req.flash('success_msg');
	res.locals.err_msg =  req.flash('err_msg');
	next();
})

app.get('/register', (req,res) => {
    res.render('Register');
});

app.get('/', (req,res) => {
    res.render('Home', { page: 'Home' });
})

app.listen(process.env.PORT, () => {
    console.log(' ---------------------- \n Servidor Rodando Na Porta \n ' +  process.env.PORT + '\n ----------------------');
});