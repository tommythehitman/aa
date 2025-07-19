import React from 'react';
import '../styles/blog.css';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  image: string;
  slug: string;
}

const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Essential Engine Maintenance Tips for Peak Performance",
      date: "January 15, 2025",
      excerpt: "Learn the critical maintenance practices that keep your engine running smoothly and extend its lifespan. From oil changes to filter replacements, discover what every car owner should know.",
      category: "Maintenance",
      image: "https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      slug: "essential-engine-maintenance-tips"
    },
    {
      id: 2,
      title: "Brake System Upgrades: When and Why to Consider Them",
      date: "January 10, 2025",
      excerpt: "Explore the benefits of upgrading your brake system and learn how to choose the right components for your driving style and vehicle requirements.",
      category: "Performance",
      image: "https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      slug: "brake-system-upgrades-guide"
    },
    {
      id: 3,
      title: "Understanding Suspension Components and Their Role",
      date: "January 5, 2025",
      excerpt: "A comprehensive guide to suspension systems, including shocks, struts, and springs. Learn how each component affects your vehicle's ride and handling.",
      category: "Technical",
      image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      slug: "understanding-suspension-components"
    },
    {
      id: 4,
      title: "Electrical System Diagnostics: Common Issues and Solutions",
      date: "December 28, 2024",
      excerpt: "Troubleshoot common electrical problems in modern vehicles. From battery issues to complex wiring problems, get expert insights on diagnosis and repair.",
      category: "Diagnostics",
      image: "https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      slug: "electrical-system-diagnostics"
    },
    {
      id: 5,
      title: "Choosing the Right Air Filter for Your Vehicle",
      date: "December 20, 2024",
      excerpt: "Air filters play a crucial role in engine performance and longevity. Learn about different filter types and how to select the best option for your needs.",
      category: "Parts Guide",
      image: "https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      slug: "choosing-right-air-filter"
    },
    {
      id: 6,
      title: "Winter Car Care: Protecting Your Vehicle in Cold Weather",
      date: "December 15, 2024",
      excerpt: "Prepare your vehicle for winter conditions with our comprehensive guide to cold weather maintenance and the parts you need to keep your car running reliably.",
      category: "Seasonal",
      image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      slug: "winter-car-care-guide"
    }
  ];

  const categories = ["Maintenance", "Performance", "Technical", "Diagnostics", "Parts Guide", "Seasonal"];

  const recentPosts = blogPosts.slice(0, 5);

  return (
    <main>
      {/* Blog Header */}
      <section className="blog-header">
        <div className="container">
          <h1>Automotive Knowledge Center</h1>
          <p>
            Stay informed with the latest automotive tips, technical insights, and industry news. 
            Our expert team shares valuable knowledge to help you make informed decisions about 
            your vehicle maintenance and parts selection.
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="blog-content">
        <div className="container">
          <div className="blog-grid">
            {/* Blog Posts */}
            <div className="blog-posts">
              {blogPosts.map((post) => (
                <article key={post.id} className="blog-post">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="post-image"
                  />
                  <div className="post-content">
                    <h2>
                      <a href={`/blog/${post.slug}`}>{post.title}</a>
                    </h2>
                    <div className="post-meta">
                      {post.date} • {post.category}
                    </div>
                    <p className="post-excerpt">{post.excerpt}</p>
                    <a href={`/blog/${post.slug}`} className="read-more">
                      Read More →
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {/* Sidebar */}
            <aside className="blog-sidebar">
              <div className="sidebar-section">
                <h4>Search</h4>
                <div className="sidebar-search">
                  <input 
                    type="text" 
                    placeholder="Search articles..." 
                  />
                </div>
              </div>

              <div className="sidebar-section">
                <h4>Categories</h4>
                <ul className="categories-list">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a href={`/blog/category/${category.toLowerCase().replace(' ', '-')}`}>
                        {category}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-section">
                <h4>Recent Posts</h4>
                <ul className="recent-posts">
                  {recentPosts.map((post) => (
                    <li key={post.id}>
                      <a href={`/blog/${post.slug}`} className="recent-post-title">
                        {post.title}
                      </a>
                      <div className="recent-post-date">{post.date}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;