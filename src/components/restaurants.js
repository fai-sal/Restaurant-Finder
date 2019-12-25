import React from 'react'
import Ratings from './ratings.js'
import '../styles/restaurants.scss';
export default function Restaurants({ restaurants }) {
    return (

        <div className="all-restaurants">
            <div id="map" />
            {
                restaurants == null ?
                    <div>
                        loading..
                </div>
                    :
                    restaurants.map(({ name, icon, rating, user_ratings_total, vicinity, photos, opening_hours, price_level, reference }) => {
                        return (
                            <div className="restaurant" key={reference}>
                                <div className="title">
                                    <span className="name"> {name}</span>
                                </div>
                                {

                                    rating &&
                                    <div className="ratings">
                                        <span className="number">{rating}</span>
                                        <div className="rating-wrap">
                                            <Ratings type="empty" />
                                            <Ratings type="fill" rating={rating} />
                                        </div>
                                        <span className="total-ratings">({user_ratings_total})</span>
                                        {
                                            price_level &&
                                            <span className="price">
                                                {new Array(price_level).fill(0).map(item => '$')}
                                            </span>
                                        }

                                    </div>
                                }
                                
                                {
                                    photos && <img src={photos} width={350} height={200} alt="img" />
                                }
                                <div className="address">{vicinity}</div>
                            </div>
                        )
                    })
            }
        </div>

    )

}