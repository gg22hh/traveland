import React from 'react'
import'./Head.css'
import { Header } from './HeadComponents/Header/Header';
import { Banner } from './HeadComponents/Banner/Banner';

export const Head = () => {
	return (
        <div className="head">
            <div className="container">
				<Header />
				{/* <Banner /> */}
            </div>
        </div>
    );
}
