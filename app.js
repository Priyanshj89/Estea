const express = require('express');
const crud = require('./routes/crud');
const cors = require('cors');
const logMiddleWare = require('./logMiddleware');
const domain = require('domain');

const app = express(); //invoking express
const PORT = process.env.PORT || 5000;
var d = domain.create();

//one way og handling but not a good practice
/*process.on('uncaughtException', err => {
	// Handle the error safely
	console.log(err);
});
*/

app.use(cors());
app.use(logMiddleWare);
app.use(express.json()); //order matters, first parse then routing
app.use(crud);

d.on('error', () => {
	console.log(err);
});

d.run(() => {
	app.listen(PORT, () => {
		console.log('Server has started on port ', PORT);
	});
});
