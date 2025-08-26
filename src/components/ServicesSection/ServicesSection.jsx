import React, { useRef, useEffect, useState } from 'react';

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState([]);
  
  const services = [
    { title: "Social media video Editing", id: 1 },
    { title: "Content Creation", id: 2 },
    { title: "Storytelling", id: 3 },
    { title: "Sound Design", id: 4 },
    { title: "AI Tools", id: 5 },
    { title: "Freelancing", id: 6 }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // When section comes into view, animate items one by one
            services.forEach((service, index) => {
              setTimeout(() => {
                setVisibleItems(prev => [...prev, service.id]);
              }, index * 200); // 200ms delay between each item
            });
            
            // Disconnect after triggering animations
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="services-section"
      style={{
        padding: '80px 20px',
        backgroundColor: '#0f172a',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{
        maxWidth: '1200px',
        width: '100%',
        margin: '0 auto',
        textAlign: 'center',
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          color: '#f8fafc',
          marginBottom: '60px',
          letterSpacing: '1px',
        }}>PROi EDITORS CLUB</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          alignItems: 'stretch',
        }}>
          {services.map(service => (
            <div
              key={service.id}
              style={{
                backgroundColor: '#1e293b',
                borderRadius: '12px',
                padding: '30px 20px',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
                transition: 'opacity 0.6s ease, transform 0.6s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '150px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                opacity: visibleItems.includes(service.id) ? 1 : 0,
                transform: visibleItems.includes(service.id) 
                  ? 'translateY(0)' 
                  : 'translateY(30px)',
              }}
            >
              <h3 style={{
                fontSize: '1.4rem',
                fontWeight: '600',
                color: '#e2e8f0',
                textAlign: 'center',
                margin: '0',
              }}>{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;