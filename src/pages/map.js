import React, { useState, useEffect, useRef } from 'react'
import '../styles/map.scss'
export default function Map({ center }) {
    const [currentLocation, setCurrentLocation] = useState({ latitude: 23.7813293, longitude: 90.40274978 })
    const mapRef = useRef(null)
    useEffect(() => {
        initGoogleMap()
    })

    const initGoogleMap = () => {
        let myLatlng = new window.google.maps.LatLng(23.7813293, 90.40274978)
        let map = new window.google.maps.Map(mapRef.current, {
            zoom: 16,
            center: new window.google.maps.LatLng(currentLocation.latitude, currentLocation.longitude)
        });
        let marker = new window.google.maps.Marker({
            position: myLatlng,
            title: "Current Location"
        })
        marker.setMap(map)

    }
    const getCurrentLocation = () => {
        if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                console.log(position.coords)
                setCurrentLocation(position.coords)
            })
        }
    }

    return (
        <div>
            <div className="map-container" ref={mapRef} >
            </div>


            <div onClick={() => getCurrentLocation()}>current location</div>
        </div>

    )


}
