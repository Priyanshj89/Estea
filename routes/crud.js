const express = require('express');
const data = require('../data');
const router = express.Router();

router.get('/', (req, res) => {
	//Sends students entire data
	try {
		res.status(200).send(data);
	} catch (err) {
		res.status(400).send('Error found, please try again');
	}
});

/*router.get('/friend/:id', (req, res) => {
	//find friend by id
	data.friends
		.find(req.params.id)
		.then(data => {
			res.status(200).json({ id: req.params.id, name: data.name });
		})
		.catch(err => {
			console.log(`Error found ${err}`);
			res.status(400).send(`Could not find the particular id ${err}`);
		});
});
*/

router.post('/addfriend', (req, res) => {
	//adds a students friend
	try {
		data.friends.push({
			id: req.body.id,
			name: req.body.name
		});
		res.status(200).send(data.friends);
	} catch (err) {
		console.log(`Error found ${err}`);
		res.status(400).send(`Error found ${err}`);
	}
});

router.put('/favfruit', (req, res) => {
	//updates students favorite fruit
	try {
		data.favoriteFruit = req.body.fruit;
		res.status(200).json({ favouritefruit: data.favoriteFruit });
	} catch (err) {
		console.log(`Error found ${err}`);
		res.status(400).send(`Error found ${err}`);
	}
});

router.delete('/deletefriend', (req, res) => {
	//deletes students last one friend
	try {
		data.friends.pop();
		res.status(200).send(data.friends);
	} catch (err) {
		console.log(`Error found ${err}`);
		res.status(400).send(`Error found ${err}`);
	}
});

module.exports = router;
