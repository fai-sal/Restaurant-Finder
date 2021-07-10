import React, { useEffect, useRef, Fragment } from 'react';
import classnames from 'classnames';
import deepEqual from 'deep-equal';
import currentLocation from '../assets/currentLocation.svg';
import restaurantIcon from '../assets/restaurantMarker.svg';
const { google } = window;

function Map({ userLocation, restaurantLocation, getCurrentLocation, setLocation, restaurants, getDirection }) {

    const mapRef = useRef(null);
    const searchBox = useRef(null);
    let userLatlng = new google.maps.LatLng(userLocation.latitude, userLocation.longitude);
    const directionService = new window.google.maps.DirectionsRenderer();

    useEffect(() => {
        initGoogleMap();
    });

    const initGoogleMap = () => {

        let map = new google.maps.Map(mapRef.current, {
            zoom: 15,
            center: userLatlng
        });
        new google.maps.Marker({
            position: userLatlng,
            title: "User Location",
            map: map
        });

        if (restaurants) {
            let icon = {
                url: restaurantIcon,
                size: new google.maps.Size(100, 100),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(35, 45)
            };

            restaurants.forEach(({ name, location }) => {
                new google.maps.Marker({
                    position: new google.maps.LatLng(location.lat, location.lng),
                    title: name,
                    animation: google.maps.Animation.DROP,
                    icon,
                    map: map
                });
            });
        }
        if (getDirection) {
            const selectedAddress = new window.google.maps.LatLng(restaurantLocation.lat, restaurantLocation.lng);
            directionService.setMap(map)
            drawRoute();
            let bounds = new window.google.maps.LatLngBounds();
            bounds.extend(selectedAddress);
            bounds.extend(userLatlng);
            map.fitBounds(bounds);
        } else {
            initSearchBox();
        }

    }
    const drawRoute = () => {
        new window.google.maps.DirectionsService().route({
            origin: userLatlng,
            destination: new window.google.maps.LatLng(restaurantLocation.lat, restaurantLocation.lng),
            travelMode: 'DRIVING'
        }, (response, status) => {
            if (status === 'OK') {
                directionService.setDirections(response);
            } else {
                console.log("couldn't find route");
            }
        });
    }
    const initSearchBox = () => {
        const input = searchBox.current;
        const autocomplete = new google.maps.places.Autocomplete(input);
        autocomplete.setFields(['place_id', 'geometry', 'formatted_address']);
        autocomplete.addListener('place_changed', () => {
            var place = autocomplete.getPlace();
            if (!place.geometry) {
                return;
            }
            const location = {
                latitude: place.geometry.location.lat(),
                longitude: place.geometry.location.lng()
            };
            setLocation(location);
            input.value = place.formatted_address;
        });
    }

    return (
        <Fragment>
            {
                !getDirection &&
                <div className="location-searchbox">
                    <input className="searchbox" ref={searchBox} type="text" placeholder="Search location" />
                    <div
                        className="current-location"
                        onClick={() => getCurrentLocation()}>
                        <span>  Use current location</span>
                        <img src={currentLocation} className="current-location-icon" alt="get-location" />
                    </div>
                </div>
            }

            <div className={classnames('map-container', { 'direction-map': getDirection })} ref={mapRef} />
        </Fragment>

    );
}
function areEqual(prevProps, nextProps) {
    return deepEqual(prevProps.restaurants, nextProps.restaurants);
}


export default React.memo(Map, areEqual);