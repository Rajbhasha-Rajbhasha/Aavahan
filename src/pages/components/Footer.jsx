import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const Footer = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleClick = (id) => {
    navigate(`/events/${id}`);
  };

  const ClickHandle = (id) => {
    navigate(`/${id}`);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Quick Links Section on the Left */}
        {/* <div className="footer-section quick-links-section">
          <h4 className="footer-title">त्वरित लिंक</h4>
          <ul className="quick-links">
            <li><a  onClick={() => ClickHandle('events')}>इवेंट्स</a></li>
            <li><a href="https://www.rajbhashanitrr.in">मर्चन्डाइज़</a></li>
            <li><a  onClick={() => ClickHandle('gallery')}>गैलरी</a></li>
            <li><a  onClick={() => ClickHandle('contact')}>संपर्क</a></li>
          </ul>
        </div> */}


        <div className="events-section footer-section">
          <h4 className="footer-eventtitle">त्वरित लिंक</h4>
          <div className='outer-layer inner-layer'>
            <div className="quick-list">
              <ul className="footer-event-column">
                <li onClick={() => ClickHandle('events')}><a href=''>इवेंट्स</a></li>
                <li><a href='https://rajbhashanitrr.in/'>मर्चेंडाइज़</a></li>
                <li onClick={() => ClickHandle('gallery')}><a href=''>गैलरी</a></li>
                <li onClick={() => ClickHandle('contact')}><a href=''>संपर्क</a></li>
              </ul>
              <ul className="footer-event-column">
                <li onClick={() => ClickHandle('results')}><a href=''>परिणाम</a></li>
                <li onClick={() => ClickHandle('team')}><a href=''>टीम</a></li>
                <li onClick={() => ClickHandle('Home')}><a href=''>मुख्य पृष्ठ</a></li>
                <li onClick={() => ClickHandle('Main')}><a href=''>मुख्य वेबसाइट</a></li>
              </ul>
            </div>
          </div>
        </div>




        {/* Club Logo and Info Section in the Center */}
        <div className="footer-section club-info">
          <div className="club-header">
            <img src="https://i.postimg.cc/ht6zRmwv/rajbhashalogo.jpg" alt="Club Logo" className="club-logo" style={{borderRadius: '50%'}} />
            <h2 className="club-name">राजभाषा समिति</h2>
          </div>
          <p className="club-quote">"किताबें वह जादू की चाबी हैं, जो दुनिया और दिल के हर दरवाज़े खोल देती हैं।"</p>
          <p className="quote-author">- मुंशी प्रेमचंद</p>
        </div>

        {/* Contact Section on the Right */}
        <div className="events-section footer-section">
          <h4 className="footer-eventtitle">इवेंट्स</h4>
          <div className='outer-layer'>
            <div className="footer-event-list">
            <ul className="footer-event-column">
                <li onClick={() => handleClick('nukkad')}><a href=''>नुक्कड़</a></li>
                <li onClick={() => handleClick('andha')}><a href=''>खजाने की खोज</a></li>
                <li onClick={() => handleClick('treasure')}><a href=''>अंधा मोड़</a></li>
                <li onClick={() => handleClick('nukkad')}><a href=''>चित्र कथा</a></li>
              </ul>
              <ul className="footer-event-column">
                <li onClick={() => handleClick('nukkad')}><a href=''>चकमा गेंद</a></li>
                <li onClick={() => handleClick('nukkad')}><a href=''>गतिस्पर्धा</a></li>
                <li onClick={() => handleClick('nukkad')}><a href=''>कविता वाचन</a></li>
                <li onClick={() => handleClick('nukkad')}><a href=''>प्रश्नोत्तरी</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <div className="contact-info">
          <h4 className="footer-title">संपर्क करें</h4>
          <div className="contact-item">
            <FaEnvelope className="icon" />
            <a href="">राजभाषा समिति</a>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="icon" />
            <span>राष्ट्रीय प्रौद्योगिकी संस्थान रायपुर</span>
          </div>
        </div>
        <div className="made-with">
          <p>Made with <span role="img" aria-label="heart">❤️</span> by <a href="" onClick={() => ClickHandle('webteam')} className="web-team">Web Team</a></p>
        </div>
        <div className="social-connect">
          <p>राजभाषा समिति से जुड़े:</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/rajbhasha.nitrr/" target="_blank" rel="noopener noreferrer" data-tooltip="Follow us on Facebook">
              <FaFacebook className="social-icon" />
            </a>
            <a href="https://www.instagram.com/rajbhasha_nit_raipur/?igsh=YmQ5ODNtMG85czBt" target="_blank" rel="noopener noreferrer" data-tooltip="Follow us on Instagram">
              <FaInstagram className="social-icon" />
            </a>
            <a href="https://in.linkedin.com/company/राजभाषा-समिति-nit-raipur" target="_blank" rel="noopener noreferrer" data-tooltip="Follow us on Twitter">
              <FaTwitter className="social-icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        © 2024 राजभाषा समिति | NIT Raipur. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
