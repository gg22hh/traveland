import React from "react";
import "./Offers.css";
import { OffersItem } from "./OffersComponents/OffersItem";
import { offersLocations } from "./OffersLocations";
import Slider from "react-slick";

export const Offers = () => {
    const settings = {
        dots: true,
        infinity: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 1180,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 853,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: false,
                },
            },
            {
                breakpoint: 565,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
        ],
    };

    const items = offersLocations.map((item) => {
        return (
            <OffersItem
                key={item.id}
                image={item.image}
                title={item.title}
                place={item.place}
                rating={item.rating}
                days={item.days}
                price={item.price}
            />
        );
    });

    return (
        <div className="offers">
            <div className="container">
                <h2 className="offers__title title">Special Offers</h2>
                <div className="offers__text">
                    With the New Year comes a refreshing sense of wanderlust, a
                    longing in our souls to escape to warmer climates,
                </div>
            </div>
            <Slider {...settings}>{items}</Slider>
        </div>
    );
};
