import React from "react";
import { useState } from "react";
import "./Header.css";

export const Header = () => {
    const [active, setActive] = useState(false);

    return (
        <div className="header">
            <div className="header__logo">
                <a href="https://github.com/gg22hh">Trevland</a>
            </div>
            <ul className={active ? "header__list active" : "header__list"}>
                <li className="header__list-item">
                    <a href="https://github.com/gg22hh">Home</a>
                </li>
                <li className="header__list-item">
                    <a href="https://github.com/gg22hh">Location</a>
                </li>
                <li className="header__list-item">
                    <a href="https://github.com/gg22hh">Blog</a>
                </li>
                <li className="header__list-item">
                    <a href="https://github.com/gg22hh">About</a>
                </li>
                <li className="header__list-item">
                    <a href="https://github.com/gg22hh">Contact</a>
                </li>
                <a className="header__button" href="https://github.com/gg22hh">
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
