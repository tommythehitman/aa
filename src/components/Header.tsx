import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="header">
      <div className="container">
        <div className="header-container">
          <Link to="/" className="logo">
            Titan Auto Parts
          </Link>
          
          <nav className="nav">
            <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
              <li>
                <Link 
                  to="/" 
                  className={`nav-link ${isActive('/') ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/catalog" 
                  className={`nav-link ${isActive('/catalog') ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Parts Catalog
                </Link>
              </li>
              <li>
                <Link 
                  to="/brands" 
                  className={`nav-link ${isActive('/brands') ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Brands
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  className={`nav-link ${isActive('/blog') ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
              </li>
            </ul>
            
            <Link to="/contact" className="contact-btn">
              Contact Us
            </Link>
            
            <button 
              className="mobile-menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              ☰
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;