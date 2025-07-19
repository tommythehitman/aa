import React from 'react';
import '../styles/brands.css';

const Brands: React.FC = () => {
  const brands = [
    {
      name: "Bosch",
      category: "OEM",
      description: "Leading supplier of automotive technology and services worldwide.",
      image: "https://via.placeholder.com/150x75/666666/FFFFFF?text=BOSCH"
    },
    {
      name: "Denso",
      category: "OEM",
      description: "Global automotive components manufacturer focusing on advanced technology.",
      image: "https://via.placeholder.com/150x75/666666/FFFFFF?text=DENSO"
    },
    {
      name: "ACDelco",
      category: "OEM",
      description: "General Motors' original equipment and aftermarket parts brand.",
      image: "https://via.placeholder.com/150x75/666666/FFFFFF?text=ACDelco"
    },
    {
      name: "Brembo",
      category: "Performance",
      description: "World leader in brake technology for high-performance vehicles.",
      image: "https://via.placeholder.com/150x75/666666/FFFFFF?text=Brembo"
    },
    {
      name: "K&N",
      category: "Performance",
      description: "High-flow air filters and intake systems for enhanced performance.",
      image: "https://via.placeholder.com/150x75/666666/FFFFFF?text=K&N"
    },
    {
      name: "Bilstein",
      category: "Suspension",
      description: "Premium shock absorbers and suspension components since 1873.",
      image: "https://via.placeholder.com/150x75/666666/FFFFFF?text=Bilstein"
    },
    {
      name: "NGK",
      category: "Ignition",
      description: "World's largest supplier of spark plugs and related components.",
      image: "https://via.placeholder.com/150x75/666666/FFFFFF?text=NGK"
    },
    {
      name: "Monroe",
      category: "Suspension",
      description: "Trusted name in ride control products and suspension systems.",
      image: "https://via.placeholder.com/150x75/666666/FFFFFF?text=Monroe"
    },
    {
      name: "Motorcraft",
      category: "OEM",
      description: "Ford Motor Company's service parts brand for Ford and Lincoln vehicles.",
      image: "https://via.placeholder.com/150x75/666666/FFFFFF?text=Motorcraft"
    },
    {
      name: "Champion",
      category: "Aftermarket",
      description: "Quality replacement parts at competitive prices for all vehicles.",
      image: "https://via.placeholder.com/150x75/666666/FFFFFF?text=Champion"
    }
  ];

  return (
    <main>
      <section className="brands-page">
        <div className="container">
          <div className="brands-intro">
            <h1>Parts From the Brands You Trust</h1>
            <p>
              We partner with the world's leading automotive manufacturers and suppliers to bring you 
              the highest quality parts. From OEM specifications to high-performance upgrades, our 
              brand partners represent decades of engineering excellence and innovation.
            </p>
          </div>

          <div className="brands-grid">
            {brands.map((brand, index) => (
              <div key={index} className="brand-item">
                <img src={brand.image} alt={`${brand.name} logo`} />
                <h4>{brand.name}</h4>
                <p className="brand-category">{brand.category}</p>
                <p>{brand.description}</p>
              </div>
            ))}
          </div>

          <div className="brands-cta">
            <h3>Looking for a specific brand?</h3>
            <p>
              Can't find the brand you're looking for? We work with hundreds of manufacturers 
              and can source parts from virtually any automotive supplier.
            </p>
            <a href="/contact" className="btn btn-primary">Contact Our Team</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Brands;