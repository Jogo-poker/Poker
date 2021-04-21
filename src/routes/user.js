const userController = require('../controllers/user');
const flash = require('connect-flash');
const session = require('express-session');


module.exports = (app) => {
		app.use(session({
	        secret: process.env.secret,
	        resave: true,
	        saveUninitialized: true
   		 }));
		app.use(flash());


	app.route('/register_complete')
		.post(userController.newUser);

	// app.route('/login')
	// 	.post(userController.loginUser);

	app.route('/v1/users')
		.get(userController.allUsers)
}