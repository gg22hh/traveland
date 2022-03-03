import React from "react";
import { BlogItem } from './BlogComponents/BlogItem';
import { blogLocations } from './blogLocations';
import img from './blogImages/blog-canada.jpg'
import './Blog.css'

export const Blog = () => {

	const locations = blogLocations.map(item => {
		return (
			<BlogItem
				key={item.id}
				image={item.image}
				title={item.title}
				text={item.text}
				author={item.author}
			/>
		)
	})

    return (
        <div className="blog">
            <div className="container">
                <h1 className="blog__title title">From Blog & News</h1>
                <div className="blog__text">
                    Welcome to Community Conversations, a new interview series
                    featuring Intrepid travellers, creatives and activists in
                    our community.
                </div>
                <div className="blog__container">
                    <div className="blog__card">
                        <div className="blog__card-image">
                            <img src={img} alt="" />
                        </div>
                        <h3 className="blog__card-title">
                            Banff National Park
                        </h3>
                        <div className="blog__card-text">
                            Banff National Park lies in the heart of the
                            majestic Rocky Mountains in the province of Alberta,
                            and showcases some of Canada's most beautiful
                            scenery. Turquoise-colored lakes, snow-capped peaks,
                            and glaciers are all easily accessible
                        </div>
                        <a
							target="_blank"
                            href="https://github.com/gg22hh"
                            className="blog__card-author"
                        >
                            @thomasalva_adison
                        </a>
                    </div>
                    <div className="blog__box">{locations}</div>
                </div>
            </div>
        </div>
    );
};
