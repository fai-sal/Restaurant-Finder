import React from 'react';

import {
    Restaurant,
} from '../components'
import '../styles/restaurants.scss';

export default function Restaurants({ restaurants }) {

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
    );

}


