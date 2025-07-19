import React, { useState } from 'react';
import '../styles/contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      inquiryType: '',
      message: ''
    });
  };

  return (
    <main>
      {/* Banner Section */}
      <section className="contact-banner" style={{
        backgroundImage: 'url(https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=1920&h=200&fit=crop)'
      }}>
        <div className="contact-banner-overlay"></div>
        <h1>We're Here To Help</h1>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form">
              <h2>Get In Touch</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="fullName">Full Name *</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="inquiryType">Inquiry Type *</label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="part-inquiry">Part Inquiry</option>
                    <option value="general">General Question</option>
                    <option value="support">Technical Support</option>
                    <option value="wholesale">Wholesale Inquiry</option>
                    <option value="return">Return/Exchange</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    placeholder="Please describe your inquiry in detail..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="contact-info">
              <h3>Contact Information</h3>
              
              <div className="info-item">
                <h4>Address</h4>
                <p>
                  Titan Auto Parts<br />
                  123 Industrial Avenue<br />
                  Mumbai, Maharashtra 400001<br />
                  India
                </p>
              </div>

              <div className="info-item">
                <h4>Phone</h4>
                <p>
                  <a href="tel:+911234567890">+91 12345 67890</a><br />
                  <a href="tel:+911234567891">+91 12345 67891</a> (Technical Support)
                </p>
              </div>

              <div className="info-item">
                <h4>Email</h4>
                <p>
                  <a href="mailto:info@titanautoparts.com">info@titanautoparts.com</a><br />
                  <a href="mailto:support@titanautoparts.com">support@titanautoparts.com</a><br />
                  <a href="mailto:sales@titanautoparts.com">sales@titanautoparts.com</a>
                </p>
              </div>

              <div className="info-item">
                <h4>Business Hours</h4>
                <p>
                  Monday - Saturday: 9:00 AM - 6:00 PM<br />
                  Sunday: Closed<br />
                  <br />
                  Emergency Support: 24/7<br />
                  (For urgent technical issues)
                </p>
              </div>

              <div className="info-item">
                <h4>Support</h4>
                <p>
                  For immediate assistance with part identification or technical questions, 
                  please call our technical support line or use our live chat feature 
                  available during business hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;