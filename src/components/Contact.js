import React from 'react';

function Contact(props) {
    return (
        <div id="contact-scroll" className="contact">
            <div className="section">
                <h1 className="heading">Contact me</h1>
                <div className="contact-container">
                    <p>
                        If you want to exchange experiences, are looking for a passionate frontend developer, have a question or want to connect don’t hesitate to contact me. I am happy to get in touch!
                </p>
                    <p>I am looking forward to your message via <span><a className="contact-link" href="mailto:jmjannsen(at)gmail.com">
                        email
                            </a></span> or <span><a className="contact-link" href="https://www.linkedin.com/in/juliamj" target="_blank">
                            LinkedIn
                            </a></span>.</p>

                    <p className="mt-5">Julia Jannsen<br />
                    Hamburg, Germany</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;