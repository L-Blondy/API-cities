const fs = require('fs').promises;
const raw_cities = require('cities-with-1000');
const cities = require('./cities.json');
const data_str = require('./data.json');


const rawDataLocation = raw_cities.file;
const keys = raw_cities.fields;

function reduceRaw() {

	return fs
		.readFile(rawDataLocation, 'utf8')
		.then(res => {
			const data = res
				.split('\n')
				.map(line => {
					let cityData = {};
					line.split('\t').forEach((val, i) => cityData[ keys[ i ] ] = val);
					return cityData;
				});

			fs.writeFile('src/data/cities.json', JSON.stringify(data));
		});
};

function get_data() {
	const res = cities
		.map(({ name, country, population, id, lat, lon, tz }) => (`${ name && name.toLowerCase() }_${ country }_${ population }_${ lat }_${ lon }_${ tz }`))
		.sort();
	fs.writeFile('src/data/data.json', JSON.stringify(res));
};

function get_firstLetter_index() {

	const res = {};

	let currentLetter = data_str[ 0 ][ 0 ];
	res[ currentLetter ] = 0;

	for (let i = 1; i < data_str.length; i++) {
		if (data_str[ i ][ 0 ] !== currentLetter) {
			currentLetter = data_str[ i ][ 0 ];
			res[ currentLetter ] = i;
		}
	}
	fs.writeFile('src/data/firstLetter_index.json', JSON.stringify(res));
}

get_data();