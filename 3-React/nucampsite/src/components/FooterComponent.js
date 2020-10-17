import React from 'react';
import { Link } from 'react-router-dom';
import { Stagger, Fade, FadeTransform } from 'react-animation-components'


function Footer(props) {
  return(
    <footer className="site-footer">
      <FadeTransform in transformProps={{ exitTransform: 'translateY(200%)' }}>
        <div className="container">
            <div className="row">             
                <div className="col-4 col-sm-2 offset-1">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                      <Stagger delay={300} in>
                        <Fade><li><Link to='/home'>Home</Link></li></Fade>
                        <Fade><li><Link to='/directory'>Directory</Link></li></Fade>
                        <Fade><li><Link to='/aboutus'>About</Link></li></Fade>
                        <Fade><li><Link to='/contactus'>Contact</Link></li></Fade>
                      </Stagger>
                    </ul>
                </div>
                <div className="col-6 col-sm-3 text-center">
                    <h5>Social</h5>
                    <FadeTransform in transformProps={{ exitTransform: 'translateX(200%)' }}>
                      <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                      <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                      <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                      <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a> 
                    </FadeTransform>
                </div>
                <div className="col-sm-4 text-center">
                    <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone" /> 1-206-555-1234</a><br />
                    <a role="button" className="btn btn-link" href="mailto:notreal@notreal.co"><i className="fa fa-envelope-o" /> campsites@nucamp.co</a>
                </div>
            </div>
        </div>
      </FadeTransform>
    </footer>
  );
}

export default Footer;