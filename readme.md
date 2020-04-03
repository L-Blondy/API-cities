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
	
}
``` 