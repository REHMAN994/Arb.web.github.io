import React from 'react'
import "./footer.css";
import {FontAsomeIcon} from "@fortawesome/fontawesome-free";
import {fafacebook , fatwitter, fainstagram} from "@fortawesome/fontawesome-free";
const Footer = () => {
    return (
        <>
            <section id="hero5">
                <div className="mt-5 pt-5  footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-xs-12 about-company">
                                <h2>ARB Solution</h2>
                                <p className="pr-5 text-white-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante mollis quam tristique convallis </p>
                                <p>
                                    {/* <FontAsomeIcon icon={fafacebook}></FontAsomeIcon>
                                    <FontAsomeIcon icon={fatwitter}></FontAsomeIcon>
                                    <FontAsomeIcon icon={fainstagram}></FontAsomeIcon> */}
                                </p>
                            </div>
                    <div className="col-lg-3 col-xs-12 links">
                        <h4 className="mt-lg-0 mt-sm-3">Links</h4>
                        <ul className="m-0 p-0">
                            <li>- <a href="#">Lorem ipsum</a></li>
                            <li>- <a href="#">Nam mauris velit</a></li>
                            <li>- <a href="#">Etiam vitae mauris</a></li>
                            <li>- <a href="#">Fusce scelerisque</a></li>
                            <li>- <a href="#">Sed faucibus</a></li>
                            <li>- <a href="#">Mauris efficitur nulla</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-xs-12 location">
                        <h4 className="mt-lg-0 mt-sm-4">Location</h4>
                        <p>22, Lorem ipsum dolor, consectetur adipiscing</p>
                        {/* <p className="mb-0"><i className="fa fa-phone mr-3"></i>(541) 754-3010</p>
                        <p><i className="fa fa-envelope-square mr-3"></i>info@hsdf.com</p> */}
                    </div>
                </div>
                <br />
            </div>
            <div className="mt-5">
                <div className="col copyright">
                    <p className="text-center" >
                        <small className="text-white-50">© 2021. All Rights Reserved.</small>
                    </p>
                </div>
            </div>

        </div>
</section >  
        </>
    )
}

export default Footer
