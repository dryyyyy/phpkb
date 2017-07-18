const path = require('path');
const article = require(__dirname + '\\articles');

let index = function (req, res) {
	res.render('index', { categoryName: article.getCategory(1)});
};

module.exports.index = index;