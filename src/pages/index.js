import React, { useState, useEffect } from 'react';
/**
 * local dependencies
 */
import {
    Map,
    Restaurants
} from '../components';


function Home() {
    const [restaurants, setRestaurants] = useState([]);
    const [pagination, setPagination] = useState(null);
    const [searchParams, setSearchParams] = useState({ restaurant: '', radius: 3000 })
    const [userLocation, setLocation] = useState({ latitude: 23.7815222, longitude: 90.4004866 });

    useEffect(() => {
        const service = new window.google.maps.places.PlacesService(document.getElementById('map'));
        const request = {
            location: {
                lat: userLocation.latitude,
                lng: userLocation.longitude,
            },
            radius: searchParams.radius,
            type: ['restaurant'],
            name: searchParams.restaurant
        };
        service.nearbySearch(request, (results, status, PlaceSearchPagination) => {
            let availableRestaurants = []
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                availableRestaurants = results.map(({ place_id, icon, name, photos, price_level, rating, user_ratings_total, vicinity, geometry, opening_hours, reference }) => (
                    {
                        id: place_id,
                        icon,
                        name,
                        photos: photos ? photos[0].getUrl() : null,
                        price_level,
                        rating,
                        user_ratings_total,
                        vicinity,
                        reference,
                        location: {
                            lat: geometry.location.lat(),
                            lng: geometry.location.lng(),
                        },
                        isOpen: opening_hours ? opening_hours.isOpen ? opening_hours.isOpen() : opening_hours.open_now : undefined
                    }
                ));
            }
            setRestaurants(availableRestaurants)
            setPagination(PlaceSearchPagination.hasNextPage ? PlaceSearchPagination : null);
        });

    }, [userLocation, searchParams.radius, searchParams.restaurant]);

    /**
     * Update Search params
     * @param {*} event 
     */
    const updateSearch = (event) => {
        const { name, value } = event.target;
        setSearchParams((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    /**
     * Set location to local Location
     */
    const getCurrentLocation = () => {
        if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLocation(position.coords);
            });
        }
    }

    return (
        <div className="home">
            <Map
                userLocation={userLocation}
                restaurants={restaurants}
                getCurrentLocation={getCurrentLocation}
                setLocation={setLocation}
                radius={searchParams.radius}
            />
            <div className="search-restaurants">
                <input
                    type="text"
                    id="restaurant"
                    name="restaurant"
                    value={searchParams.restaurant}
                    placeholder="Search Restaurants..."
                    className="restaurants-search-input"
                    onChange={updateSearch}
                />
                <div className="radius-field">
                    <label htmlFor="radius" className="label">Distance</label>
                    <input
                        min={10}
                        step={100}
                        max={20000}
                        id="radius"
                        name="radius"
                        type="range"
                        value={searchParams.radius}
                        className="radius-change"
                        onChange={updateSearch}
                    />
                    <span className="distance">{(searchParams.radius / 1000).toFixed(2)} km</span>
                </div>
            </div>
            <div className="header" >
                {restaurants && <span className="restaurants">Available Restaurants</span>}
                {(pagination && pagination.hasNextPage) && < span className="next-button" onClick={() => pagination.nextPage()}>More Restaurants</span>}
            </div>
            {
                restaurants === null ?
                    <div> loading..  </div>
                    :
                    <Restaurants restaurants={restaurants} userLocation={userLocation} />
            }
        </div >
    );
}

export default Home;