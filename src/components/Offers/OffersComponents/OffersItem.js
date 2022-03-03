import React from 'react'
import './OffersItem.css'

export const OffersItem = ({ image, title, place, rating, days, price }) => {
	return (
        <div className="offers__item">
            <div className="offers__item-image">
                <img src={image} alt="offersItem" />
            </div>
            <h3 className="offers__item-title">{title}</h3>
            <div className="offers__item-place">
                {place}
                <span className="offers__item-rating">{rating}</span>
            </div>
            <div className="offers__item-time">{days} Day {days + 1} Nights</div>
            <div className="offers__item-price">
                <span>{price}</span>/person
            </div>
        </div>
    );
}
