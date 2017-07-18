const Model = require('./../models/Articles');

/* Save a user */
let saveUser = function (req, res) {
	new Model.User({
		username: req.body.username,
		email: req.body.email,
		name: req.body.name,
		age: req.body.age,
		location: req.body.location
	}).save()
		.then(function (user) {
			res.json(user);
		}).catch(function (error) {
			console.log(error);
			res.send('An error occured');
		});
};

/* Get all users */
let getAllArticles = function (req, res) {
	new Model.Article().fetchAll()
		.then(function (articles) {
			res.json(articles);
		}).catch(function (error) {
			console.log(error);
			res.send('An error occured');
		});
};

/* Delete a user */
let deleteUser = function (req, res) {
    let userId = req.params.id;
	new Model.User().where('id', userId)
		.destroy()
		.catch(function (error) {
			console.log(error);
			res.send('An error occured');
		});
};

/* Get a user */
let getArticle = function (req, res) {
	let articleId = req.params.id;
	new Model.Article().where('article_id', articleId)
		.fetch({columns: 'article_title'})
		.then(function (article) {
			console.log('from getArticle: ' + getArticleTitle(3));
			res.send(article.attributes['article_title']);
		}).catch(function (error) {
			console.log(error);
			res.send('An error occured');
		});
};

let getArticleTitle = function (articleId) {
    //let articleId = req.params.id;

    new Model.Article().where('article_id', articleId)
        .fetch({columns: 'article_title'})
        .then(function (model) {
            console.log('from getArticleTitle: ' + model.attributes['article_title']);
            return model.attributes['article_title'];
        }).then(function(articleTitle){
        	return articleTitle;
		}).catch(function (error) {
        console.log(error);
    });
};

let getCategory = function (categoryId){
	new Model.Category().where('category_id', categoryId)
		.fetch({columns: 'category_name'})
		.then(function (model) {
			return model.attributes['category_name'];
        }).then(function (categoryName){
        	return categoryName;
		}).catch(function (error) {
			console.log(error);
    });
};

/* Exports all methods */
module.exports = {
	saveUser: saveUser,
	getAllArticles: getAllArticles,
	deleteUser: deleteUser,
	getArticle: getArticle,
    getArticleTitle: getArticleTitle,
    getCategory: getCategory
};
