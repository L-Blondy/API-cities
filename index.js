
const express = require('express');
const cors = require('cors');
var helmet = require('helmet');
const Search = require('./src/Search.js');
// const http = require('http');
const PORT = process.env.PORT || 3000;

const app = express();

console.log('environment=', process.env.NODE_ENV);

app.use(cors());
app.use(helmet());

app.get('/', (req, res) => {
	const { keyword, maxResults, sortBy } = req.query;

	const newSearch = new Search(keyword, {
		sortBy,
		maxResults
	});

	res.send(newSearch.matches);
});


app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

// setInterval(() => {
// 	http.get(`http://${ process.env.PROJECT_DOMAIN }.glitch.me/`);
// }, 280000);