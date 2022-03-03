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
                        <a className="footer__info-title" href="https://github.com/gg22hh">
                            Trevland
                        </a>
                        <div className="footer__info-contact">
                            Contact us <a href="https://github.com/gg22hh">@shovasatkhira88.com</a>
                        </div>
                        <ul className="footer__info-links">
                            <li className="footer__info-link">
                                <a href="https://github.com/gg22hh">
                                    <img src={facebook} alt="social" />
                                </a>
                            </li>
                            <li className="footer__info-link">
                                <a href="https://github.com/gg22hh">
                                    <img src={instagram} alt="social" />
                                </a>
                            </li>
                            <li className="footer__info-link">
                                <a href="https://github.com/gg22hh">
                                    <img src={twitter} alt="social" />
                                </a>
                            </li>
                            <li className="footer__info-link">
                                <a href="https://github.com/gg22hh">
                                    <img src={google} alt="social" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <ul className="footer__links">
                        <li className="footer__link">
                            <a href="https://github.com/gg22hh">Services</a>
                        </li>
                        <li className="footer__link">
                            <a href="https://github.com/gg22hh">About</a>
                        </li>
                        <li className="footer__link">
                            <a href="https://github.com/gg22hh">Our story</a>
                        </li>
                        <li className="footer__link">
                            <a href="https://github.com/gg22hh">Benefits</a>
                        </li>
                        <li className="footer__link">
                            <a href="https://github.com/gg22hh">Branding</a>
                        </li>
                    </ul>

                    <ul className="footer__privecy">
                        <li className="footer__link">
                            <a href="https://github.com/gg22hh">Legal</a>
                        </li>
                        <li className="footer__link">
                            <a href="https://github.com/gg22hh">Terms & Conditions</a>
                        </li>
                        <li className="footer__link">
                            <a href="https://github.com/gg22hh">Privecy Policy</a>
                        </li>
                        <li className="footer__link">
                            <a href="https://github.com/gg22hh">Terms of use</a>
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
