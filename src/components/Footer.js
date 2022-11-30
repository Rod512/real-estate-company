import React,{Fragment} from 'react';
import '../css/Footer.css'

const Footer = () => {
    return (
        <Fragment>
            <section className="footer">
                <div className="footer-container">
                    <div className="footer-row">
                        {/*Column 1 */}
                        <div className="footer-column">
                            <div className="column-content">
                                <h2>Dowtown</h2>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, temporibus!</p>
                                <ul>
                                    <li><a href="/"><i className='fa-brands fa-facebook-f'></i></a></li>
                                    <li><a href="/"><i className='fa-brands fa-twitter'></i></a></li>
                                    <li><a href="/"><i className='fa-brands fa-instagram '></i></a></li>
                                </ul>
                            </div>
                        </div>

                        {/*Column 2 */}
                        <div className="footer-column">
                            <div className="column-content">
                                <h2>Community</h2>
                                <ul>
                                    <li>
                                        <a href="/">
                                            <span><i className='fa-solid fa-arrow-right-long'></i></span>
                                            Search Properties
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <span><i className='fa-solid fa-arrow-right-long'></i></span>
                                           For Agents
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <span><i className='fa-solid fa-arrow-right-long'></i></span>
                                            Reviews
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/*Column 3 */}
                        <div className="footer-column">
                            <div className="column-content">
                                <h2>About us</h2>
                                <ul>
                                    <li>
                                        <a href="/">
                                            <span><i className='fa-solid fa-arrow-right-long'></i></span>
                                            Our Story
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <span><i className='fa-solid fa-arrow-right-long'></i></span>
                                           Meet The Team
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <span><i className='fa-solid fa-arrow-right-long'></i></span>
                                            Reviews
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/*Column 4 */}
                        <div className="footer-column">
                            <div className="column-content">
                                <h2>Companny</h2>
                                <ul>
                                    <li>
                                        <a href="/">
                                            <span><i className='fa-solid fa-arrow-right-long'></i></span>
                                            About Us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <span><i className='fa-solid fa-arrow-right-long'></i></span>
                                            Press
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <span><i className='fa-solid fa-arrow-right-long'></i></span>
                                            Contact
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/">
                                            <span><i className='fa-solid fa-arrow-right-long'></i></span>
                                            Carrres
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/*Column 5 */}

                        <div className="footer-column">
                            <div className="column-content">
                                <h2>Have a Questions</h2>
                                <ul>
                                    <li>
                                        <span className='footer-icon'><i className='fa-solid fa-location-dot'></i></span>
                                        <span className='text'>Golf ST. Lake View, San Francisco, USA</span>
                                    </li>
                                    <li>
                                        <span className='footer-icon'><i className='fa-solid fa-phone'></i></span>
                                        <span className='text'>+01*******</span>
                                    </li>
                                    <li>
                                        <span className='footer-icon'><i className='fa-solid fa-envelope'></i></span>
                                        <span className='text'>info@realestate.com</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Footer;