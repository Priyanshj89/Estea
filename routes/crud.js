const express = require('express');
const data = require('../data');
const router = express.Router();

router.get('/', (req, res) => {
	//arrow function syntax
	//Sends students entire data
	try {
		if (!data) {
			res.status(400).json({ error: 'Error' });
		} else {
			res.status(200).send(data);
		}
	} catch (err) {
		res.status(400).send('Error found, please try again');
	}
});

router.post('/addfriend', (req, res) => {
	//adds a students friend
	try {
		/*data.friends.push({
			id: req.body.id,
			name: req.body.name
		});*/
		if (!req.body.id || !req.body.name) {
			//checking vulnerability in data
			res.status(400).json({ error: 'Error , please provide correct fields' });
		} else {
			data.friends = [...data.friends, { id: req.body.id, name: req.body.name }];
			//using spread operator instead of push
			res.status(200).send(data.friends);
		}
	} catch (err) {
		console.log(`Error found ${err}`);
		res.status(400).send(`Error found ${err}`);
	}
});

router.put('/favfruit', (req, res) => {
	//updates students favorite fruit
	try {
		if (!data.favoriteFruit) {
			res.status(400).json({ error: 'Error , please provide correct fields' });
		} else {
			data.favoriteFruit = req.body.fruit;
			res.status(200).json({ favouritefruit: data.favoriteFruit });
		}
	} catch (err) {
		console.log(`Error found ${err}`);
		res.status(400).send(`Error found ${err}`);
	}
});

router.delete('/deletefriend', (req, res) => {
	//deletes students last one friend
	try {
		if (!data.friends) {
			res.status(400).json({ error: 'Error' });
		} else {
			data.friends.pop();
			res.status(200).send(data.friends);
		}
	} catch (err) {
		console.log(`Error found ${err}`);
		res.status(400).send(`Error found ${err}`);
	}
});

router.delete('/delfriend/:id', (req, res) => {
	//delete friend using url params
	try {
		if (!req.params.id) {
			res.status(400).json({ error: 'Error , please provide correct fields' });
		} else {
			data.friends = data.friends.filter(friend => friend.id != req.params.id);
			res.status(200).json(data.friends);
		}
	} catch (err) {
		console.log(`Error found ${err}`);
		res.status(400).send(`Could not find the particular id ${err}`);
	}
});

router.delete('/delfriend/', (req, res) => {
	//delete friend using query
	try {
		if (!req.query.id) {
			res.status(400).json({ error: 'Error , please provide correct fields' });
		} else {
			data.friends = data.friends.filter(friend => friend.id != req.query.id);
			res.status(200).json(data.friends);
		}
	} catch (err) {
		console.log(`Error found ${err}`);
		res.status(400).send(`Could not find the particular id ${err}`);
	}
});

module.exports = router;
