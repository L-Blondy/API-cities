
const express = require('express');
const cors = require('cors');
var helmet = require('helmet');
const Search = require('./src/Search.js');
const http = require('http');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(helmet());
app.use(cors());

app.get('/', cors(), (req, res) => {
	const { keyword, maxResults, sortBy } = req.query;

	try {
		const newSearch = new Search(keyword, {
			sortBy,
			maxResults
		});

		res.send(newSearch.matches);
	} catch {
		res.send('Something went wrong, please check you request parameters');
	}
});


app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

setInterval(() => {
	http.get(`https://api-cities.herokuapp.com/?keyword=rome`);
}, 280000);