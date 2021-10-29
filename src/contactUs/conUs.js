import React from 'react';
import "./conUs.css";


const ContactUs = () => {
    return (
        <>
            <section id="hero4">
                <h1> CONTACT US</h1>

                <div className=" container">
                    <div className="row">
                        <div className="col-lg-6 formContent">
                            <div className=" contactForm">
                                <form>
                                    <div className="inputBox">
                                        <input type="text" name="" required="required" />
                                        <span>Your Email</span>
                                    </div>
                                    <br />
                                    <div className="inputBox">
                                        <input type="text" name="" required="required" />
                                        <span>Subject</span>
                                    </div>
                                    <br />
                                    <div className="inputBox">
                                        <textarea required="required"></textarea>
                                        <span>Message...</span>
                                    </div>
                                    <br />
                                    <div className="inputBoxx">
                                        <input type="submit" name="" value="Send" />

                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contactusInfo">
                                <h4>CONTACT US</h4>
                                <h2>Don't Hesitate To Contact Us For Any Informaton </h2>
                                <p>providing good quality customers experience and support is as important powering top grade
                                    products or service to your customers however it has been noted.
                                </p>
                                <button type="button" className="btn">CONTACT US</button>
                            </div>

                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default ContactUs

