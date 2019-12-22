import React from 'react'
import Restaurants from './restaurants'
import Map from './map'
export default function () {
    return (
        <div className="home">
            <Map />
            <Restaurants />
        </div>
    )
}