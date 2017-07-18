const bookshelf = require('./../config/db').bookshelf;


let Article = bookshelf.Model.extend({
	tableName: 'phpkb_articles'
});

let Category = bookshelf.Model.extend({
   tableName: 'phpkb_categories'
});

module.exports = {
    Article: Article,
    Category: Category
};
