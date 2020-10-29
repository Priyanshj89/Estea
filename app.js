const express = require('express');
const crud = require('./routes/crud');
const cors = require('cors');
const logMiddleWare = require('./logMiddleware');

const app = express(); //invoking express
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(logMiddleWare);
app.use(express.json()); //order matters, first parse then routing
app.use(crud);

app.listen(PORT, () => {
	console.log('Server has started on port ', PORT);
});
