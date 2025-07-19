import React from 'react';
import '../styles/footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>About Titan Auto Parts</h4>
            <p>
              Premium automotive parts engineered for performance, reliability, and safety. 
              We've been serving automotive professionals and enthusiasts for over 20 years.
            </p>
            <p>
              Quality you can trust, service you can count on.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/about">About Us</a></li>
              <li><a href="/catalog">Parts Catalog</a></li>
              <li><a href="/brands">Our Brands</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Categories</h4>
            <ul className="footer-links">
              <li><a href="/catalog?category=engine">Engine Parts</a></li>
              <li><a href="/catalog?category=brakes">Brake Systems</a></li>
              <li><a href="/catalog?category=suspension">Suspension</a></li>
              <li><a href="/catalog?category=electrical">Electrical</a></li>
              <li><a href="/catalog?category=body">Body Parts</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Newsletter</h4>
            <p>Stay updated with the latest parts and automotive news.</p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Titan Auto Parts. All rights reserved.</p>
          <div className="footer-social">
            <a href="#" className="social-link" aria-label="Facebook">📘</a>
            <a href="#" className="social-link" aria-label="Twitter">🐦</a>
            <a href="#" className="social-link" aria-label="Instagram">📷</a>
            <a href="#" className="social-link" aria-label="LinkedIn">💼</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;