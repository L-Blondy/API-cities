# Cities API

Get cities `latitude`, `longitude` and `timezone` searching by partial or complete city name

#### API Endpoint URL: https://api-cities.herokuapp.com

## With Fetch API
``` javascript
fetch(`${ url }?keyword=${ keyword }`)
	.then(...)
``` 
## With AXIOS
``` javascript
axios.get(url, {
	params: {
		keyword: value,
		maxResults: 5,
		sortBy: 'population'
	}
}).then(...)
``` 

## Query options

Options | Defaults | Description
-----------|------------|-------------
**keyword** | **`REQUIRED`** | keyword used to search cities
maxResults | `'5'` | max number of results sent by the API - 
orderBy | `'population'` | order results by 'population' or 'alphabet'.


## Data structure:

An array containing the matching cities is returned.
For example a city:

``` javascript
{
	"name": "Rome",
	"country" : "IT",
	"population": "2318895"
	"lat": "41.89193"
	"lon": "12.51133"
	"tz": "Europe/Rome" //timezone
}
``` 