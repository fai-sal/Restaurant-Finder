import React, { useEffect, useRef, Fragment } from 'react';
import '../styles/map.scss';
import currentLocation from '../assets/currentLocation.svg';
import restaurantIcon from '../assets/restaurantMarker.svg';
const { google } = window;
export default function Map({ location, getCurrentLocation, setLocation, restaurants }) {
    const mapRef = useRef(null);
    const searchBox = useRef(null);
    useEffect(() => {
        initGoogleMap();
    });

    const initGoogleMap = () => {
        let myLatlng = new google.maps.LatLng(location.latitude, location.longitude)
        let map = new google.maps.Map(mapRef.current, {
            zoom: 16,
            center: new google.maps.LatLng(location.latitude, location.longitude)
        });
        let locationMarker = new google.maps.Marker({
            position: myLatlng,
            title: "Current Location",
            map: map
            // draggable: true,
        });
        // marker.addListener('dragend', () => {
        //     console.log(marker.getPosition().lat())
        //     console.log(marker.getPosition().lng())
        // })
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
        initSearchBox();
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
            <div className="location-searchbox">
                <input className="searchbox" ref={searchBox} type="text" placeholder="Search location" />
                <div
                    className="current-location"
                    onClick={() => getCurrentLocation()}>
                    <span>  Use current location</span>
                    <img src={currentLocation} className="current-location-icon" />
                </div>
            </div>
            <div className="map-container" ref={mapRef} />
        </Fragment>

    );
}
