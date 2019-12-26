
# Restaurant Finder


### Used Technologies
  - Reactjs
  - Google map API
  - Google places API

### Features
  - Search/set location of user
  - Displays available restaurants in `map` inside predefined radius
  - Search Restaurants by name
  - Set radius for search
  - Gives direction of selected restaurant in `Google map` 

### Run/Build instructions
  - `node` and `git` must have been installed  
  - Run `https://github.com/FaisalAhmedBD/Restaurant-Finder.git` to clone the repository 
  - Run `npm install` to install all the dependencies  
  - Run `npm start` to run the project locally
  - Run `npm run build` to build

#### project structure 

This project was created using `create-react-app` and `node-sass` has been installed as third-party library for compiling `.scss` files to css.

```
Restaurant-Finder
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── assets
    ├── components
    ├── pages
    ├── styles
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
```
### Trade-offs
  - Search by keywords (chinese, asian) couldn't be implemenetd as I was using `google places API` free version, this feature can be easily implemented using `Foursquare Places API`. 
  
  A simple demonstration is shown bellow - 

```js
//id of different types of restaurants for Foursquare Places API
const resTypes = {
    any: '4bf58dd8d48988d1c4941735',
    american: '4bf58dd8d48988d14e941735',
    asian: '4bf58dd8d48988d142941735',
    chinese: '4bf58dd8d48988d145941735',
    thai: '4bf58dd8d48988d149941735',
    buffet: '52e81612bcbc57f1066b79f4',
    coffee: '4bf58dd8d48988d1e0931735'
};
const userLocation={
  lat:23.7815222,
  lng:90.4004866
};
let radius=3000;
 const findRestaurants = () => {
        const key = "CLIENT_ID";
        const secret = "CLIENT_KEY";
        const vanuesUrl = `https://api.foursquare.com/v2/venues/explore?ll=${userLocation.lat},${userLocation.lng}&categoryId=${resTypes[restaurantCat]}&radius=${radius}&limit=20&client_id=${key}&client_secret=${secret}&v=20180726`;
        const vanueDetails = `https://api.foursquare.com/v2/venues/`;

        fetch(vanuesUrl)
            .then(response => response.json())
            .then(res => {
                const result = res.response.groups[0].items;
                const filteredData = result.map(item => {
                    const { id, name, location } = item.venue
                    const restaurant = {
                        id,
                        name,
                        location: {
                            lat: location.lat,
                            lng: location.lng,
                        }
                    }
                    fetch(`${vanueDetails}${id}?&client_id=${key}&client_secret=${secret}&v=20180726`)
                        .then(response => response.json())
                        .then(res => {
                            //rest of the operations
                        })
                        .catch(error => {
                            console.log(error);
                        });
                    return restaurant
                })
            })
            .catch(error => {
                console.log(error);
            });
    };
```