const bookshelf = require('./../config/db').bookshelf;


let Article = bookshelf.Model.extend({
    tableName: 'phpkb_articles',
    category: function(){
        return this.belongsTo(Category, 'phpkb_relations', 'category_id');
    }
});

let Category = bookshelf.Model.extend({
    tableName: 'phpkb_categories',
    articles: function () {
        return this.hasMany(Article, 'article_id', 'article_id', 'phpkb_relations');
    }
});

module.exports = {
    Article: Article,
    Category: Category
};
