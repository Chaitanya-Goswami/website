import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'; // Import the Link component

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-5">
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-between">
          <div className="mb-4">
            <h4>CricSolutions</h4>
            <p>Bangalore, Karnataka, India</p>
            <p>Email: info@cricsolution.com</p>
            <p>Phone: +91 83685-98171</p>
          </div>
          <div className="mb-4">
            <h4>Follow Us</h4>
            <div className="social-links">
              <Link to="#" className="social-icon facebook"><FontAwesomeIcon icon={faFacebookF} /></Link>
              <Link to="https://www.threads.net/@cricsolution" className="social-icon twitter"><FontAwesomeIcon icon={faTwitter} /></Link>
              <Link to="https://www.instagram.com/cricsolution/" className="social-icon instagram"><FontAwesomeIcon icon={faInstagram} /></Link>
              <Link to="https://www.linkedin.com/company/cricsolution/" className="social-icon linkedin"><FontAwesomeIcon icon={faLinkedinIn} /></Link>
            </div>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white">Home</Link></li>
              <li><Link to="/landing" className="text-white">About</Link></li>
              <li><Link to="/landing" className="text-white">Services</Link></li>
              <li><Link to="/landing" className="text-white">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col text-center">
            <p className="copyright">© {new Date().getFullYear()} CricSolutions. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;