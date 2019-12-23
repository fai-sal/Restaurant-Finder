import React, { useEffect, useRef } from 'react';
import '../styles/map.scss';
export default function Map({ location, getCurrentLocation, setLocation, radius }) {
    const mapRef = useRef(null)
    const searchBox = useRef(null)
    useEffect(() => {
        initGoogleMap()
    })

    const initGoogleMap = () => {
        let myLatlng = new window.google.maps.LatLng(location.latitude, location.longitude)
        let map = new window.google.maps.Map(mapRef.current, {
            zoom: 16,
            center: new window.google.maps.LatLng(location.latitude, location.longitude)
        });
        let marker = new window.google.maps.Marker({
            position: myLatlng,
            title: "Current Location",
            // draggable: true,
        })
        // marker.addListener('dragend', () => {
        //     console.log(marker.getPosition().lat())
        //     console.log(marker.getPosition().lng())
        // })
        marker.setMap(map)
        initSearchBox()
    }

    const initSearchBox = () => {
        const input = searchBox.current;
        const autocomplete = new window.google.maps.places.Autocomplete(input);
        autocomplete.setFields(['place_id', 'geometry', 'formatted_address']);
        autocomplete.addListener('place_changed', () => {
            var place = autocomplete.getPlace()
            if (!place.geometry) {
                return;
            }
            const location = {
                latitude: place.geometry.location.lat(),
                longitude: place.geometry.location.lng()
            }
            setLocation(location)
            input.value = place.formatted_address
        })
    }

    return (
        <div>
            <input ref={searchBox} type="text" placeholder="Search location" />
            <div onClick={() => getCurrentLocation()}>current location</div>
            <div className="map-container" ref={mapRef} />
        </div>

    )


}
