import React from 'react';
import FilledStar from '../assets/filledStar.svg';
import EmptyStar from '../assets/emptyStar.svg';
export default function Ratings({ type, rating }) {
    let ratingsWidth;
    if (rating) {
        ratingsWidth = Math.round((rating / 5) * 100);
    }
    return (
        <div className={`rating-${type}`} style={rating && { width: `${ratingsWidth}%` }}>
            {
                new Array(5).fill(0).map((_, index) => <img src={type === 'empty' ? EmptyStar : FilledStar} alt={type} key={index} />)
            }
        </div>
    );
}