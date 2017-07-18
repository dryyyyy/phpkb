const DBConfig = {
	client: 'mysql',
	connection: {
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'phpkb',
		charset: 'utf8'
	}
};

const knex = require('knex')(DBConfig);
const bookshelf = require('bookshelf')(knex);


module.exports.bookshelf = bookshelf;
