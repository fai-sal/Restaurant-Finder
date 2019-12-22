import React, { useState, useEffect } from 'react'

import {
    Restaurant
} from '../components'

function Restaurants() {
    const [restaurants, setRestaurants] = useState(null)

    useEffect(() => {
        if (restaurants == null) {
            findRestaurants()
        }

    })

    const findRestaurants = () => {
        const service = new window.google.maps.places.PlacesService(document.getElementById('map'))
        var request = {
            location: {
                lat: 23.75090,
                lng: 90.38426,
            },
            radius: '3000',
            type: ['restaurant']
        }
        service.nearbySearch(request, (results, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                setRestaurants(results)
            }
        })

    }

    return (
        <div>
            <div id="map" />
            <div className="all-restaurants">
                {
                    restaurants == null ?
                        <div>
                            loading
                        </div>
                        :
                        restaurants.map(item => <Restaurant item={item} key={item.reference} />)
                }
            </div>
        </div>
    )

}
export default Restaurants

