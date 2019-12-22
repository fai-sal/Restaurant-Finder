import React, { useState, useEffect, useRef } from 'react'
import '../styles/map.scss'
export default function Map({ center }) {
    const [mapCenter, setMapCenter] = useState({ lat: 23.7508961, lng: 90.3842619 })
    const mapRef = useRef(null)
    useEffect(() => {
        initGoogleMap()
    })

    const initGoogleMap = () => {
        new window.google.maps.Map(mapRef.current, {
            zoom: 16,
            center: new window.google.maps.LatLng(mapCenter.lat, mapCenter.lng)
        });
    }

    return (
        <div className="map-container" ref={mapRef} />
    )

}
