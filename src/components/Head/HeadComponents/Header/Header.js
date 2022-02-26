import React from 'react'
import './Header.css'

export const Header = () => {
	return (
        <div className="header">
            <div className="header__logo">
                <a href="#">Trevland</a>
            </div>
            <ul className="header__list">
                <li className="header__list-item">
                    <a href="#">Home</a>
                </li>
                <li className="header__list-item">
                    <a href="#">Location</a>
                </li>
                <li className="header__list-item">
                    <a href="#">Blog</a>
                </li>
                <li className="header__list-item">
                    <a href="#">About</a>
                </li>
                <li className="header__list-item">
                    <a href="#">Contact</a>
                </li>
            </ul>
			<a className="header__button" href="#">Booking now</a>
        </div>
    );
}
