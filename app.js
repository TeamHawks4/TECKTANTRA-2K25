document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger?.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks?.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger?.classList.remove('active');
            navLinks?.classList.remove('active');
        });
    });
    
    // Sample startup data
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
                },
                {
                    name: 'Michael Chen',
                    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
                    date: '1 month ago',
                    rating: 4,
                    content: 'Great product overall. The packaging is sturdy and looks professional. Would love to see more size options in the future.'
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
            detailedDescription: 'Find the Reovation cost for your house based on your requirements.',
            stats: {
                customers: '100+',
                co2Reduced: '12 tons',
                partnerships: '3'
            },
            reviews: [
                {
                    name: 'Classey class',
                    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
                    date: '9 weeks ago',
                    rating: 4.6,
                    content: 'Made the work too easy and feasible.'
                },
                {
                    name: 'Bob musky',
                    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
                    date: '1 month ago',
                    rating: 4,
                    content: 'Great product overall. The service is professional. Would love to see more size options in the future.'
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
                co2Reduced: 'N/A',
                partnerships: '15'
            },
            reviews: [
                {
                    name: 'Anagha Mathew',
                    avatar: 'https://randomuser.me/api/portraits/women/25.jpg',
                    date: '2 weeks ago',
                    rating: 5,
                    content: 'My kids love this platform! It has improved their grades significantly.'
                },
                {
                    name: 'Aditya Roy',
                    avatar: 'https://randomuser.me/api/portraits/men/35.jpg',
                    date: '3 months ago',
                    rating: 4.7,
                    content: 'Great AI integration! The only issue is occasional slow performance.'
                }
            ]
        },
        {
            id: 4,
            name: 'CryptoVault',
            description: 'Secure your digital assets with multi-layer encryption.',
            category: 'Blockchain',
            image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?crop&w=500&q=80',
            rating: 4.5,
            reviews: 50,
            location: 'Berlin, Germany',
            founded: '2023',
            teamSize: '10-15',
            fundingStage: 'Seed',
            detailedDescription: 'An ultra-secure digital wallet for cryptocurrencies with multi-layer encryption and 2FA.',
            stats: {
                customers: '5000+',
                co2Reduced: 'N/A',
                partnerships: '8'
            },
            reviews: [
                {
                    name: 'Mukesh Dod',
                    avatar: 'https://randomuser.me/api/portraits/men/27.jpg',
                    date: '1 month ago',
                    rating: 4.5,
                    content: 'Super secure and reliable. Would recommend for crypto holders.'
                },
                {
                    name: 'Paras Shingote',
                    avatar: 'https://randomuser.me/api/portraits/women/31.jpg',
                    date: '2 months ago',
                    rating: 4.3,
                    content: 'Easy to use but could use more fiat conversion options.'
                }
            ]
        },
        {
            id: 5,
            name: 'MediCheck AI',
            description: 'AI-powered health diagnostics in minutes.',
            category: 'Health Tech',
            image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?crop&w=500&q=80',
            rating: 4.8,
            reviews: 38,
            location: 'Toronto, Canada',
            founded: '2021',
            teamSize: '25-40',
            fundingStage: 'Series A',
            detailedDescription: 'An AI-driven platform that analyzes symptoms and medical history to provide fast preliminary diagnoses.',
            stats: {
                customers: '10,000+',
                co2Reduced: 'N/A',
                partnerships: '12'
            },
            reviews: [
                {
                    name: 'Sir ',
                    avatar: 'https://randomuser.me/api/portraits/women/38.jpg',
                    date: '4 weeks ago',
                    rating: 5,
                    content: 'As a doctor, I find this tool very helpful for early diagnosis.'
                },
                {
                    name: 'Jetha lal',
                    avatar: 'https://randomuser.me/api/portraits/men/42.jpg',
                    date: '1 month ago',
                    rating: 4.6,
                    content: 'Great tool, but sometimes misidentifies symptoms.'
                }
            ]
        },
        {
            id: 6,
            name: 'QuickCart AI',
            description: 'Smart AI-driven shopping assistant.',
            category: 'E-commerce',
            image: 'https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?crop&w=500&q=80',
            rating: 4.3,
            reviews: 45,
            location: 'Los Angeles, USA',
            founded: '2020',
            teamSize: '50+',
            fundingStage: 'Series C',
            detailedDescription: 'A shopping assistant that finds the best deals, compares prices, and suggests the most relevant products.',
            stats: {
                customers: '500,000+',
                co2Reduced: 'N/A',
                partnerships: '50'
            },
            reviews: [
                {
                    name: 'Harvey spector',
                    avatar: 'https://randomuser.me/api/portraits/women/29.jpg',
                    date: '1 week ago',
                    rating: 4.2,
                    content: 'Saves me so much time while shopping online!'
                },
                {
                    name: 'robet Downy jr',
                    avatar: 'https://randomuser.me/api/portraits/men/52.jpg',
                    date: '2 weeks ago',
                    rating: 4.5,
                    content: 'Wish it supported more local stores, but overall great!'
                }
            ]
        },

        {
            id: 7,
            name: 'RupeeWise',
            description: 'AI-powered investment and financial planning.',
            category: 'FinTech',
            image: 'https://i.pinimg.com/474x/60/f2/1f/60f21fa09c62e328d5ccaf64e7f3f841.jpg',
            rating: 4.6,
            reviews: 55,
            location: 'Mumbai, India',
            founded: '2021',
            teamSize: '20-30',
            fundingStage: 'Series A',
            detailedDescription: 'A smart financial advisor that helps individuals plan investments, track expenses, and grow wealth using AI-driven insights.',
            stats: {
                customers: '200,000+',
                partnerships: '25'
            },
            reviews: [
                {
                    name: 'Rahul Verma',
                    avatar: 'https://randomuser.me/api/portraits/men/21.jpg',
                    date: '2 weeks ago',
                    rating: 4.8,
                    content: 'Very useful for young professionals to manage savings and investments.'
                },
                {
                    name: 'Neha Shah',
                    avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
                    date: '1 month ago',
                    rating: 4.5,
                    content: 'Great insights, but the UI could be more intuitive.'
                }
            ]
        },
        {
            id: 8,
            name: 'AaharMart',
            description: 'Connecting farmers directly with urban consumers.',
            category: 'AgriTech',
            image: 'https://i.pinimg.com/474x/8c/8e/b9/8c8eb977b9a08b54c02f2f4eb842503c.jpg',
            rating: 4.7,
            reviews: 42,
            location: 'Pune, India',
            founded: '2022',
            teamSize: '15-20',
            fundingStage: 'Pre-Seed',
            detailedDescription: 'A platform that enables farmers to sell their fresh produce directly to consumers, reducing middlemen costs and ensuring fair prices.',
            stats: {
                customers: '50,000+',
                partnerships: '10'
            },
            reviews: [
                {
                    name: 'Ankita Joshi',
                    avatar: 'https://randomuser.me/api/portraits/women/30.jpg',
                    date: '3 weeks ago',
                    rating: 4.9,
                    content: 'Fresh vegetables delivered at fair prices. Great initiative for farmers!'
                },
                {
                    name: 'Vikas Sharma',
                    avatar: 'https://randomuser.me/api/portraits/men/40.jpg',
                    date: '2 months ago',
                    rating: 4.6,
                    content: 'Efficient service but needs more variety in organic produce.'
                }
            ]
        },
        {
            id: 9,
            name: 'SkillUp India',
            description: 'Affordable upskilling for students and professionals.',
            category: 'EdTech',
            image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?crop&w=500&q=80',
            rating: 4.8,
            reviews: 60,
            location: 'Bangalore, India',
            founded: '2020',
            teamSize: '100+',
            fundingStage: 'Series B',
            detailedDescription: 'An online learning platform offering affordable courses in tech, finance, and soft skills with industry-recognized certifications.',
            stats: {
                customers: '500,000+',
                partnerships: '50'
            },
            reviews: [
                {
                    name: 'Priya Mehta',
                    avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
                    date: '1 month ago',
                    rating: 4.7,
                    content: 'Helped me get a job in data science. Excellent course content!'
                },
                {
                    name: 'Rohit Singh',
                    avatar: 'https://randomuser.me/api/portraits/men/37.jpg',
                    date: '3 weeks ago',
                    rating: 4.9,
                    content: 'Best platform for skill development at an affordable price.'
                }
            ]
        },
        {
            id: 10,
            name: 'MediSwasth',
            description: 'Affordable telemedicine for rural India.',
            category: 'Health Tech',
            image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?crop&w=500&q=80',
            rating: 4.6,
            reviews: 35,
            location: 'Hyderabad, India',
            founded: '2021',
            teamSize: '30-50',
            fundingStage: 'Series A',
            detailedDescription: 'A telemedicine platform providing remote healthcare services, especially in rural and underserved areas.',
            stats: {
                customers: '100,000+',
                partnerships: '20'
            },
            reviews: [
                {
                    name: 'Dr. Kavita Reddy',
                    avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
                    date: '1 month ago',
                    rating: 4.8,
                    content: 'Great initiative for rural healthcare. Affordable and efficient.'
                },
                {
                    name: 'Amit Kumar',
                    avatar: 'https://randomuser.me/api/portraits/men/50.jpg',
                    date: '2 weeks ago',
                    rating: 4.5,
                    content: 'Helpful service but appointment wait times can be long.'
                }
            ]
        },
        {
            id: 11,
            name: 'DesiBazaar',
            description: 'Handmade products from local artisans.',
            category: 'E-commerce',
            image: 'https://i.pinimg.com/474x/bd/dd/a6/bddda6a40958ed025ae0943ff6b80bae.jpg',
            rating: 4.7,
            reviews: 40,
            location: 'Jaipur, India',
            founded: '2022',
            teamSize: '10-20',
            fundingStage: 'Seed',
            detailedDescription: 'An online marketplace that promotes handmade, eco-friendly, and locally crafted products from artisans across India.',
            stats: {
                customers: '25,000+',
                partnerships: '15'
            },
            reviews: [
                {
                    name: 'Anjali Kapoor',
                    avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
                    date: '2 weeks ago',
                    rating: 4.9,
                    content: 'Beautiful handmade products. Love the collection!'
                },
                {
                    name: 'Arun Nair',
                    avatar: 'https://randomuser.me/api/portraits/men/36.jpg',
                    date: '1 month ago',
                    rating: 4.6,
                    content: 'Great initiative but delivery time can be improved.'
                }
            ]
        },
        {
            id: 12,
            name: 'QuickMed AI',
            description: 'AI-driven diagnostics and virtual doctor consultations.',
            category: 'Health Tech',
            image: 'https://i.pinimg.com/736x/ac/e3/f2/ace3f270ef08d214d71b2765e33a41b4.jpg',
            rating: 4.8,
            reviews: 50,
            location: 'Delhi, India',
            founded: '2023',
            teamSize: '40-60',
            fundingStage: 'Pre-Series A',
            detailedDescription: 'Uses AI for quick medical diagnoses and connects patients with virtual doctors in minutes.',
            stats: {
                customers: '150,000+',
                partnerships: '30'
            },
            reviews: [
                {
                    name: 'Sonia Gupta',
                    avatar: 'https://randomuser.me/api/portraits/women/39.jpg',
                    date: '2 weeks ago',
                    rating: 4.9,
                    content: 'Fast and accurate diagnosis. A life-saver!'
                },
                {
                    name: 'Vikram Khanna',
                    avatar: 'https://randomuser.me/api/portraits/men/47.jpg',
                    date: '1 month ago',
                    rating: 4.7,
                    content: 'Consultations are great, but app needs a smoother interface.'
                }
            ]
        },
        // ... (keep all your existing startup data)
    ];
    
    // Display startups in grid
    const startupGrid = document.getElementById('startupGrid');
    const browseGrid = document.getElementById('browseStartupGrid');
    
    function displayStartups(gridElement, startupsToShow) {
        if (!gridElement) return;
        
        gridElement.innerHTML = '';
        
        startupsToShow.forEach(startup => {
            const startupCard = document.createElement('div');
            startupCard.className = 'startup-card';
            startupCard.innerHTML = `
                <div class="startup-img">
                    <img src="${startup.image}" alt="${startup.name}">
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
            `;
            
            startupCard.addEventListener('click', () => {
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
            <div class="startup-detail-header">
                <div class="startup-detail-img">
                    <img src="${startup.image}" alt="${startup.name}">
                </div>
                <div class="startup-detail-info">
                    <h2>${startup.name}</h2>
                    <div class="startup-detail-meta">
                        <span class="startup-detail-category">${startup.category}</span>
                        <span class="startup-detail-location"><i class="fas fa-map-marker-alt"></i> ${startup.location}</span>
                    </div>
                    <div class="startup-detail-rating">
                        <span class="star-rating">${generateStarRating(startup.rating)}</span>
                        <span class="review-count">${startup.reviews} reviews</span>
                    </div>
                    <div class="startup-detail-stats">
                        <div class="stat-item">
                            <div class="stat-value">${startup.founded}</div>
                            <div class="stat-label">Founded</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">${startup.teamSize}</div>
                            <div class="stat-label">Team Size</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">${startup.fundingStage}</div>
                            <div class="stat-label">Funding Stage</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="startup-detail-description">
                <h3>About ${startup.name}</h3>
                <p>${startup.detailedDescription}</p>
            </div>
            <div class="startup-detail-stats">
                ${Object.entries(startup.stats).map(([key, value]) => `
                    <div class="stat-item">
                        <div class="stat-value">${value}</div>
                        <div class="stat-label">${key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</div>
                    </div>
                `).join('')}
            </div>
            <div class="reviews-section">
                <h3>Reviews</h3>
                ${startup.reviews.map(review => `
                    <div class="review-card">
                        <div class="review-header">
                            <div class="reviewer-info">
                                <div class="reviewer-avatar">
                                    <img src="${review.avatar}" alt="${review.name}">
                                </div>
                                <div>
                                    <div class="reviewer-name">${review.name}</div>
                                    <div class="review-date">${review.date}</div>
                                </div>
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
        `;
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    closeModal?.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Display startups on homepage
    if (startupGrid) {
        displayStartups(startupGrid, startups.slice(0, 4)); // Show only 4 on homepage
    }
    
    // Display all startups on browse page
    if (browseGrid) {
        displayStartups(browseGrid, startups);
    }
    
    // Browse Startups button
    document.getElementById('browseStartupsBtn')?.addEventListener('click', function() {
        window.location.href = 'browse.html';
    });
});









// Investor Data (same as before)
const investors = [
    // ... (keep your existing investor data)
];

// Simple display function for investors
function displayInvestors() {
    const investorGrid = document.getElementById('investorGrid');
    if (!investorGrid) return;

    investorGrid.innerHTML = '';

    investors.forEach(investor => {
        const investorCard = document.createElement('div');
        investorCard.className = 'investor-card';
        investorCard.innerHTML = `
            <div class="investor-header">
                <div class="investor-avatar">
                    <img src="${investor.avatar}" alt="${investor.name}">
                </div>
                <div>
                    <div class="investor-name">${investor.name}</div>
                    <div class="investor-title">${investor.title}</div>
                    <span class="investor-type">${investor.type.toUpperCase()}</span>
                </div>
            </div>
            <div class="investor-details">
                <p><strong>Firm:</strong> ${investor.firm}</p>
                <p><strong>Location:</strong> ${investor.location}</p>
                <p><strong>Focus:</strong> ${investor.industries.map(i => i.charAt(0).toUpperCase() + i.slice(1)).join(', ')}</p>
                <p>${investor.bio}</p>
            </div>
            <div class="investor-contact">
                <a href="mailto:${investor.email}" title="Email">
                    <i class="fas fa-envelope"></i> Email
                </a>
                <a href="${investor.linkedin}" target="_blank" title="LinkedIn">
                    <i class="fab fa-linkedin"></i> LinkedIn
                </a>
            </div>
        `;
        investorGrid.appendChild(investorCard);
    });
}

// Initialize investors page
if (window.location.pathname.includes('investors.html')) {
    displayInvestors();
    
    // Initialize mobile menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger?.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks?.classList.toggle('active');
    });
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger?.classList.remove('active');
            navLinks?.classList.remove('active');
        });
    });
}