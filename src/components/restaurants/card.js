import React, { useState } from 'react';
import classnames from 'classnames';
import Modal from '../modal';
import Ratings from '../ratings';

function Card({ userLocation, restaurant, selectedRestaurant, changeRestaurant }) {

    const [direction, showDirection] = useState(false);
    const { id, name, rating, user_ratings_total, vicinity, photos, location, price_level } = restaurant;

    /**
     * Show/hide direaction Map
     * @param {*} restaurantId
     */
    const displayDirection = (restaurantId) => {
        if ((restaurantId !== null && restaurantId !== selectedRestaurant) || typeof restaurantId === 'undefined') {
            showDirection(!direction);
            changeRestaurant(selectedRestaurant ? null : restaurantId);
        }
    }
    const classes = classnames('restaurant',
        'col-xl-4 col-lg-6 col-sm-12', {
        'modal-parent': direction && selectedRestaurant === id
    });

    return (
        <div className={classes} >
            {(direction && selectedRestaurant === id) && <Modal restaurant={restaurant} restaurantLocation={location} userLocation={userLocation} toogleModal={displayDirection} />}

            <div className="title">
                <span className="name">{name}</span>
                <span className="direction" onClick={() => displayDirection(id)}> Get Direction</span>
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
                            {new Array(price_level).fill(0).map(() => '$')}
                        </span>
                    }
                </div>
            }
            {photos && <img src={photos} width={350} height={200} alt="img" />}
            <div className="address">{vicinity}</div>
        </div>
    );
}

export default Card;