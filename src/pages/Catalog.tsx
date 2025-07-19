import React, { useState } from 'react';
import '../styles/catalog.css';

interface Part {
  id: number;
  name: string;
  description: string;
  brand: string;
  partNumber: string;
  category: string;
  make: string;
  model: string;
  year: string;
  image: string;
}

const Catalog: React.FC = () => {
  const [filters, setFilters] = useState({
    make: '',
    model: '',
    year: '',
    category: '',
    search: ''
  });

  // Sample parts data
  const allParts: Part[] = [
    {
      id: 1,
      name: "High-Performance Brake Pads",
      description: "Premium ceramic brake pads for superior stopping power and reduced dust.",
      brand: "Brembo",
      partNumber: "BRM-BP001",
      category: "brakes",
      make: "Toyota",
      model: "Camry",
      year: "2020-2025",
      image: "https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      id: 2,
      name: "Engine Air Filter",
      description: "High-flow air filter for improved engine performance and fuel efficiency.",
      brand: "K&N",
      partNumber: "KN-AF002",
      category: "engine",
      make: "Honda",
      model: "Civic",
      year: "2019-2024",
      image: "https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      id: 3,
      name: "Heavy Duty Shock Absorber",
      description: "Premium shock absorber for enhanced ride comfort and vehicle stability.",
      brand: "Bilstein",
      partNumber: "BIL-SA003",
      category: "suspension",
      make: "Ford",
      model: "F-150",
      year: "2018-2023",
      image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      id: 4,
      name: "LED Headlight Bulbs",
      description: "Energy-efficient LED bulbs with superior brightness and longevity.",
      brand: "Philips",
      partNumber: "PHI-LED004",
      category: "electrical",
      make: "BMW",
      model: "3 Series",
      year: "2020-2025",
      image: "https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      id: 5,
      name: "Turbocharger Kit",
      description: "Complete turbo kit for increased engine power and performance.",
      brand: "Garrett",
      partNumber: "GAR-TK005",
      category: "engine",
      make: "Subaru",
      model: "WRX",
      year: "2019-2024",
      image: "https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      id: 6,
      name: "Performance Exhaust System",
      description: "Stainless steel exhaust system for improved sound and performance.",
      brand: "Borla",
      partNumber: "BOR-EX006",
      category: "exhaust",
      make: "Chevrolet",
      model: "Camaro",
      year: "2021-2025",
      image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  const [parts] = useState<Part[]>(allParts);

  const filteredParts = parts.filter(part => {
    return (
      (filters.make === '' || part.make.toLowerCase().includes(filters.make.toLowerCase())) &&
      (filters.model === '' || part.model.toLowerCase().includes(filters.model.toLowerCase())) &&
      (filters.year === '' || part.year.includes(filters.year)) &&
      (filters.category === '' || part.category === filters.category) &&
      (filters.search === '' || 
        part.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        part.description.toLowerCase().includes(filters.search.toLowerCase()) ||
        part.brand.toLowerCase().includes(filters.search.toLowerCase()) ||
        part.partNumber.toLowerCase().includes(filters.search.toLowerCase())
      )
    );
  });

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      make: '',
      model: '',
      year: '',
      category: '',
      search: ''
    });
  };

  return (
    <main>
      {/* Filter Bar */}
      <section className="catalog-filter sticky">
        <div className="container">
          <div className="filter-container">
            <div className="filter-left">
              <select 
                className="filter-select"
                value={filters.make}
                onChange={(e) => handleFilterChange('make', e.target.value)}
              >
                <option value="">All Makes</option>
                <option value="Toyota">Toyota</option>
                <option value="Honda">Honda</option>
                <option value="Ford">Ford</option>
                <option value="BMW">BMW</option>
                <option value="Subaru">Subaru</option>
                <option value="Chevrolet">Chevrolet</option>
              </select>
              
              <select 
                className="filter-select"
                value={filters.model}
                onChange={(e) => handleFilterChange('model', e.target.value)}
              >
                <option value="">All Models</option>
                <option value="Camry">Camry</option>
                <option value="Civic">Civic</option>
                <option value="F-150">F-150</option>
                <option value="3 Series">3 Series</option>
                <option value="WRX">WRX</option>
                <option value="Camaro">Camaro</option>
              </select>
              
              <select 
                className="filter-select"
                value={filters.year}
                onChange={(e) => handleFilterChange('year', e.target.value)}
              >
                <option value="">All Years</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
              </select>
              
              <select 
                className="filter-select"
                value={filters.category}
                onChange={(e) => handleFilterChange('category', e.target.value)}
              >
                <option value="">All Categories</option>
                <option value="engine">Engine</option>
                <option value="brakes">Brakes</option>
                <option value="suspension">Suspension</option>
                <option value="electrical">Electrical</option>
                <option value="exhaust">Exhaust</option>
              </select>
            </div>
            
            <div className="filter-right">
              <input
                type="text"
                placeholder="Search parts..."
                className="search-input"
                value={filters.search}
                onChange={(e) => handleFilterChange('search', e.target.value)}
              />
              <button onClick={clearFilters} className="clear-filters">
                Clear Filters
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="catalog-results">
        <div className="container">
          <div className="results-info">
            Showing {filteredParts.length} of {parts.length} parts
          </div>
          
          <div className="results-grid">
            {filteredParts.map((part) => (
              <div key={part.id} className="part-item">
                <img 
                  src={part.image} 
                  alt={part.name} 
                  className="part-thumbnail"
                />
                <div className="part-details">
                  <h3>{part.name}</h3>
                  <p className="part-description">{part.description}</p>
                  <p className="part-brand">{part.brand} - {part.partNumber}</p>
                  <p className="part-brand">Fits: {part.make} {part.model} ({part.year})</p>
                  <a href={`/catalog/part/${part.id}`} className="part-link">View Details</a>
                </div>
              </div>
            ))}
          </div>
          
          {filteredParts.length === 0 && (
            <div style={{ textAlign: 'center', padding: '64px 0', color: '#666' }}>
              <h3>No parts found</h3>
              <p>Try adjusting your filters or search criteria.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Catalog;