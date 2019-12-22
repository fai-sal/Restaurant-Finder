import React, { Fragment } from 'react'

export default function Restaurant(props) {

    const {
        name,
        rating,
        vicinity
    } = props.item

    return (
        <div className="restaurant">
            {
                <Fragment>
                    <div>{name}</div>
                    <div>{rating}</div>
                    <div>{vicinity}</div>
                </Fragment>}
        </div>
    )

}