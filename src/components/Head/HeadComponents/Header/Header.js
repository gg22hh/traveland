import React from "react";
import { useState } from "react";
import "./Header.css";

export const Header = () => {
    const [active, setActive] = useState(false);

    return (
        <div className="header">
            <div className="header__logo">
                <a href="#">Trevland</a>
            </div>
            <ul className={active ? "header__list active" : "header__list"}>
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
                <a className="header__button" href="#">
                    Booking now
                </a>
            </ul>
            <button
                onClick={() => setActive(!active)}
                className={active ? "header__burger active" : "header__burger"}
            >
                <span></span>
            </button>
        </div>
    );
};
