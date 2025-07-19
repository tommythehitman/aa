import React from 'react';
import '../styles/about.css';

const About: React.FC = () => {
  return (
    <main>
      {/* Banner Section */}
      <section className="about-banner" style={{
        backgroundImage: 'url(https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=1920&h=350&fit=crop)'
      }}>
        <div className="about-banner-overlay"></div>
        <h1>Who We Are</h1>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>About Titan Auto Parts</h2>
              <p>
                For over two decades, Titan Auto Parts has been at the forefront of automotive excellence, 
                providing premium quality parts and components to automotive professionals, mechanics, and 
                enthusiasts across the nation. Our commitment to quality and performance has made us a 
                trusted name in the automotive industry.
              </p>
              <p>
                <strong>Our Mission:</strong> To deliver superior automotive parts that enhance vehicle 
                performance, ensure safety, and provide lasting value. We believe that every vehicle 
                deserves the highest quality components, and we're dedicated to making that vision a reality.
              </p>
              <p>
                <strong>Our Values:</strong> Quality, reliability, innovation, and customer satisfaction 
                drive everything we do. We carefully select each product in our catalog, ensuring it meets 
                our rigorous standards for performance and durability. Our team of automotive experts works 
                tirelessly to stay ahead of industry trends and technological advances.
              </p>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                alt="Automotive warehouse with mechanics" 
                className="mission-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <h2>Our Quality Process</h2>
          <div className="process-timeline">
            <div className="process-step">
              <div className="process-number">1</div>
              <div className="process-content">
                <h4>Sourcing</h4>
                <p>We partner with leading manufacturers and OEM suppliers worldwide to source the highest quality automotive parts and components.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="process-number">2</div>
              <div className="process-content">
                <h4>Quality Check</h4>
                <p>Every part undergoes rigorous testing and inspection to ensure it meets our strict quality standards and specifications.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="process-number">3</div>
              <div className="process-content">
                <h4>Inventory</h4>
                <p>Parts are stored in our climate-controlled facilities with advanced inventory management systems to ensure optimal condition.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="process-number">4</div>
              <div className="process-content">
                <h4>Shipping</h4>
                <p>Fast, secure packaging and shipping ensure your parts arrive quickly and in perfect condition, ready for installation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2>Meet The Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <img 
                src="https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
                alt="Team member" 
                className="team-photo"
              />
              <div className="team-info">
                <h4>Arjun Patel</h4>
                <p>Founder & CEO</p>
              </div>
            </div>
            
            <div className="team-member">
              <img 
                src="https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
                alt="Team member" 
                className="team-photo"
              />
              <div className="team-info">
                <h4>Priya Sharma</h4>
                <p>Quality Assurance Director</p>
              </div>
            </div>
            
            <div className="team-member">
              <img 
                src="https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
                alt="Team member" 
                className="team-photo"
              />
              <div className="team-info">
                <h4>Vikram Singh</h4>
                <p>Technical Specialist</p>
              </div>
            </div>
            
            <div className="team-member">
              <img 
                src="https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
                alt="Team member" 
                className="team-photo"
              />
              <div className="team-info">
                <h4>Sneha Gupta</h4>
                <p>Customer Relations Manager</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;