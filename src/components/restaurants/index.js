import React, { useState } from 'react';
import Card from './card';
import deepEqual from 'deep-equal';
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

// for demonstration purpose React.memo isn't really very effective for these kinda components
function areEqual(prevProps, nextProps) {
    return deepEqual(prevProps.restaurants, nextProps.restaurants);
}


export default React.memo(Restaurants, areEqual);