const Model = require('../models/Models');

/* Get all users */
let getAllArticles = function (req, res) {
	console.log(req);

	return new Model.Article()
		.where({'language_id': 1, 'article_show': 'yes', 'article_status': 'approved'})
        .fetchAll({withRelated: ['category']})
		.then(function (model) {
			model.models.forEach(function(item){
			});
			return model.models;
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
	let articleId = req.query.id;
	console.log(req.params.id);
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
            return model.attributes['article_title'];
        }).then(function(articleTitle){
        	return articleTitle;
		}).catch(function (error) {
        console.log(error);
    });
};

let getCategories = function (){
	return new Model.Category()
		.where({'language_id': 1, 'category_show': 'yes'})
		.fetchAll({withRelated: ['articles']})
		.then(function(model){
			//console.log(model.models[0]);
			return model.models;
		}).catch(function (error) {
			console.log(error);
    });
};

/* Exports all methods */
module.exports = {
	//saveUser: saveUser,
	getAllArticles: getAllArticles,
	deleteUser: deleteUser,
	getArticle: getArticle,
    getArticleTitle: getArticleTitle,
    getCategories: getCategories
};
