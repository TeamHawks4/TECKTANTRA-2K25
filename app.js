document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            if (navLinks) navLinks.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            if (hamburger) hamburger.classList.remove('active');
            if (navLinks) navLinks.classList.remove('active');
        });
    });
    
    // Sample startup data (12 entries)
    const startups = [
        {
            id: 1,
            name: 'EcoPack Solutions',
            description: 'Sustainable packaging alternatives for e-commerce businesses',
            category: 'Sustainability',
            image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
            rating: 4.7,
            reviews: 28,
            location: 'San Francisco, CA',
            founded: '2021',
            teamSize: '5-10',
            fundingStage: 'Seed',
            detailedDescription: 'EcoPack Solutions provides innovative, biodegradable packaging materials that decompose within 90 days. Our mission is to help e-commerce businesses reduce their environmental footprint without compromising on product protection during shipping.',
            stats: {
                customers: '150+',
                co2Reduced: '12 tons',
                partnerships: '8'
            },
            reviews: [
                {
                    name: 'Sarah Johnson',
                    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
                    date: '2 weeks ago',
                    rating: 5,
                    content: 'EcoPack has transformed our shipping process. Our customers love the eco-friendly packaging and we\'ve seen a 15% increase in positive reviews mentioning our packaging.'
                }
            ]
        },
        {
            id: 2,
            name: 'House PredX',
            description: 'Predict the price in one click.',
            category: 'Finance',
            image: 'https://i.pinimg.com/736x/67/9d/88/679d88f97650c21053af8820e0c99c3a.jpg',
            rating: 4.0,
            reviews: 30,
            location: 'San Francisco, CA',
            founded: '2024',
            teamSize: '5-10',
            fundingStage: 'Seed',
            detailedDescription: 'Find the Renovation cost for your house based on your requirements.',
            stats: {
                customers: '100+',
                partnerships: '3'
            },
            reviews: [
                {
                    name: 'Classey class',
                    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
                    date: '9 weeks ago',
                    rating: 4.6,
                    content: 'Made the work too easy and feasible.'
                }
            ]
        },
        {
            id: 3,
            name: 'EduGenius',
            description: 'AI-powered personalized learning for students.',
            category: 'EdTech',
            image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?crop&w=500&q=80',
            rating: 4.9,
            reviews: 40,
            location: 'Delhi, India',
            founded: '2022',
            teamSize: '20-30',
            fundingStage: 'Series B',
            detailedDescription: 'Adaptive learning platform that customizes lesson plans for students based on their strengths and weaknesses.',
            stats: {
                customers: '2000+',
                partnerships: '15'
            },
            reviews: [
                {
                    name: 'Anagha Mathew',
                    avatar: 'https://randomuser.me/api/portraits/women/25.jpg',
                    date: '2 weeks ago',
                    rating: 5,
                    content: 'My kids love this platform! It has improved their grades significantly.'
                }
            ]
        },
        {
            id: 4,
            name: 'HealthBridge',
            description: 'Telemedicine services connecting patients with doctors instantly.',
            category: 'HealthTech',
            image: 'https://images.unsplash.com/photo-1588776814546-d90a1f3a8203?crop&w=500&q=80',
            rating: 4.7,
            reviews: 58,
            location: 'Bengaluru, India',
            founded: '2021',
            teamSize: '50-70',
            fundingStage: 'Series A',
            detailedDescription: 'Offers 24/7 video consultations, e-prescriptions, and follow-ups for patients with licensed medical professionals.',
            stats: {
              customers: '5000+',
              partnerships: '10'
            },
            reviews: [
              {
                name: 'Rahul Batra',
                avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
                date: '1 month ago',
                rating: 5,
                content: 'Convenient and quick. Saved me a trip to the hospital!'
              }
            ]
          },
          {
            id: 5,
            name: 'GreenNest',
            description: 'Sustainable home products marketplace.',
            category: 'Sustainability',
            image: 'https://images.unsplash.com/photo-1560185008-ae6eafe4d2f3?crop&w=500&q=80',
            rating: 4.6,
            reviews: 36,
            location: 'Pune, India',
            founded: '2020',
            teamSize: '15-20',
            fundingStage: 'Seed',
            detailedDescription: 'Curated eco-friendly home essentials from verified green brands. A one-stop shop for conscious consumers.',
            stats: {
              customers: '3000+',
              partnerships: '18'
            },
            reviews: [
              {
                name: 'Ishita Sharma',
                avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
                date: '3 weeks ago',
                rating: 4.5,
                content: 'Love the biodegradable packaging and product variety!'
              }
            ]
          },
          {
            id: 6,
            name: 'AutoPilotIQ',
            description: 'AI analytics for fleet management and predictive maintenance.',
            category: 'MobilityTech',
            image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?crop&w=500&q=80',
            rating: 4.8,
            reviews: 23,
            location: 'Hyderabad, India',
            founded: '2019',
            teamSize: '30-40',
            fundingStage: 'Series B',
            detailedDescription: 'Tracks real-time vehicle health, routes, fuel efficiency, and driver behavior with machine learning models.',
            stats: {
              customers: '1200+',
              partnerships: '25'
            },
            reviews: [
              {
                name: 'Naveen Arora',
                avatar: 'https://randomuser.me/api/portraits/men/56.jpg',
                date: '1 week ago',
                rating: 5,
                content: 'Reduced our fleet downtime by over 20%. Worth every penny.'
              }
            ]
          },
          {
            id: 7,
            name: 'ByteBazaar',
            description: 'Digital marketplace for handcrafted indie games.',
            category: 'Gaming',
            image: 'https://images.unsplash.com/photo-1605902711622-cfb43c4437d7?crop&w=500&q=80',
            rating: 4.5,
            reviews: 42,
            location: 'Ahmedabad, India',
            founded: '2022',
            teamSize: '10-15',
            fundingStage: 'Angel',
            detailedDescription: 'Showcases and sells indie games built by solo developers and small studios globally.',
            stats: {
              customers: '1500+',
              partnerships: '8'
            },
            reviews: [
              {
                name: 'Saanvi Jain',
                avatar: 'https://randomuser.me/api/portraits/women/52.jpg',
                date: '4 days ago',
                rating: 4.8,
                content: 'Discovered some amazing hidden gem games here!'
              }
            ]
          },
          {
            id: 8,
            name: 'AgroSnap',
            description: 'Smart sensors and AI-driven monitoring for farms.',
            category: 'AgriTech',
            image: 'https://images.unsplash.com/photo-1577471488278-efe3fbb0f13c?crop&w=500&q=80',
            rating: 4.9,
            reviews: 61,
            location: 'Nagpur, India',
            founded: '2020',
            teamSize: '25-35',
            fundingStage: 'Series A',
            detailedDescription: 'Helps farmers optimize crop yields with AI-backed real-time environmental and soil data.',
            stats: {
              customers: '1800+',
              partnerships: '22'
            },
            reviews: [
              {
                name: 'Harshad Pawar',
                avatar: 'https://randomuser.me/api/portraits/men/41.jpg',
                date: '2 weeks ago',
                rating: 5,
                content: 'Improved my tomato yield by 30% in one season!'
              }
            ]
          },
          {
            id: 9,
            name: 'VaultSecure',
            description: 'Cloud-native cybersecurity platform for startups.',
            category: 'Cybersecurity',
            image: 'https://images.unsplash.com/photo-1591696331111-6c3e7d3ccaa8?crop&w=500&q=80',
            rating: 4.7,
            reviews: 33,
            location: 'Chennai, India',
            founded: '2021',
            teamSize: '20-25',
            fundingStage: 'Series B',
            detailedDescription: 'Offers endpoint protection, intrusion detection, and vulnerability assessments using AI.',
            stats: {
              customers: '600+',
              partnerships: '12'
            },
            reviews: [
              {
                name: 'Devika Rao',
                avatar: 'https://randomuser.me/api/portraits/women/31.jpg',
                date: '5 days ago',
                rating: 4.6,
                content: 'Peace of mind for our growing startup. Easy to set up and monitor.'
              }
            ]
          },
          {
            id: 10,
            name: 'FinPath',
            description: 'AI financial planner for millennials.',
            category: 'FinTech',
            image: 'https://images.unsplash.com/photo-1565373799391-3a3e6f8de0b3?crop&w=500&q=80',
            rating: 4.8,
            reviews: 47,
            location: 'Mumbai, India',
            founded: '2022',
            teamSize: '20-30',
            fundingStage: 'Pre-Series A',
            detailedDescription: 'Helps users plan budgets, track investments, and get financial advice tailored to life goals.',
            stats: {
              customers: '3500+',
              partnerships: '5'
            },
            reviews: [
              {
                name: 'Kunal Shetty',
                avatar: 'https://randomuser.me/api/portraits/men/37.jpg',
                date: '1 month ago',
                rating: 5,
                content: 'My savings and investment strategy finally make sense!'
              }
            ]
          },
          {
            id: 11,
            name: 'SkillForge',
            description: 'Marketplace for hands-on tech bootcamps.',
            category: 'EdTech',
            image: 'https://images.unsplash.com/photo-1581092334849-99e82b02e1b2?crop&w=500&q=80',
            rating: 4.6,
            reviews: 52,
            location: 'Kolkata, India',
            founded: '2019',
            teamSize: '40-60',
            fundingStage: 'Series C',
            detailedDescription: 'Project-based learning platform offering bootcamps in AI, Web Dev, and Data Science.',
            stats: {
              customers: '4500+',
              partnerships: '20'
            },
            reviews: [
              {
                name: 'Ritika Sen',
                avatar: 'https://randomuser.me/api/portraits/women/46.jpg',
                date: '3 weeks ago',
                rating: 4.7,
                content: 'Practical, immersive, and career-changing!'
              }
            ]
          },
          {
            id: 12,
            name: 'Worksy',
            description: 'Remote team productivity analytics.',
            category: 'HRTech',
            image: 'https://images.unsplash.com/photo-1584697964154-98472d2a0633?crop&w=500&q=80',
            rating: 4.4,
            reviews: 28,
            location: 'Noida, India',
            founded: '2020',
            teamSize: '18-25',
            fundingStage: 'Seed',
            detailedDescription: 'Analyzes time usage, focus, collaboration and productivity trends to help remote teams thrive.',
            stats: {
              customers: '800+',
              partnerships: '6'
            },
            reviews: [
              {
                name: 'Mehul Vora',
                avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
                date: '2 days ago',
                rating: 4.5,
                content: 'Helped our remote team improve accountability without micromanaging.'
              }
            ]
          },
          {
            id: 13,
            name: 'UrbanCanvas',
            description: 'AR/VR platform for immersive real estate walkthroughs.',
            category: 'PropTech',
            image: 'https://images.unsplash.com/photo-1600585153082-cb5538a9b7dd?crop&w=500&q=80',
            rating: 4.9,
            reviews: 19,
            location: 'Gurgaon, India',
            founded: '2021',
            teamSize: '15-20',
            fundingStage: 'Series A',
            detailedDescription: 'Enables developers and buyers to view, customize, and experience properties in 3D and VR.',
            stats: {
              customers: '400+',
              partnerships: '9'
            },
            reviews: [
              {
                name: 'Pooja Khanna',
                avatar: 'https://randomuser.me/api/portraits/women/60.jpg',
                date: '2 weeks ago',
                rating: 5,
                content: 'Viewing flats in VR saved us so much time—super realistic too!'
              }
            ]
          },
          {
            id: 14,
            name: 'SwiftShelf',
            description: 'Hyperlocal instant delivery from local retailers.',
            category: 'Logistics',
            image: 'https://images.unsplash.com/photo-1618221199440-24e35bca15d2?crop&w=500&q=80',
            rating: 4.3,
            reviews: 39,
            location: 'Jaipur, India',
            founded: '2023',
            teamSize: '30-40',
            fundingStage: 'Angel',
            detailedDescription: 'Bridges small retailers with local customers using real-time inventory and route optimization.',
            stats: {
              customers: '2700+',
              partnerships: '14'
            },
            reviews: [
              {
                name: 'Anuj Kapoor',
                avatar: 'https://randomuser.me/api/portraits/men/18.jpg',
                date: '1 week ago',
                rating: 4.4,
                content: 'Groceries at my door in 15 minutes. Local stores win!'
              }
            ]
          }
        
    ];

    // Display startups in grid
    const startupGrid = document.getElementById('startupGrid');
    const browseGrid = document.getElementById('browseStartupGrid');
    
    function displayStartups(gridElement, startupsToShow) {
        if (!gridElement) return;
        
        gridElement.innerHTML = '';
        
        startupsToShow.forEach(startup => {
            const startupCard = document.createElement('div');
            startupCard.className = 'startup-card glass';
            startupCard.innerHTML = `
                <div class="startup-img">
                    <img src="${startup.image}" alt="${startup.name}">
                    <div class="card-glow"></div>
                </div>
                <div class="startup-info">
                    <h3>${startup.name}</h3>
                    <p>${startup.description}</p>
                    <div class="startup-meta">
                        <span class="startup-category">${startup.category}</span>
                        <div class="rating">
                            ${generateStarRating(startup.rating)}
                            <span>(${startup.reviews})</span>
                        </div>
                    </div>
                </div>
                <div class="card-hover-effect"></div>
            `;
            
            startupCard.addEventListener('click', (e) => {
                // Create ripple effect
                const ripple = document.createElement('span');
                ripple.className = 'card-ripple';
                ripple.style.left = `${e.clientX - e.target.getBoundingClientRect().left}px`;
                ripple.style.top = `${e.clientY - e.target.getBoundingClientRect().top}px`;
                startupCard.appendChild(ripple);
                
                // Remove ripple after animation
                setTimeout(() => {
                    ripple.remove();
                }, 600);
                
                openStartupModal(startup);
            });
            
            gridElement.appendChild(startupCard);
        });
    }
    
    // Generate star rating HTML
    function generateStarRating(rating) {
        let stars = '';
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        
        for (let i = 0; i < fullStars; i++) {
            stars += '<i class="fas fa-star"></i>';
        }
        
        if (hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        }
        
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        for (let i = 0; i < emptyStars; i++) {
            stars += '<i class="far fa-star"></i>';
        }
        
        return stars;
    }
    
    // Modal functionality
    const modal = document.getElementById('startupModal');
    const modalBody = document.getElementById('modalBody');
    const closeModal = document.querySelector('.close-modal');
    
    function openStartupModal(startup) {
        modalBody.innerHTML = `
            <div class="modal-header">
                <div class="modal-logo-container">
                    <img src="${startup.image}" alt="${startup.name}" class="modal-logo">
                    <div class="modal-logo-glow"></div>
                </div>
                <div>
                    <h2 class="modal-title">${startup.name}</h2>
                    <p class="modal-subtitle">${startup.description}</p>
                    <div class="modal-meta">
                        <span class="modal-category">${startup.category}</span>
                        <span class="modal-funding">${startup.fundingStage} Stage</span>
                    </div>
                    <div class="modal-rating">
                        ${generateStarRating(startup.rating)}
                        <span>${startup.rating} (${startup.reviews} reviews)</span>
                    </div>
                </div>
            </div>
            
            <div class="modal-sections">
                <div class="modal-section glass">
                    <h3><i class="fas fa-question-circle"></i> The Problem</h3>
                    <p>${startup.detailedDescription}</p>
                </div>
                
                <div class="modal-section glass">
                    <h3><i class="fas fa-lightbulb"></i> Our Solution</h3>
                    <p>${startup.detailedDescription}</p>
                </div>
                
                <div class="modal-section glass">
                    <h3><i class="fas fa-chart-line"></i> Traction</h3>
                    <div class="stats-grid">
                        ${Object.entries(startup.stats).map(([key, value]) => `
                            <div class="stat-item">
                                <div class="stat-value">${value}</div>
                                <div class="stat-label">${key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="modal-section glass">
                    <h3><i class="fas fa-users"></i> Team</h3>
                    <p>Team size: ${startup.teamSize}</p>
                    <p>Founded: ${startup.founded}</p>
                    <p>Location: ${startup.location}</p>
                </div>
            </div>
            
            <div class="modal-reviews">
                <h3><i class="fas fa-comments"></i> Reviews</h3>
                <div class="reviews-container">
                    ${startup.reviews.map(review => `
                        <div class="review-card glass">
                            <div class="review-header">
                                <div class="reviewer-avatar">
                                    <img src="${review.avatar}" alt="${review.name}">
                                </div>
                                <div class="reviewer-info">
                                    <div class="reviewer-name">${review.name}</div>
                                    <div class="review-date">${review.date}</div>
                                </div>
                                <div class="review-rating">
                                    ${generateStarRating(review.rating)}
                                </div>
                            </div>
                            <div class="review-content">
                                ${review.content}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="modal-actions">
                <a href="#" class="btn btn-primary glow">
                    <i class="fas fa-envelope"></i> Contact Founder
                </a>
                <a href="#" class="btn btn-secondary">
                    <i class="fas fa-globe"></i> Visit Website
                </a>
            </div>
        `;
        
        // Show modal with 3D effect
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Add entrance animation
        setTimeout(() => {
            modal.classList.add('active');
        }, 10);
        
        // Add 3D tilt effect
        const modalContent = document.querySelector('.modal-content');
        modalContent.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
        
        modalContent.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            modalContent.style.transform = `perspective(1000px) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });
        
        modalContent.addEventListener('mouseleave', () => {
            modalContent.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
            modalContent.style.transition = 'all 0.5s ease';
            setTimeout(() => {
                modalContent.style.transition = 'none';
            }, 500);
        });
    }
    
    // Close modal
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            modal.classList.remove('active');
            setTimeout(() => {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }, 300);
        });
    }
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.remove('active');
            setTimeout(() => {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }, 300);
        }
    });
    
    // Display top 3 startups on homepage
    if (startupGrid && window.location.pathname.includes('index.html')) {
        displayStartups(startupGrid, startups.slice(0, 3));
    }
    
    // Display all startups on browse page
    if (browseGrid && window.location.pathname.includes('browse.html')) {
        displayStartups(browseGrid, startups);
    }
    
    // Browse Startups button
    const browseBtn = document.getElementById('browseStartupsBtn');
    if (browseBtn) {
        browseBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'browse.html';
        });
    }
    
    // Initialize Typed.js for hero section if on homepage
    if (window.location.pathname.includes('index.html') && document.querySelector('.typed-text')) {
        new Typed('.typed-text', {
            strings: ["Founders Meet Investors", "Ideas Become Reality", "Startups Find Funding"],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true
        });
    }
    
    // Initialize particles.js if on homepage
    if (window.location.pathname.includes('index.html') && document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#ffffff" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.2, width: 1 },
                move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out" }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "repulse" },
                    onclick: { enable: true, mode: "push" }
                }
            }
        });
    }
});