import React from 'react'
import './InfoItem.css'

export const InfoItem = ({ image, title, text }) => {
	return (
        <div className="info__item">
            <div className="info__item-image">
                <img src={image} alt="" />
            </div>
            <h3 className="info__item-title">{title}</h3>
            <div className="info__item-text">
				{text}
            </div>
        </div>
    );
}
