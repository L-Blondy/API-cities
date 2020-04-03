const data = require('./data/data.json');
const fl_indexes = require('./data/firstLetter_index.json');

const letters = Object.keys(fl_indexes);

class Search {

	constructor(keyword, opts) {
		this.keyword = keyword.toLowerCase();
		console.log(this.keyword);
		this.opts = opts;
		this.fl = this.keyword[ 0 ];
		this.search_start_index = this.get_search_start_index();
		this.search_stop_index = this.get_search_stop_index();
		this.matches;

		this.init();
	}

	init() {
		this.matches = this.get_matches();
		this.toJSON();
		this.sort();
		this.slice(this.opts.maxResults || 5);
	}

	get_search_start_index() {
		return fl_indexes[ this.fl ];
	};

	get_search_stop_index() {
		const nl = letters[ letters.indexOf(this.fl) + 1 ];
		return fl_indexes[ nl ];
	};

	get_matches() {

		const matches = [];

		for (let i = this.search_start_index; i < (this.search_stop_index || data.length); i++) {
			//boolean
			const startsWith = data[ i ].startsWith(this.keyword);

			if (matches.length && !startsWith)
				break;
			if (startsWith)
				matches.push(data[ i ]);
		};

		return matches;
	};

	toJSON() {
		this.matches = this.matches.map(match => {
			match = match.split('_');
			return {
				name: match[ 0 ],
				country: match[ 1 ],
				population: match[ 2 ],
				lat: match[ 3 ],
				lon: match[ 4 ],
				tz: match[ 5 ]
			};
		});
	}

	sort() {
		const { sortBy } = this.opts;

		if (sortBy === 'alphabet')
			return;

		else if (!sortBy || sortBy === 'population') {
			this.matches.sort((a, b) => b.population - a.population);
		}
	}

	slice(n) {
		this.matches = this.matches.slice(0, n);
	}
};

module.exports = Search;

