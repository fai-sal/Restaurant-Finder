import React, { useState, useEffect } from 'react';
import Restaurants from './restaurants';
import Map from './map';
export default function () {
    const [restaurants, setRestaurants] = useState(null)
    const [location, setLocation] = useState({ latitude: 23.7815222, longitude: 90.4004866 })
    const [radius, setRadius] = useState(3000)
    useEffect(() => {
        if (restaurants === null) {
            findRestaurants()
        }
    })
    useEffect(() => {
        findRestaurants()
    }, [location])

    const findRestaurants = () => {
        const service = new window.google.maps.places.PlacesService(document.getElementById('map'))
        var request = {
            location: {
                lat: location.latitude,
                lng: location.longitude,
            },
            radius: radius,
            type: ['restaurant']
        }
        service.nearbySearch(request, (results, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                setRestaurants(results)
            }
        })

    }


    const getCurrentLocation = () => {
        if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                setLocation(position.coords)
            })
        }
    }


    return (
        <div className="home">
            <Map
                location={location}
                restaurants={restaurants}
                getCurrentLocation={getCurrentLocation}
                setLocation={setLocation}
                radius={radius}
            />
            <Restaurants
                restaurants={restaurants}
            />
        </div>
    )
}