import React, { useState } from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import footer_logo from '../Assets/logo_big.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pintester_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';

const Footer = () => {
  const [activeIcon, setActiveIcon] = useState(null);

  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);
  };

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt=""/>
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <Link to={`/about`}><li>About Us</li></Link>
        <Link to={'/contact'}><li>Contact Us</li></Link>
        <Link to={'/shipping'}><li>Shipping</li></Link>
        <Link to={'/payments'}><li>Payments</li></Link>
        <Link to={'/terms'}><li>Terms of use</li></Link>
      </ul>
      <div className="footer-social-icon">
        <div
          className={`footer-icons-container ${activeIcon === 'instagram' ? 'active' : ''}`}
          onClick={() => {
            handleIconClick('instagram');
            openInNewTab('https://www.instagram.com/');
          }}
        >
          <img src={instagram_icon} alt="Instagram" />
        </div>
        <div
          className={`footer-icons-container ${activeIcon === 'pintester' ? 'active' : ''}`}
          onClick={() => {
            handleIconClick('pintester');
            openInNewTab('https://www.pinterest.com/');
          }}
        >
          <img src={pintester_icon} alt="Pinterest" />
        </div>
        <div
          className={`footer-icons-container ${activeIcon === 'whatsapp' ? 'active' : ''}`}
          onClick={() => {
            handleIconClick('whatsapp');
            openInNewTab('https://www.whatsapp.com/');
          }}
        >
          <img src={whatsapp_icon} alt="WhatsApp" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
