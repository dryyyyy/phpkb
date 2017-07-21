const bookshelf = require('./../config/db').bookshelf;


let Article = bookshelf.Model.extend({
	tableName: 'phpkb_articles',
    category: function(){
	    return this.belongsTo(Category);
    }
});

let Category = bookshelf.Model.extend({
    tableName: 'phpkb_categories',
    articles: function () {
        return this.hasMany(Article)
    }
});

module.exports = {
    Article: Article,
    Category: Category
};
