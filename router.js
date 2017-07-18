let article = require('./routes/articles');
let index = require('./routes/index');

module.exports = function (app) {

	/* Index(main) route */
	app.get('/', index.index);

	/* User Routes */
//  app.post('/users', user.saveUser);
	app.get('/articles', article.getAllArticles);
//  app.delete('/user/:id', user.deleteUser);
	app.get('/article/:id', article.getArticle);
};

