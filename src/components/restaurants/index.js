import React, { useState } from 'react';
import Card from './card';

/**
 * 
 * @returns Element
 */
function NoRestaurants() {
    return (
        <div className="no-restaurants d-flex align-center justify-center">
            <h2 className="message">No Restaurants Found</h2>
        </div>
    );
}



function Restaurants({ restaurants, userLocation }) {

    const [selectedRestaurant, changeRestaurant] = useState(null);

    return (
        <div className="container-fluid all-restaurants">
            <div id="map" />
            {
                restaurants.length === 0 ?
                    <NoRestaurants />
                    :
                    restaurants.map((restaurant) => (
                        <Card
                            key={restaurant.id}
                            restaurant={restaurant}
                            userLocation={userLocation}
                            selectedRestaurant={selectedRestaurant}
                            changeRestaurant={changeRestaurant}
                        />
                    ))
            }
        </div>
    );
}

export default Restaurants;