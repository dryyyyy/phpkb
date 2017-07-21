const path = require('path');
const article = require(__dirname + '\\articles');

let index = function (req, res) {
    Promise.all([article.getCategories(), article.getAllArticles()])
		.then(function(data){
			res.render('index', {categories: data[0], articles: data[1]})
		});
};

module.exports.index = index;