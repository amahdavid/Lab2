// create a new file called index.js and import the necessary modules
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');


// create a new express app and configure it to use the body-parser middleware
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(express.static('public'));

// if a number is found, make a GET request to the numbers API to retrieve info about that number
app.post('/chatbot', (req, res) => {
    const message = req.body.message;
    const number = message.match(/\d+/);
    if(number) {
       fetch(`http://numbersapi.com/${number}?type=trivia`).then(response => response.text()).then(data => {
			res.json({
				text: data
			});
		}).catch(error => {
			res.json({
				text: "Sorry, I couldn't find any information about that number."
			});
		});
    } else {
		res.json({
			text: "I'm sorry, I didn't understand your question. Please provide a number for me to give you information about."
		});
	}
})

// start the server by calling app.listen and specify a port for the server to listen on
const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
})

