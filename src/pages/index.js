import React, { useState, useEffect } from 'react';
import {
    Map,
    Restaurants
} from '../components';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/homepage.scss';

export default function () {
    const [restaurants, setRestaurants] = useState(null);
    const [restaurantName, changeRestaurantName] = useState('');
    const [userLocation, setLocation] = useState({ latitude: 23.7815222, longitude: 90.4004866 });
    const [radius, setRadius] = useState(3000);

    useEffect(() => {
        const findRestaurants = () => {
            const service = new window.google.maps.places.PlacesService(document.getElementById('map'));
            var request = {
                location: {
                    lat: userLocation.latitude,
                    lng: userLocation.longitude,
                },
                radius: radius,
                type: ['restaurant'],
                // rankby: 'distance',
                name: restaurantName
            };
            service.nearbySearch(request, (results, status, PlaceSearchPagination) => {
                console.log('results : ', results)
                // console.log('PlaceSearchPagination : ', PlaceSearchPagination)
                if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                    // console.log('results : ', results)
                    setRestaurants(results.map(({ id, icon, name, photos, price_level, rating, user_ratings_total, vicinity, geometry, opening_hours, reference }) => {
                        return (
                            {
                                id,
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
                                // ..(opening_hours && { isOpen: opening_hours.isOpen ? opening_hours.isOpen() : opening_hours.open_now })
                            }
                        );
                    }));
                } else if (status === 'ZERO_RESULTS') {
                    setRestaurants([]);
                }
            });

        }
        findRestaurants();
    }, [userLocation, radius, restaurantName]);



    const getCurrentLocation = () => {
        if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
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
                radius={radius}
            />
            <div className="search-restaurants">
                <input type="text" id="restaurant" className="restaurants-search-input" value={restaurantName} placeholder="Search Restaurants..." onChange={event => changeRestaurantName(event.target.value)} />
                <div className="radius-field">
                    <span className="label">Distance</span>
                    <input min={10} step={100} max={20000} id="radius" type="range" value={radius} onChange={e => setRadius(e.target.value)} />
                    <span className="distance">{(radius / 1000).toFixed(2)} km</span>
                </div>
            </div>
            <h3 className="header">  Available Restaurants  </h3>
            <Restaurants restaurants={restaurants} userLocation={userLocation} />
        </div>
    );
}