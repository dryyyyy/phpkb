const bookshelf = require('./../config/db').bookshelf;


let Article = bookshelf.Model.extend({
	tableName: 'phpkb_articles',
    jsonColumns: ''
});

module.exports = {
    Article: Article
};
