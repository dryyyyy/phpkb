const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use('/public', express.static(__dirname + '/public'));

/* Router */
require('./router')(app);

app.listen(3000, function () {
	console.log('Go to localhost:3000');
});

