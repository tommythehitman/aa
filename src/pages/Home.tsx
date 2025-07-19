import React from 'react';
import '../styles/hero.css';
import '../styles/features.css';
import '../styles/categories.css';
import '../styles/brands.css';
import '../styles/testimonials.css';

const Home: React.FC = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <img 
          src="https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
          alt="High-performance engine closeup" 
          className="hero-bg"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Premium Auto Parts That Perform</h1>
          <p className="hero-subtitle">Engineered for Performance, Reliability, and Safety</p>
          <a href="/catalog" className="btn btn-primary">Browse Catalog</a>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features-container">
          <div className="feature">
            <span className="feature-icon">🔧</span>
            <h3>Quality Assured</h3>
            <p>Every part undergoes rigorous testing to meet OEM standards and exceed expectations for performance and durability.</p>
          </div>
          <div className="feature">
            <span className="feature-icon">🚚</span>
            <h3>Fast Shipping</h3>
            <p>Get your parts quickly with our expedited shipping options. Most orders ship within 24 hours nationwide.</p>
          </div>
          <div className="feature">
            <span className="feature-icon">💬</span>
            <h3>Expert Support</h3>
            <p>Our knowledgeable team provides technical assistance and helps you find the right parts for your vehicle.</p>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="categories">
        <div className="container">
          <h2>Popular Categories</h2>
          <div className="categories-grid">
            <div className="category-item">
              <img 
                src="https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=300&h=240&fit=crop" 
                alt="Engine parts" 
                className="category-image"
              />
              <div className="category-content">
                <h3>Engine Components</h3>
                <p>High-performance engine parts including pistons, gaskets, filters, and complete rebuild kits for all makes and models.</p>
                <a href="/catalog?category=engine" className="category-link">Browse Engine Parts →</a>
              </div>
            </div>
            
            <div className="category-item">
              <img 
                src="https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg?auto=compress&cs=tinysrgb&w=300&h=240&fit=crop" 
                alt="Brake system" 
                className="category-image"
              />
              <div className="category-content">
                <h3>Brake Systems</h3>
                <p>Complete brake solutions including pads, rotors, calipers, and hydraulic components for optimal stopping power.</p>
                <a href="/catalog?category=brakes" className="category-link">Browse Brake Parts →</a>
              </div>
            </div>
            
            <div className="category-item">
              <img 
                src="https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=300&h=240&fit=crop" 
                alt="Suspension components" 
                className="category-image"
              />
              <div className="category-content">
                <h3>Suspension & Steering</h3>
                <p>Shocks, struts, springs, and steering components designed to provide superior handling and ride comfort.</p>
                <a href="/catalog?category=suspension" className="category-link">Browse Suspension →</a>
              </div>
            </div>
            
            <div className="category-item">
              <img 
                src="https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=300&h=240&fit=crop" 
                alt="Electrical components" 
                className="category-image"
              />
              <div className="category-content">
                <h3>Electrical Systems</h3>
                <p>Batteries, alternators, starters, and wiring harnesses to keep your vehicle's electrical system running smoothly.</p>
                <a href="/catalog?category=electrical" className="category-link">Browse Electrical →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Strip */}
      <section className="brands">
        <div className="container">
          <h3>Trusted by Leading Brands</h3>
          <div className="brands-scroll">
            <img src="https://via.placeholder.com/120x50/666666/FFFFFF?text=BOSCH" alt="Bosch" className="brand-logo" />
            <img src="https://via.placeholder.com/120x50/666666/FFFFFF?text=DENSO" alt="Denso" className="brand-logo" />
            <img src="https://via.placeholder.com/120x50/666666/FFFFFF?text=ACDelco" alt="ACDelco" className="brand-logo" />
            <img src="https://via.placeholder.com/120x50/666666/FFFFFF?text=Motorcraft" alt="Motorcraft" className="brand-logo" />
            <img src="https://via.placeholder.com/120x50/666666/FFFFFF?text=NGK" alt="NGK" className="brand-logo" />
            <img src="https://via.placeholder.com/120x50/666666/FFFFFF?text=Brembo" alt="Brembo" className="brand-logo" />
            <img src="https://via.placeholder.com/120x50/666666/FFFFFF?text=KYB" alt="KYB" className="brand-logo" />
            <img src="https://via.placeholder.com/120x50/666666/FFFFFF?text=Bilstein" alt="Bilstein" className="brand-logo" />
            <img src="https://via.placeholder.com/120x50/666666/FFFFFF?text=Monroe" alt="Monroe" className="brand-logo" />
            <img src="https://via.placeholder.com/120x50/666666/FFFFFF?text=Champion" alt="Champion" className="brand-logo" />
            {/* Duplicate for smooth scrolling */}
            <img src="https://via.placeholder.com/120x50/666666/FFFFFF?text=BOSCH" alt="Bosch" className="brand-logo" />
            <img src="https://via.placeholder.com/120x50/666666/FFFFFF?text=DENSO" alt="Denso" className="brand-logo" />
            <img src="https://via.placeholder.com/120x50/666666/FFFFFF?text=ACDelco" alt="ACDelco" className="brand-logo" />
            <img src="https://via.placeholder.com/120x50/666666/FFFFFF?text=Motorcraft" alt="Motorcraft" className="brand-logo" />
            <img src="https://via.placeholder.com/120x50/666666/FFFFFF?text=NGK" alt="NGK" className="brand-logo" />
            <img src="https://via.placeholder.com/120x50/666666/FFFFFF?text=Brembo" alt="Brembo" className="brand-logo" />
            <img src="https://via.placeholder.com/120x50/666666/FFFFFF?text=KYB" alt="KYB" className="brand-logo" />
            <img src="https://via.placeholder.com/120x50/666666/FFFFFF?text=Bilstein" alt="Bilstein" className="brand-logo" />
            <img src="https://via.placeholder.com/120x50/666666/FFFFFF?text=Monroe" alt="Monroe" className="brand-logo" />
            <img src="https://via.placeholder.com/120x50/666666/FFFFFF?text=Champion" alt="Champion" className="brand-logo" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2>What Our Customers Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial">
              <blockquote>
                <p>"Best quality I've seen in years! The engine rebuild kit exceeded all expectations and the installation was flawless."</p>
                <cite>— Rajiv S., Bangalore</cite>
              </blockquote>
            </div>
            
            <div className="testimonial">
              <blockquote>
                <p>"Fast shipping and excellent customer service. These brake pads have outstanding stopping power and longevity."</p>
                <cite>— Maria L., Mumbai</cite>
              </blockquote>
            </div>
            
            <div className="testimonial">
              <blockquote>
                <p>"Professional grade parts at competitive prices. Titan Auto Parts is now my go-to supplier for all automotive needs."</p>
                <cite>— David K., Delhi</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;