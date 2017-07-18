var path = require('path');

var index = function (req, res) {
	res.render('index', { categoryName: 1});
};

module.exports.index = index;