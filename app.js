const cons = require('consolidate');

const express = require('express'),
    app = express(),
    exphbs = require('express-handlebars');
    require('dotenv-safe').config();

    app.use(express.static(__dirname+'/public'))
    app.use(express.static(__dirname+'/views'))

    app.engine('hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}))
    app.set('view engine', 'hbs')


app.listen(process.env.PORT, () => {
    console.log(' ---------------------- \n Servidor Rodando Na Porta \n ' +  process.env.PORT + '\n ----------------------');
});

app.get('/', (req,res) => {
    res.render('Home', { page: 'Home' });
})