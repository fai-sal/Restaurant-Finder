import React, { useState } from 'react';
import Modal from './modal';
import Ratings from './ratings.js';
import '../styles/restaurants.scss';
export default function Restaurants({ restaurants, userLocation }) {

    const [showModal, toggleModal] = useState(false);
    const [activeRestaurant, changeRestaurant] = useState(null);

    const handleModal = (id) => {
        if ((id !== null && id !== activeRestaurant) || id === 'hide') {
            toggleModal(!showModal);
            changeRestaurant(activeRestaurant ? null : id);
        }
    }
    return (
        <div className="container-fluid all-restaurants">
            <div id="map" />
            {
                restaurants == null ?
                    <div>
                        loading..
                </div>
                    :
                    restaurants.map(restaurant => {
                        const { id, name, rating, user_ratings_total, vicinity, photos, location, opening_hours, price_level, reference } = restaurant
                        const displayDetails = (showModal && activeRestaurant == id)
                        return (
                            <div className={`restaurant col-xl-4 col-lg-6 col-sm-12 ${displayDetails ? 'modal-parent' : ''}`} key={reference} onClick={() => handleModal(id)}>
                                {displayDetails && <Modal restaurant={restaurant} restaurantLocation={location} userLocation={userLocation} toogleModal={handleModal} />}

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