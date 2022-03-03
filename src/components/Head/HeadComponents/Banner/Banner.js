import React from 'react'
import './Banner.css'

export const Banner = () => {
	return (
        <div className="banner">
            <h1 className="banner__title">
                Railtrips To Here, There And Everywhere!
            </h1>
            <div className="banner__text">
                We all wish to start our year the best way possible and also
                according to a common belief if you have a great start to your.
            </div>
            <a className="banner__button" href="https://github.com/gg22hh">
                Explore more
            </a>
        </div>
    );
}
