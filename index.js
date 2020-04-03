
const express = require('express');
const cors = require('cors');
var helmet = require('helmet');
const Search = require('./src/Search.js');
const fs = require('fs').promises;

const app = express();

console.log('environement=', process.env.NODE_ENV);

app.use(cors());
app.use(helmet());

app.get('/', (req, res) => {
	const { keyword, maxResults, sortBy } = req.query;

	console.time('a');
	const newSearch = new Search(keyword, {
		sortBy,
		maxResults
	});
	console.timeEnd('a');

	res.send(newSearch.matches);
});

app.listen(3000, '127.0.0.1');