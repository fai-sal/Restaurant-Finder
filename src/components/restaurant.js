import React, { Fragment } from 'react'

export default function Restaurant({ item }) {

    const {
        name,
        icon,
        rating,
        vicinity,
        photos,
        opening_hours
    } = item


    // console.log('item : ',item)

    if (opening_hours) {
        console.log('is open : ', opening_hours.isOpen())
    }
    return (
        <div className="restaurant">
            <div className="title">
                <img className="icon" src={icon} alt="icon" />
                <span className="name"> {name}</span>
            </div>
            <div>{rating}</div>
            {
                photos && <img src={photos} width={350} height={200} alt="image" />
            }
            <div className="address">{vicinity}</div>
        </div>
    )

}