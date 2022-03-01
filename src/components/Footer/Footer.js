import React from 'react'
import './Footer.css'
import google from './FooterImages/footer-google.svg'
import instagram from "./FooterImages/footer-instagram.svg";
import facebook from "./FooterImages/footer-facebook.svg";
import twitter from "./FooterImages/footer-twitter.svg";

export const Footer = () => {
	return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__info">
                        <a className="footer__info-title" href="#">
                            Trevland
                        </a>
                        <div className="footer__info-contact">
                            Contact us <a href="#">@shovasatkhira88.com</a>
                        </div>
                        <ul className="footer__info-links">
                            <li className="footer__info-link">
                                <a href="#">
                                    <img src={facebook} alt="social" />
                                </a>
                            </li>
                            <li className="footer__info-link">
                                <a href="#">
                                    <img src={instagram} alt="social" />
                                </a>
                            </li>
                            <li className="footer__info-link">
                                <a href="#">
                                    <img src={twitter} alt="social" />
                                </a>
                            </li>
                            <li className="footer__info-link">
                                <a href="#">
                                    <img src={google} alt="social" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <ul className="footer__links">
                        <li className="footer__link">
                            <a href="#">Services</a>
                        </li>
                        <li className="footer__link">
                            <a href="#">About</a>
                        </li>
                        <li className="footer__link">
                            <a href="#">Our story</a>
                        </li>
                        <li className="footer__link">
                            <a href="#">Benefits</a>
                        </li>
                        <li className="footer__link">
                            <a href="#">Branding</a>
                        </li>
                    </ul>

                    <ul className="footer__privecy">
                        <li className="footer__link">
                            <a href="#">Legal</a>
                        </li>
                        <li className="footer__link">
                            <a href="#">Terms & Conditions</a>
                        </li>
                        <li className="footer__link">
                            <a href="#">Privecy Policy</a>
                        </li>
                        <li className="footer__link">
                            <a href="#">Terms of use</a>
                        </li>
                    </ul>

                    <div className="footer__subscribe">
                        <div className="footer__subscribe-title">
                            SUBSCRIBE NOW
                        </div>
                        <form className="footer__subscribe-form" action="#">
                            <input
                                type="text"
                                className="footer__subscribe-input"
								placeholder="Email"
                            />
                            <input
                                type="submit"
                                className="footer__subscribe-button"
								value="Send"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
}
