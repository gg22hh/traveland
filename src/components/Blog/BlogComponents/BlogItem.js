import React from 'react'
import './BlogItem.css'

export const BlogItem = ({ image, title, text, author }) => {
	return (
        <div className="blog__item">
            <div className="blog__item-image">
                <img src={image} alt="image" />
            </div>
            <div className="blog__item-content">
                <h3 className="blog__item-title">{title}</h3>
                <div className="blog__item-text">
                    {text}
                </div>
                <a href="#" className="blog__item-author">
                    {author}
                </a>
            </div>
        </div>
    );
}
