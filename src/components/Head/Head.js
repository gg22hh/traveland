import React from 'react'
import'./Head.css'
import { Header } from './HeadComponents/Header/Header';

export const Head = () => {
	return (
        <div className="head">
            <div className="container">
				<Header />
            </div>
        </div>
    );
}
