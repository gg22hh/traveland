import React from 'react'
import './Info.css'
import { InfoItem } from './InfoItem/InfoItem';
import { locations } from './PopularLocations.js';

export const Info = () => {

	const posts = locations.map((item) => {
		return (
			<InfoItem
				key={item.id}
				image={item.image}
				title={item.title}
				text={item.text}
			/>
		)
	})

	return (
        <div className="info">
            <div className="container">
                <h2 className="info__title title">Popular Location</h2>
                <div className="info__text">
                    For every one of us, travel came first. We’ve spent years
                    living as nomads, pioneers, and voyagers— from island
                    hopping in the
                </div>
                <div className="info__items">
                    {posts}
                </div>
            </div>
        </div>
    );
}
