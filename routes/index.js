const path = require('path');
const article = require(__dirname + '\\articles');

let index = function (req, res) {
    article.getCategories().then(function(categories) {
        res.render('index', { categories: categories});
    });
};

module.exports.index = index;