import React, { useState, useEffect } from 'react';

// Main App Component
const GeminiSample = () => {
  return (
    <div style={styles.app}>
      <Header />
      <main>
        <HeroSection />
        <TopicsCarousel />
        <AboutUs />
        <Registration />
      </main>
      <Contacts />
    </div>
  );
};

// Header Component
const Header = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80; // height of the header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
      });
    }
  };

  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        The World <strong>2050</strong>
      </div>
      <nav>
        <ul style={styles.navList}>
          <li><a href="#topics" onClick={(e) => { e.preventDefault(); scrollToSection('topics'); }} className="nav-link">Topics</a></li>
          <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="nav-link">About Us</a></li>
          <li><a href="#register" onClick={(e) => { e.preventDefault(); scrollToSection('register'); }} className="nav-link">Registration</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="nav-link">Contacts</a></li>
        </ul>
      </nav>
    </header>
  );
};

// Hero Section Component
const HeroSection = () => (
  <section id="home" style={styles.hero}>
    <div style={styles.heroContent}>
      <h1 style={styles.heroTitle}>The World In 2050</h1>
      <p style={styles.heroSlogan}>Shaping the future through Innovation, Sustainability and Global Collaboration</p>
    </div>
  </section>
);


// Topics Carousel Component
const TopicsCarousel = () => {
    const topicsData = [
        {
          title: 'Technology & Innovation',
          points: [
            'AI and Human Communication',
            'Smart Cities to Smart Societies',
            'Youth in Technological Progress',
            'Cybersecurity in the Digital Era',
          ],
        },
        {
          title: 'Environment & Sustainability',
          points: [
              'Innovations in Renewable Energy',
              'Climate Change Adaptation',
              'Sustainable Agriculture & Food Security',
              'Youth in Global Sustainability',
          ]
        },
        {
            title: 'Education & Employment',
            points: [
                'AI in Education & Collaboration',
                'The Changing Role of Teachers',
                'Developing Future-Ready Skills',
                'AI and New Employment Paradigms',
            ]
        },
        {
            title: 'Health & Society',
            points: [
                'Mental Health Challenges & Solutions',
                'Community as Foundation of Healthcare',
                'Health Education for Empowerment',
                'AI in Therapy and Telemedicine',
            ]
        },
        {
            title: 'Tourism & Global Mobility',
            points: [
                'Sustainable & Responsible Tourism',
                'Borderless Travel & Technology',
                'Tourism, Job Creation & Inequality',
                'Climate Change and Tourism Adaptation',
            ]
        },
        {
            title: 'Inclusive Economy',
            points: [
                'Addressing Global Inequality',
                'Decent Work & Social Protection',
                'Digital Economy & Financial Inclusion',
                'Role of Women & Youth in Economy',
            ]
        },
      ];
    
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? topicsData.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex(prevIndex => (prevIndex === topicsData.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <section id="topics" style={styles.topicsSection}>
            <h2 style={styles.sectionTitle}>Key Topics</h2>
            <div style={styles.carouselContainer}>
                <div style={{...styles.carouselTrack, transform: `translateX(-${currentIndex * 100}%)`}}>
                    {topicsData.map((topic, index) => (
                        <div key={index} style={styles.topicCard}>
                            <h3 style={styles.cardTitle}>{topic.title}</h3>
                            <ul style={styles.cardList}>
                                {topic.points.map((point, pIndex) => (
                                    <li key={pIndex} className="card-list-item">{point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <button onClick={handlePrev} style={{...styles.carouselButton, ...styles.carouselButtonPrev}} aria-label="Previous Topic">&lt;</button>
                <button onClick={handleNext} style={{...styles.carouselButton, ...styles.carouselButtonNext}} aria-label="Next Topic">&gt;</button>
            </div>
        </section>
    );
};

// About Us Component
const AboutUs = () => (
  <section id="about" style={styles.aboutSection}>
    <div style={styles.container}>
      <h2 style={styles.sectionTitle}>About The Initiative</h2>
      <div style={styles.aboutContent}>
        <div style={styles.aboutText}>
          <p>The World In 2050 is a global initiative dedicated to fostering dialogue and action on the critical challenges and opportunities shaping our future. We bring together thought leaders, innovators, policymakers, and young trailblazers to co-create a more sustainable, equitable, and prosperous world.</p>
          <p>Our mission is to inspire change by exploring the frontiers of technology, sustainability, and social progress through collaborative events that build a global community committed to a better future.</p>
        </div>
        <div style={styles.aboutPhotos}>
          <img src={`https://picsum.photos/seed/event1/400/280`} alt="Team collaborating" style={styles.aboutPhoto} />
          <img src={`https://picsum.photos/seed/event2/400/280`} alt="Global conference" style={styles.aboutPhoto} />
        </div>
      </div>
    </div>
  </section>
);

// // Registration Component with Countdown
// const Registration = () => {
//     const calculateTimeLeft = () => {
//         // Countdown end date is Nov 1, 2025.
//         // Current date for calculation is Sep 15, 2025.
//         const difference = +new Date('2025-11-01T00:00:00') - +new Date('2025-09-15T16:04:09');
//         let timeLeft = {};
//         if (difference > 0) {
//             timeLeft = {
//                 Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//                 Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//                 Mins: Math.floor((difference / 1000 / 60) % 60),
//                 Secs: Math.floor((difference / 1000) % 60)
//             };
//         }
//         return timeLeft;
//     };
    
//     // Static calculation for display purposes as requested
//     const timeLeft = calculateTimeLeft();


//     return (
//         <section id="register" style={styles.registrationSection}>
//             <div style={styles.container}>
//                 <h2 style={styles.sectionTitle}>Join the Conversation</h2>
//                 <p style={styles.registrationText}>Be part of the movement shaping our collective future. Registration is now open!</p>
//                 <div style={styles.countdown}>
//                     {Object.entries(timeLeft).length > 0 ? (
//                         Object.entries(timeLeft).map(([unit, value]) => (
//                             <div key={unit} style={styles.countdownItem}>
//                                 <span style={styles.countdownValue}>{value}</span>
//                                 <span style={styles.countdownUnit}>{unit}</span>
//                             </div>
//                         ))
//                     ) : (
//                         <span style={styles.eventLive}>The Event is Live!</span>
//                     )}
//                 </div>
//                 <a href="https://docs.google.com/forms/d/e/1FAIpQLScQjszJrnDy_D8wnS1j9Nflqxr12qzUlSx82oRPaBzqEU5kpw/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="register-button">
//                     Register Now
//                 </a>
//             </div>
//         </section>
//     );
// };

// Registration Component with Countdown
const Registration = () => {
    const calculateTimeLeft = () => {
        const difference = +new Date('2025-11-01T00:00:00') - +new Date();
        let timeLeft = {};
        if (difference > 0) {
            timeLeft = {
                Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                Mins: Math.floor((difference / 1000 / 60) % 60),
                Secs: Math.floor((difference / 1000) % 60)
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => setTimeLeft(calculateTimeLeft()), 1000);
        return () => clearTimeout(timer);
    });

    return (
        <section id="register" style={styles.registrationSection}>
            <div style={styles.container}>
                <h2 style={styles.sectionTitle}>Join the Conversation</h2>
                <p style={styles.registrationText}>Be part of the movement shaping our collective future. Registration is now open!</p>
                <div style={styles.countdown}>
                    {Object.entries(timeLeft).length > 0 ? (
                        Object.entries(timeLeft).map(([unit, value]) => (
                            <div key={unit} style={styles.countdownItem}>
                                <span style={styles.countdownValue}>{value}</span>
                                <span style={styles.countdownUnit}>{unit}</span>
                            </div>
                        ))
                    ) : (
                        <span style={styles.eventLive}>The Event is Live!</span>
                    )}
                </div>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScQjszJrnDy_D8wnS1j9Nflqxr12qzUlSx82oRPaBzqEU5kpw/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="register-button">
                    Register Now
                </a>
            </div>
        </section>
    );
};

// Contacts Component (Footer)
const Contacts = () => (
  <footer id="contact" style={styles.footer}>
    <div style={styles.container}>
      <p><strong>Contact Us:</strong> <a href="mailto:contact@theworld2050.org" style={styles.contactLink}>contact@theworld2050.org</a></p>
      <p>Follow us on social media for updates: @TheWorldIn2050</p>
      <p style={styles.footerCopyright}>© 2025 The World In 2050 Initiative. All Rights Reserved.</p>
    </div>
  </footer>
);

// CSS Styles Object
const styles = {
  app: {
    backgroundColor: '#FFFFFF',
    color: '#333',
    fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    lineHeight: 1.7,
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 5%',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
    position: 'fixed',
    width: '90%',
    top: 0,
    zIndex: 1000,
    backdropFilter: 'blur(10px)',
  },
  logo: {
    fontSize: '1.5rem',
    color: '#005bb5',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    gap: '2.5rem',
    margin: 0,
    padding: 0,
  },
  hero: {
    paddingTop: '80px',
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    background: 'linear-gradient(135deg, #e0f7fa 0%, #d1c4e9 100%)',
  },
  heroContent: {
    maxWidth: '800px',
    padding: '2rem',
  },
  heroTitle: {
    fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
    margin: '0 0 1rem 0',
    color: '#1a237e',
    fontWeight: 700,
  },
  heroSlogan: {
    fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
    color: '#3949ab',
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: 'clamp(2rem, 5vw, 2.8rem)',
    marginBottom: '4rem',
    color: '#005bb5',
    fontWeight: 600,
  },
  topicsSection: {
    padding: '6rem 0',
    overflow: 'hidden',
  },
  carouselContainer: {
    maxWidth: '500px',
    margin: '0 auto',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '12px',
  },
  carouselTrack: {
    display: 'flex',
    transition: 'transform 0.5s ease-in-out',
  },
  topicCard: {
    minWidth: '100%',
    boxSizing: 'border-box',
    padding: '2.5rem',
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
  },
  carouselButton: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    border: '1px solid #ccc',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    fontSize: '20px',
    cursor: 'pointer',
    zIndex: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#333',
    transition: 'background-color 0.3s, color 0.3s',
  },
  carouselButtonPrev: {
    left: '10px',
  },
  carouselButtonNext: {
    right: '10px',
  },
  cardTitle: {
    fontSize: '1.7rem',
    color: '#005bb5',
    marginBottom: '1.5rem',
    textAlign: 'center',
    borderBottom: '2px solid #005bb5',
    paddingBottom: '0.75rem',
  },
  cardList: {
    listStyle: 'none',
    padding: 0,
    textAlign: 'left',
    margin: 0,
  },
  aboutSection: {
    padding: '6rem 0',
    backgroundColor: '#f8f9fa',
  },
  aboutContent: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '3rem',
    alignItems: 'center',
  },
  aboutText: {
    fontSize: '1.1rem',
  },
  aboutPhotos: {
    display: 'flex',
    gap: '1rem',
  },
  aboutPhoto: {
    width: '50%',
    borderRadius: '8px',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
  },
  registrationSection: {
    padding: '6rem 0',
    textAlign: 'center',
    background: 'linear-gradient(135deg, #e0f7fa 0%, #d1c4e9 100%)',
  },
  registrationText: {
    fontSize: '1.2rem',
    maxWidth: '600px',
    margin: '0 auto 2.5rem auto',
    color: '#3949ab',
  },
  countdown: {
    display: 'flex',
    justifyContent: 'center',
    gap: 'clamp(1rem, 5vw, 3rem)',
  },
  countdownItem: {
    display: 'flex',
    flexDirection: 'column',
  },
  countdownValue: {
    fontSize: 'clamp(2.5rem, 8vw, 4rem)',
    fontWeight: '700',
    color: '#1a237e',
  },
  countdownUnit: {
    fontSize: '1rem',
    color: '#3949ab',
  },
  eventLive: {
      fontSize: '2rem',
      color: '#007bff',
      fontWeight: 'bold'
  },
  footer: {
    backgroundColor: '#343a40',
    color: '#f8f9fa',
    textAlign: 'center',
    padding: '3rem 0',
  },
  contactLink: {
    color: '#e9ecef',
    textDecoration: 'none',
  },
  footerCopyright: {
    marginTop: '2rem',
    fontSize: '0.9rem',
    color: '#adb5bd',
  }
};

// Inject animations and dynamic styles into the document head
const dynamicStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

  .nav-link {
    color: #333;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 600;
    transition: color 0.3s ease;
    padding-bottom: 5px;
    position: relative;
  }
  
  .nav-link:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #007bff;
    transition: width 0.3s ease;
  }

  .nav-link:hover {
    color: #007bff;
  }
  
  .nav-link:hover:after {
    width: 100%;
  }

  .carousel-button:hover {
      background-color: #007bff;
      color: #fff;
  }
  
  .card-list-item {
    margin-bottom: 0.85rem;
    padding-left: 1.5rem;
    position: relative;
    font-size: 1.05rem;
  }
  
  .card-list-item::before {
      content: '✔';
      color: #007bff;
      position: absolute;
      left: 0;
      top: 1px;
  }
  
  .register-button {
    display: inline-block;
    padding: 1rem 3.5rem;
    font-size: 1.25rem;
    font-weight: 600;
    color: #FFFFFF;
    background-color: #007bff;
    border-radius: 50px;
    text-decoration: none;
    transition: background-color 0.3s ease, transform 0.3s ease;
    box-shadow: 0 4px 15px rgba(0, 123, 255, 0.4);
    margin-top: 2.5rem;
  }
  
  .register-button:hover {
      background-color: #0069d9;
      transform: translateY(-3px);
  }
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = dynamicStyles;
document.head.appendChild(styleSheet);

export default GeminiSample;