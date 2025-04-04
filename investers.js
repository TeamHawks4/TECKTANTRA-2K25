// Investor Data
const investors = [
    {
        id: 1,
        name: "Rajesh Sharma",
        title: "Managing Partner",
        firm: "VC Funds India",
        domain: "fintech",
        location: "Mumbai, India",
        bio: "Seasoned investor with 15+ years in FinTech investments. Specializes in early-stage payment solutions and digital banking platforms.",
        avatar: "https://randomuser.me/api/portraits/men/10.jpg",
        email: "rajesh.sharma@vcfunds.com",
        linkedin: "https://linkedin.com/in/rajeshsharma",
        website: "https://vcfundsindia.com",
        investmentFocus: ["Payment Solutions", "Digital Banking", "WealthTech"],
        checkSize: "$100K - $1M",
        portfolio: ["PayTM", "Razorpay", "CRED"],
        stats: {
            investments: "45",
            exits: "12",
            avgReturn: "5.8x"
        }
    },
    {
        id: 2,
        name: "Anjali Mehta",
        title: "Investment Director",
        firm: "EduGrowth Ventures",
        domain: "edtech",
        location: "Bangalore, India",
        bio: "Passionate about transforming education through technology. Focuses on adaptive learning platforms and vocational upskilling solutions.",
        avatar: "https://randomuser.me/api/portraits/women/15.jpg",
        email: "anjali.mehta@edugrowth.com",
        linkedin: "https://linkedin.com/in/anjalimehta",
        website: "https://edugrowth.vc",
        investmentFocus: ["K-12 EdTech", "Upskilling", "Language Learning"],
        checkSize: "$50K - $500K",
        portfolio: ["Byju's", "Unacademy", "UpGrad"],
        stats: {
            investments: "32",
            exits: "8",
            avgReturn: "4.2x"
        }
    },
    {
        id: 3,
        name: "Vikram Iyer",
        title: "Founding Partner",
        firm: "Crypto Capital",
        domain: "blockchain",
        location: "Delhi, India",
        bio: "Blockchain evangelist investing in decentralized infrastructure and Web3 applications. Particularly interested in DeFi and NFT innovations.",
        avatar: "https://randomuser.me/api/portraits/men/20.jpg",
        email: "vikram.iyer@cryptocapital.com",
        linkedin: "https://linkedin.com/in/vikramiyer",
        website: "https://cryptocapital.vc",
        investmentFocus: ["DeFi", "NFT", "Blockchain Infrastructure"],
        checkSize: "$250K - $2M",
        portfolio: ["Polygon", "CoinSwitch", "WazirX"],
        stats: {
            investments: "28",
            exits: "5",
            avgReturn: "8.3x"
        }
    },
    {
        id: 4,
        name: "Neha Kapoor",
        title: "Principal Investor",
        firm: "MedTech Ventures",
        domain: "healthtech",
        location: "Hyderabad, India",
        bio: "Medical doctor turned investor with deep expertise in digital health solutions and medical devices for emerging markets.",
        avatar: "https://randomuser.me/api/portraits/women/25.jpg",
        email: "neha.kapoor@medtechvc.com",
        linkedin: "https://linkedin.com/in/nehakapoor",
        website: "https://medtechventures.com",
        investmentFocus: ["Telemedicine", "Diagnostics", "Mental Health"],
        checkSize: "$100K - $750K",
        portfolio: ["Practo", "1mg", "MFine"],
        stats: {
            investments: "39",
            exits: "11",
            avgReturn: "6.1x"
        }
    },
    {
        id: 5,
        name: "Amit Patil",
        title: "Partner",
        firm: "Retail Growth Fund",
        domain: "ecommerce",
        location: "Gurgaon, India",
        bio: "Specializes in D2C brands and e-commerce enablement platforms. Focused on brands solving unique problems for Indian consumers.",
        avatar: "https://randomuser.me/api/portraits/men/30.jpg",
        email: "amit.patil@retailgrowth.com",
        linkedin: "https://linkedin.com/in/amitpatil",
        website: "https://retailgrowth.fund",
        investmentFocus: ["D2C Brands", "E-commerce SaaS", "Social Commerce"],
        checkSize: "$200K - $1.5M",
        portfolio: ["Mamaearth", "Boat", "Lenskart"],
        stats: {
            investments: "51",
            exits: "15",
            avgReturn: "7.5x"
        }
    },
    {
        id: 6,
        name: "Pooja Verma",
        title: "CTO & Investor",
        firm: "AI First Capital",
        domain: "ai",
        location: "Bangalore, India",
        bio: "Former AI researcher now investing in applied machine learning solutions across industries. Particularly interested in AI for SMEs.",
        avatar: "https://randomuser.me/api/portraits/women/35.jpg",
        email: "pooja.verma@aifirst.com",
        linkedin: "https://linkedin.com/in/poojaverma",
        website: "https://aifirst.capital",
        investmentFocus: ["Computer Vision", "NLP", "Predictive Analytics"],
        checkSize: "$150K - $1M",
        portfolio: ["Mad Street Den", "Uniphore", "Observe.AI"],
        stats: {
            investments: "27",
            exits: "6",
            avgReturn: "9.2x"
        }
    }
];

// DOM Elements
const investorGrid = document.getElementById('investorGrid');
const investorModal = document.getElementById('investorModal');
const modalBody = document.getElementById('modalBody');
const filterButtons = document.querySelectorAll('.filter-tabs button');
const closeModal = document.querySelector('.close-modal');

// Display Investors
function displayInvestors(investorsToShow) {
    investorGrid.innerHTML = '';
    
    investorsToShow.forEach(investor => {
        const investorCard = document.createElement('div');
        investorCard.className = 'investor-card glass';
        investorCard.innerHTML = `
            <img src="${investor.avatar}" alt="${investor.name}">
            <div class="investor-info">
                <h3>${investor.name}</h3>
                <span class="investor-domain">${investor.domain.toUpperCase()}</span>
                <p>${investor.title} at ${investor.firm}</p>
                <div class="contact-links">
                    <a href="${investor.linkedin}" target="_blank"><i class="fab fa-linkedin"></i> LinkedIn</a>
                    <a href="mailto:${investor.email}"><i class="fas fa-envelope"></i> Email</a>
                </div>
            </div>
        `;
        
        // Add hover effect
        investorCard.addEventListener('mouseenter', () => {
            investorCard.style.transform = 'translateY(-10px)';
            investorCard.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
        });
        
        investorCard.addEventListener('mouseleave', () => {
            investorCard.style.transform = 'translateY(0)';
            investorCard.style.boxShadow = 'none';
        });
        
        // Add click event for modal
        investorCard.addEventListener('click', () => {
            openInvestorModal(investor);
        });
        
        investorGrid.appendChild(investorCard);
    });
}

// Open Investor Modal with 3D effects
function openInvestorModal(investor) {
    modalBody.innerHTML = `
        <div class="modal-header">
            <img src="${investor.avatar}" alt="${investor.name}" class="modal-img">
            <div class="modal-header-content">
                <h2>${investor.name}</h2>
                <p class="modal-subtitle">${investor.title} at ${investor.firm}</p>
                <p class="location"><i class="fas fa-map-marker-alt"></i> ${investor.location}</p>
                <div class="modal-contact">
                    <a href="${investor.linkedin}" target="_blank" class="btn btn-primary"><i class="fab fa-linkedin"></i> LinkedIn</a>
                    <a href="mailto:${investor.email}" class="btn btn-secondary"><i class="fas fa-envelope"></i> Email</a>
                </div>
            </div>
        </div>
        
        <div class="modal-bio">
            <h3><i class="fas fa-user"></i> About</h3>
            <p>${investor.bio}</p>
        </div>
        
        <div class="modal-stats">
            <div class="stat-item">
                <div class="stat-value">${investor.stats.investments}</div>
                <div class="stat-label">Investments</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">${investor.stats.exits}</div>
                <div class="stat-label">Exits</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">${investor.stats.avgReturn}</div>
                <div class="stat-label">Avg Return</div>
            </div>
        </div>
        
        <div class="modal-details">
            <div class="detail-section">
                <h3><i class="fas fa-bullseye"></i> Investment Focus</h3>
                <ul>
                    ${investor.investmentFocus.map(focus => `<li>${focus}</li>`).join('')}
                </ul>
            </div>
            
            <div class="detail-section">
                <h3><i class="fas fa-wallet"></i> Check Size</h3>
                <p>${investor.checkSize}</p>
            </div>
            
            <div class="detail-section">
                <h3><i class="fas fa-briefcase"></i> Portfolio Highlights</h3>
                <div class="portfolio-grid">
                    ${investor.portfolio.map(company => `<span class="portfolio-item">${company}</span>`).join('')}
                </div>
            </div>
        </div>
        
        <div class="modal-actions">
            <a href="${investor.website}" target="_blank" class="btn btn-primary">
                <i class="fas fa-globe"></i> Visit Firm Website
            </a>
        </div>
    `;
    
    // Show modal with animation
    investorModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // 3D tilt effect
    const modalContainer = document.querySelector('.modal-container');
    const modalContent = document.querySelector('.modal-content');
    
    // Reset transform
    modalContent.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
    
    // Add mousemove event for 3D effect
    modalContainer.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        modalContent.style.transform = `perspective(1000px) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
    
    // Reset when mouse leaves
    modalContainer.addEventListener('mouseleave', () => {
        modalContent.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
        modalContent.style.transition = 'transform 0.5s ease';
        setTimeout(() => {
            modalContent.style.transition = 'none';
        }, 500);
    });
    
    // Add magical entrance animation
    modalContent.style.animation = 'modalEntrance 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards';
    
    // Create floating particles around modal
    createModalParticles();
}

// Close Modal
function closeInvestorModal() {
    const modalContent = document.querySelector('.modal-content');
    modalContent.style.animation = 'modalExit 0.5s ease forwards';
    
    setTimeout(() => {
        investorModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        
        // Remove particles
        const particles = document.querySelectorAll('.modal-particle');
        particles.forEach(particle => particle.remove());
    }, 500);
}

// Create floating particles around modal
function createModalParticles() {
    const colors = ['#6c5ce7', '#00cec9', '#a29bfe', '#55efc4', '#ffeaa7'];
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'modal-particle';
        
        // Random properties
        const size = Math.random() * 10 + 5;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 10 + 10;
        
        // Apply styles
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.background = color;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        
        // Add to modal
        investorModal.appendChild(particle);
    }
}

// Filter Investors
function filterInvestors(domain) {
    if (domain === 'all') {
        return investors;
    }
    return investors.filter(investor => investor.domain === domain);
}

// Event Listeners
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        // Filter investors
        const domain = button.dataset.filter;
        const filteredInvestors = filterInvestors(domain);
        
        // Add magical transition effect
        investorGrid.style.opacity = '0.5';
        investorGrid.style.transform = 'translateY(20px)';
        investorGrid.style.transition = 'all 0.3s ease';
        
        setTimeout(() => {
            displayInvestors(filteredInvestors);
            investorGrid.style.opacity = '1';
            investorGrid.style.transform = 'translateY(0)';
            
            // Add confetti effect when filtering
            if (domain !== 'all') {
                createFilterConfetti(button);
            }
        }, 300);
    });
});

// Create confetti effect when filtering
function createFilterConfetti(button) {
    const rect = button.getBoundingClientRect();
    const colors = ['#6c5ce7', '#00cec9', '#a29bfe', '#55efc4', '#ffeaa7'];
    
    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        
        // Random properties
        const size = Math.random() * 10 + 5;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const angle = Math.random() * 360;
        const velocity = Math.random() * 10 + 5;
        const delay = Math.random() * 0.5;
        
        // Position at button
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        confetti.style.background = color;
        confetti.style.left = `${rect.left + rect.width/2}px`;
        confetti.style.top = `${rect.top + rect.height/2}px`;
        confetti.style.transform = `rotate(${angle}deg)`;
        confetti.style.setProperty('--velocity', velocity);
        confetti.style.animationDelay = `${delay}s`;
        
        // Add to body
        document.body.appendChild(confetti);
        
        // Remove after animation
        setTimeout(() => {
            confetti.remove();
        }, 2000);
    }
}

// Close modal events
closeModal.addEventListener('click', closeInvestorModal);
window.addEventListener('click', (e) => {
    if (e.target === investorModal) {
        closeInvestorModal();
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    displayInvestors(investors);
    
    // Add animation to investor cards on load
    setTimeout(() => {
        const cards = document.querySelectorAll('.investor-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px)';
            card.style.animation = `cardEntrance 0.5s ease ${index * 0.1}s forwards`;
        });
    }, 500);
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (investorModal.classList.contains('active') ){
        if (e.key === 'Escape') {
            closeInvestorModal();
        }
    }
});