// Cafe data with stock photos
const cafes = [
    {
        id: 1,
        name: "Artisan Brew House",
        tagline: "Handcrafted coffee in a cozy atmosphere",
        image: "https://pixabay.com/get/g48275a70e67d9145bb7655b4649eb520cfe792a6e380bff346b5b0ed712a0349f3f5ae3d592622c4bfb0d172efff9448535d7cf229a19f9fcbaa5bbae6f03947_1280.jpg",
        badge: "☕ Cozy",
        category: "cozy"
    },
    {
        id: 2,
        name: "The Morning Grind",
        tagline: "Start your day with our signature blends",
        image: "https://pixabay.com/get/g9eb33088919015ee78d59aba209e2e8bacde2400f58674fd08e74159064bf51b1c433756adf51d2516ddc359923cc5ff6fb5920f98cfbe1a850efc00115e4ab9_1280.jpg",
        badge: "✨ Popular",
        category: "popular"
    },
    {
        id: 3,
        name: "Roastery & Co",
        tagline: "Fresh roasted beans, endless possibilities",
        image: "https://pixabay.com/get/g333d81474b20f9b91809a9894285ef5ed6621e4cd295e6fdd3252e66be05dc0bb850684f7cce89abaa6ed53d719bc5ed554db344b2032a440f79a25204fc3d10_1280.jpg",
        badge: "🌟 Trendy",
        category: "trendy"
    },
    {
        id: 4,
        name: "Quiet Corner Cafe",
        tagline: "A peaceful retreat for coffee lovers",
        image: "https://pixabay.com/get/g9966395253c7d50b03f476b89ea4feab010af9d617f0c81d20b6fe90d21f7c681ecf82e2318b1cd3757b4d58c2923a3538adbb485711aaeaf1504f2743372f51_1280.jpg",
        badge: "🍃 Quiet",
        category: "quiet"
    },
    {
        id: 5,
        name: "Urban Coffee Lab",
        tagline: "Experimental coffee in a modern setting",
        image: "https://pixabay.com/get/gffa1e55afbd7c74f1e792adb9306a9696b035f2031b59c5767a77cf3d9afdf7aafb4a2e73b6021017a8f8084613cfb482256e6ef3f835fa9cd8238910faf1ed3_1280.jpg",
        badge: "🌟 Trendy",
        category: "trendy"
    },
    {
        id: 6,
        name: "Heritage Coffee House",
        tagline: "Traditional brewing methods, timeless taste",
        image: "https://pixabay.com/get/g9938ba357633047bea506783457e16724c5b593402a95c74716ae71b3ff26d8603260226d247fbe337245e89a4d9d52a3123650aa6b200bf1d2c4fe166978fec_1280.jpg",
        badge: "☕ Cozy",
        category: "cozy"
    },
    {
        id: 7,
        name: "Bean There Cafe",
        tagline: "Where every cup tells a story",
        image: "https://pixabay.com/get/ge6c8fd00cb78a4d04bddfda6f4384b205df55da3ff3823c4070603db27adca4c781100c2eb1e233fcd7786b29f5147f7c5642a4b99262faaf811da70cb9129a6_1280.jpg",
        badge: "✨ Popular",
        category: "popular"
    },
    {
        id: 8,
        name: "The Study Spot",
        tagline: "Perfect wifi, perfect coffee, perfect focus",
        image: "https://pixabay.com/get/g919240cafe4b6184a8744fe9460357d0e6b5faf1da3fb63b030f051dfc24584c057df868280787d3ed073a14b65a99009b608516bb23c4228d6cabc710f32ca6_1280.jpg",
        badge: "🍃 Quiet",
        category: "quiet"
    },
    {
        id: 9,
        name: "Cozy Corner Bistro",
        tagline: "Intimate seating with premium coffee",
        image: "https://pixabay.com/get/ge186672133ab93b3d45094d638b45bd9078921aee75550515f64cb1fe20a6c166fe87c61738ae0a7f2fb197227660d9f054f4fe349e45199809d5e1cec26ed3d_1280.jpg",
        badge: "☕ Cozy",
        category: "cozy"
    },
    {
        id: 10,
        name: "Central Perk Cafe",
        tagline: "The heart of the neighborhood",
        image: "https://pixabay.com/get/ge90ba3edd0f09930b3e62d3962912b7f4b236c18b78c2c7578e784e90a2cfc4101a9551a24129758f16072dc87de87ca59945c4ec6a47f731e9ef9b08507d5bb_1280.jpg",
        badge: "✨ Popular",
        category: "popular"
    },
    {
        id: 11,
        name: "Minimalist Coffee Bar",
        tagline: "Less is more, especially with great coffee",
        image: "https://pixabay.com/get/gb115bdc391330fa4828bf81c8dc8ae34953a709999534865f6794ccf5a0eef4eabf255e69af4cab157d58e11f0c84227933fdb4aaa6bcd5531c5f2f4fa9e07b9_1280.jpg",
        badge: "🌟 Trendy",
        category: "trendy"
    },
    {
        id: 12,
        name: "Library Cafe",
        tagline: "Books, coffee, and quiet contemplation",
        image: "https://pixabay.com/get/g56b8f10f1eafe59b8e5b519a52e76c9f5a0a721b09188cfa03c6b6409bfa2bc42d42ef35e1444117538d97225396f965b3ab2dcbc3e49c8ef1b05c02ae12485c_1280.jpg",
        badge: "🍃 Quiet",
        category: "quiet"
    },
    {
        id: 13,
        name: "Rooftop Coffee Garden",
        tagline: "Elevated coffee experience with city views",
        image: "https://pixabay.com/get/g559ad9d66f8d314a52eb440630cd83bc347c35ed3856783869a48148079e4990ef5bfe0285dac4fc6242be62cfd946a15df0b8b5dc4394d4b9abbbbf618ba454_1280.jpg",
        badge: "🌟 Trendy",
        category: "trendy"
    },
    {
        id: 14,
        name: "Vintage Brew Station",
        tagline: "Classic ambiance, modern coffee techniques",
        image: "https://pixabay.com/get/g009590fb788ae577bece953dc4e56bb6f2c0cb7dfa4899eeb6fbac691693c46305e21d1eeaeb45b3a794ee7a70d57d0d98b57c8778393e49f52cdc32bf6889ea_1280.jpg",
        badge: "☕ Cozy",
        category: "cozy"
    }
];

// DOM elements
const searchInput = document.getElementById('searchInput');
const cafesGrid = document.getElementById('cafesGrid');
const filterTags = document.querySelectorAll('.filter-tag');

// Current filter state
let currentFilter = 'all';
let currentSearch = '';

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    renderCafes(cafes);
    setupEventListeners();
    addLoadingAnimation();
});

// Set up event listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', handleSearch);
    searchInput.addEventListener('focus', handleSearchFocus);
    searchInput.addEventListener('blur', handleSearchBlur);
    
    // Filter functionality
    filterTags.forEach(tag => {
        tag.addEventListener('click', handleFilterClick);
    });
    
    // Search button click
    const searchBtn = document.querySelector('.search-btn');
    searchBtn.addEventListener('click', handleSearchSubmit);
    
    // Enter key for search
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSearchSubmit();
        }
    });
}

// Handle search input
function handleSearch(e) {
    currentSearch = e.target.value.toLowerCase();
    filterAndRenderCafes();
}

// Handle search focus animation
function handleSearchFocus(e) {
    const searchWrapper = e.target.closest('.search-wrapper');
    searchWrapper.style.transform = 'translateY(-4px) scale(1.02)';
    searchWrapper.style.boxShadow = '0 16px 48px rgba(31, 38, 135, 0.25)';
}

// Handle search blur animation
function handleSearchBlur(e) {
    const searchWrapper = e.target.closest('.search-wrapper');
    searchWrapper.style.transform = 'translateY(-2px)';
    searchWrapper.style.boxShadow = '0 12px 40px rgba(31, 38, 135, 0.2)';
}

// Handle search submit
function handleSearchSubmit() {
    // Add a subtle animation to indicate search
    const searchBtn = document.querySelector('.search-btn');
    searchBtn.style.transform = 'translateY(-50%) scale(0.95)';
    setTimeout(() => {
        searchBtn.style.transform = 'translateY(-50%) scale(1.05)';
    }, 100);
    
    // Focus on results
    if (cafesGrid.children.length > 0) {
        cafesGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Handle filter click
function handleFilterClick(e) {
    // Remove active class from all tags
    filterTags.forEach(tag => tag.classList.remove('active'));
    
    // Add active class to clicked tag
    e.target.classList.add('active');
    
    // Update current filter
    currentFilter = e.target.dataset.filter;
    
    // Filter and render cafes
    filterAndRenderCafes();
}

// Filter and render cafes based on current search and filter
function filterAndRenderCafes() {
    let filteredCafes = cafes;
    
    // Apply category filter
    if (currentFilter !== 'all') {
        filteredCafes = filteredCafes.filter(cafe => cafe.category === currentFilter);
    }
    
    // Apply search filter
    if (currentSearch) {
        filteredCafes = filteredCafes.filter(cafe => 
            cafe.name.toLowerCase().includes(currentSearch) ||
            cafe.tagline.toLowerCase().includes(currentSearch) ||
            cafe.badge.toLowerCase().includes(currentSearch)
        );
    }
    
    renderCafes(filteredCafes);
}

// Render cafes to the grid
function renderCafes(cafesToRender) {
    // Clear existing content
    cafesGrid.innerHTML = '';
    
    if (cafesToRender.length === 0) {
        renderEmptyState();
        return;
    }
    
    // Create and append cafe cards
    cafesToRender.forEach((cafe, index) => {
        const cafeCard = createCafeCard(cafe, index);
        cafesGrid.appendChild(cafeCard);
    });
}

// Create a cafe card element
function createCafeCard(cafe, index) {
    const card = document.createElement('div');
    card.className = 'cafe-card glass-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
        <img src="${cafe.image}" alt="${cafe.name}" class="cafe-image" loading="lazy">
        <div class="cafe-content">
            <div class="cafe-header">
                <div>
                    <h3 class="cafe-name">${cafe.name}</h3>
                    <p class="cafe-tagline">${cafe.tagline}</p>
                </div>
                <span class="cafe-badge">${cafe.badge}</span>
            </div>
        </div>
    `;
    
    // Add click event for card interaction
    card.addEventListener('click', () => handleCafeClick(cafe));
    
    // Add keyboard accessibility
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Learn more about ${cafe.name}`);
    
    card.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleCafeClick(cafe);
        }
    });
    
    return card;
}

// Handle cafe card click
function handleCafeClick(cafe) {
    // Add a subtle click animation
    const card = event.currentTarget;
    card.style.transform = 'translateY(-8px) scale(0.98)';
    
    setTimeout(() => {
        card.style.transform = 'translateY(-8px) scale(1.02)';
    }, 150);
    
    // You could add functionality here to show cafe details,
    // open a modal, navigate to a detail page, etc.
    console.log(`Clicked on ${cafe.name}`);
}

// Render empty state when no cafes match filters
function renderEmptyState() {
    const emptyState = document.createElement('div');
    emptyState.className = 'empty-state';
    emptyState.style.cssText = `
        grid-column: 1 / -1;
        text-align: center;
        padding: 4rem 2rem;
        color: #8b7355;
    `;
    
    emptyState.innerHTML = `
        <div style="font-size: 4rem; margin-bottom: 1rem; opacity: 0.5;">☕</div>
        <h3 style="font-size: 1.5rem; margin-bottom: 1rem; color: #5d4e37;">No cafes found</h3>
        <p style="font-size: 1.1rem; line-height: 1.6;">
            Try adjusting your search terms or filters to discover more amazing coffee spots.
        </p>
    `;
    
    cafesGrid.appendChild(emptyState);
}

// Add loading animation on initial load
function addLoadingAnimation() {
    // Add staggered animation delays to existing cards
    const cards = document.querySelectorAll('.cafe-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
}

// Smooth scrolling for better UX
function smoothScrollTo(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Add some interactive enhancements
document.addEventListener('DOMContentLoaded', function() {
    // Add parallax effect to floating elements
    const floatingElements = document.querySelectorAll('.float-element');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        floatingElements.forEach((element, index) => {
            const speed = (index + 1) * 0.1;
            element.style.transform = `translateY(${rate * speed}px) rotate(${scrolled * 0.02}deg)`;
        });
    });
    
    // Add search input animation enhancements
    const searchInput = document.getElementById('searchInput');
    let searchTimeout;
    
    searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        this.style.background = 'rgba(255, 255, 255, 0.15)';
        
        searchTimeout = setTimeout(() => {
            this.style.background = 'transparent';
        }, 300);
    });
    
    // Add filter tag hover sound effect (visual feedback)
    filterTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        tag.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(0) scale(1)';
            }
        });
    });
});

// Performance optimization: Intersection Observer for card animations
const observeCards = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });
    
    document.querySelectorAll('.cafe-card').forEach(card => {
        observer.observe(card);
    });
};

// Call observer after DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(observeCards, 100);
});
