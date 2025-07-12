const products = [
    {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        price: 79.99,
        originalPrice: 99.99,
        image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
        category: "electronics",
        rating: 4.5,
        reviews: 1234,
        description: "High-quality wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.",
        brand: "TechSound",
        inStock: true,
        primeEligible: true,
        freeShipping: true,
        sizes: [],
        colors: ["Black", "White", "Blue"],
        specifications: {
            "Battery Life": "30 hours",
            "Connectivity": "Bluetooth 5.0",
            "Weight": "250g",
            "Warranty": "2 years"
        }
    },
    {
        id: 2,
        name: "Smart Watch Series 7",
        price: 299.99,
        originalPrice: 399.99,
        image: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
        category: "electronics",
        rating: 4.8,
        reviews: 892,
        description: "Advanced smartwatch with health monitoring, GPS, and 5-day battery life. Stay connected and track your fitness goals.",
        brand: "SmartTech",
        inStock: true,
        primeEligible: true,
        freeShipping: true,
        sizes: ["38mm", "42mm", "45mm"],
        colors: ["Silver", "Gold", "Space Gray"],
        specifications: {
            "Display": "OLED Retina",
            "Battery": "5 days",
            "Water Resistance": "50m",
            "GPS": "Built-in"
        }
    },
    {
        id: 3,
        name: "Premium Cotton T-Shirt",
        price: 24.99,
        originalPrice: 34.99,
        image: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
        category: "clothing",
        rating: 4.3,
        reviews: 567,
        description: "Comfortable 100% cotton t-shirt with modern fit. Available in multiple colors and sizes. Perfect for everyday wear.",
        brand: "ComfortWear",
        inStock: true,
        primeEligible: false,
        freeShipping: true,
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        colors: ["White", "Black", "Navy", "Gray", "Red"],
        specifications: {
            "Material": "100% Cotton",
            "Fit": "Regular",
            "Care": "Machine wash",
            "Origin": "USA"
        }
    },
    {
        id: 4,
        name: "Bestselling Novel - The Adventure",
        price: 14.99,
        originalPrice: 19.99,
        image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
        category: "books",
        rating: 4.7,
        reviews: 2341,
        description: "A thrilling adventure novel that will keep you on the edge of your seat. Perfect for book lovers and gift-giving.",
        brand: "Adventure Press",
        inStock: true,
        primeEligible: true,
        freeShipping: false,
        sizes: [],
        colors: [],
        specifications: {
            "Pages": "324",
            "Publisher": "Adventure Press",
            "Language": "English",
            "ISBN": "978-1234567890"
        }
    },
    {
        id: 5,
        name: "Ergonomic Office Chair",
        price: 189.99,
        originalPrice: 249.99,
        image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
        category: "home",
        rating: 4.6,
        reviews: 789,
        description: "Comfortable ergonomic office chair with lumbar support and adjustable height. Perfect for long work sessions.",
        brand: "ErgoComfort",
        inStock: true,
        primeEligible: true,
        freeShipping: true,
        sizes: [],
        colors: ["Black", "Gray", "Brown"],
        specifications: {
            "Material": "Mesh & Fabric",
            "Weight Capacity": "300 lbs",
            "Adjustable": "Height, Arms, Lumbar",
            "Warranty": "5 years"
        }
    },
    {
        id: 6,
        name: "Yoga Mat Premium",
        price: 39.99,
        originalPrice: 59.99,
        image: "https://images.pexels.com/photos/3984363/pexels-photo-3984363.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
        category: "sports",
        rating: 4.4,
        reviews: 456,
        description: "High-quality yoga mat with excellent grip and cushioning. Perfect for yoga, pilates, and general fitness activities.",
        brand: "ZenFit",
        inStock: true,
        primeEligible: false,
        freeShipping: true,
        sizes: [],
        colors: ["Purple", "Blue", "Green", "Pink"],
        specifications: {
            "Thickness": "6mm",
            "Material": "TPE",
            "Size": "72\" x 24\"",
            "Non-slip": "Yes"
        }
    },
    {
        id: 7,
        name: "Laptop Stand Adjustable",
        price: 49.99,
        originalPrice: 69.99,
        image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
        category: "electronics",
        rating: 4.5,
        reviews: 321,
        description: "Adjustable laptop stand for better ergonomics and cooling. Compatible with most laptops and tablets.",
        brand: "TechStand",
        inStock: true,
        primeEligible: true,
        freeShipping: true,
        sizes: [],
        colors: ["Silver", "Black"],
        specifications: {
            "Material": "Aluminum",
            "Compatibility": "11-17 inch laptops",
            "Adjustable": "Height & Angle",
            "Weight": "1.2 kg"
        }
    },
    {
        id: 8,
        name: "Designer Handbag",
        price: 89.99,
        originalPrice: 129.99,
        image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
        category: "clothing",
        rating: 4.2,
        reviews: 234,
        description: "Stylish designer handbag made from premium materials. Perfect for work or casual outings.",
        brand: "LuxeBags",
        inStock: true,
        primeEligible: false,
        freeShipping: false,
        sizes: [],
        colors: ["Black", "Brown", "Tan", "Red"],
        specifications: {
            "Material": "Genuine Leather",
            "Dimensions": "12\" x 8\" x 4\"",
            "Compartments": "3",
            "Closure": "Zipper"
        }
    },
    {
        id: 9,
        name: "Indoor Plant Collection",
        price: 34.99,
        originalPrice: 49.99,
        image: "https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
        category: "home",
        rating: 4.3,
        reviews: 145,
        description: "Beautiful collection of indoor plants to brighten up your home. Low maintenance and air-purifying.",
        brand: "GreenLife",
        inStock: true,
        primeEligible: true,
        freeShipping: true,
        sizes: [],
        colors: [],
        specifications: {
            "Plants Included": "3",
            "Pot Size": "4 inch",
            "Care Level": "Easy",
            "Light": "Low to Medium"
        }
    },
    {
        id: 10,
        name: "Wireless Gaming Mouse",
        price: 59.99,
        originalPrice: 79.99,
        image: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
        category: "electronics",
        rating: 4.6,
        reviews: 445,
        description: "High-precision wireless gaming mouse with RGB lighting and programmable buttons.",
        brand: "GameTech",
        inStock: true,
        primeEligible: true,
        freeShipping: true,
        sizes: [],
        colors: ["Black", "White"],
        specifications: {
            "DPI": "16000",
            "Buttons": "8 programmable",
            "Battery": "70 hours",
            "RGB": "16.7 million colors"
        }
    }
];

const currencies = {
    USD: { symbol: '$', rate: 1 },
    EUR: { symbol: '€', rate: 0.85 },
    GBP: { symbol: '£', rate: 0.73 },
    JPY: { symbol: '¥', rate: 110 },
    CAD: { symbol: 'C$', rate: 1.25 }
};

const languages = {
    EN: 'English',
    ES: 'Español',
    FR: 'Français',
    DE: 'Deutsch',
    IT: 'Italiano',
    PT: 'Português',
    JA: '日本語',
    ZH: '中文'
};

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
let currentAddress = localStorage.getItem('currentAddress') || 'New York 10001';
let currentCurrency = localStorage.getItem('currentCurrency') || 'USD';
let currentLanguage = localStorage.getItem('currentLanguage') || 'EN';
let currentTheme = localStorage.getItem('currentTheme') || 'light';
let recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed')) || [];
let currentSlide = 0;
let currentPage = 'home';
let currentCategory = 'all';
let currentSort = 'featured';
let filteredProducts = [];
let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
let loyaltyPoints = parseInt(localStorage.getItem('loyaltyPoints')) || 0;
let appliedPromoCode = null;
let checkoutStep = 1;
let flashSaleEndTime = new Date().getTime() + (24 * 60 * 60 * 1000);

document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    applyTheme();
    updateUserInterface();
    updateCartCount();
    updateWishlistCount();
    updateCartDisplay();
    updateWishlistDisplay();
    displayProducts();
    displayRecommendations();
    displayDeals();
    startHeroSlider();
    startFlashSaleCountdown();
    setupSearchSuggestions();
    updateCurrencyDisplay();
    updateLanguageDisplay();
    updateAddressDisplay();
    displayRecentlyViewed();
    
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js');
    }
    
    setupPushNotifications();
}

function applyTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
    const themeIcon = document.getElementById('themeToggle').querySelector('i');
    themeIcon.className = currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('currentTheme', currentTheme);
    applyTheme();
    showNotification(`Switched to ${currentTheme} theme`);
}

function setupPushNotifications() {
    if ('Notification' in window && 'serviceWorker' in navigator) {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                schedulePromotionalNotifications();
            }
        });
    }
}

function schedulePromotionalNotifications() {
    setTimeout(() => {
        if (Notification.permission === 'granted') {
            new Notification('ShopHub Deal Alert!', {
                body: 'Check out our flash sale - 50% off selected items!',
                icon: '/icon-192x192.png',
                badge: '/icon-192x192.png'
            });
        }
    }, 300000);
}

function startFlashSaleCountdown() {
    const countdown = setInterval(() => {
        const now = new Date().getTime();
        const distance = flashSaleEndTime - now;
        
        if (distance < 0) {
            clearInterval(countdown);
            document.getElementById('flashSaleBanner').style.display = 'none';
            return;
        }
        
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }, 1000);
}

function setupSearchSuggestions() {
    const searchInput = document.getElementById('searchInput');
    const suggestionsContainer = document.getElementById('searchSuggestions');
    
    searchInput.addEventListener('input', debounce((e) => {
        const query = e.target.value.toLowerCase().trim();
        if (query.length < 2) {
            suggestionsContainer.style.display = 'none';
            return;
        }
        
        const suggestions = products
            .filter(product => product.name.toLowerCase().includes(query))
            .slice(0, 5)
            .map(product => product.name);
        
        if (suggestions.length > 0) {
            suggestionsContainer.innerHTML = suggestions
                .map(suggestion => `<div class="search-suggestion" onclick="selectSuggestion('${suggestion}')">${suggestion}</div>`)
                .join('');
            suggestionsContainer.style.display = 'block';
        } else {
            suggestionsContainer.style.display = 'none';
        }
    }, 300));
    
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-input-container')) {
            suggestionsContainer.style.display = 'none';
        }
    });
}

function selectSuggestion(suggestion) {
    document.getElementById('searchInput').value = suggestion;
    document.getElementById('searchSuggestions').style.display = 'none';
    handleSearch();
}

function startVoiceSearch() {
    if ('webkitSpeechRecognition' in window) {
        const recognition = new webkitSpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';
        
        recognition.onstart = () => {
            showNotification('Listening...', 'info');
        };
        
        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            document.getElementById('searchInput').value = transcript;
            handleSearch();
        };
        
        recognition.onerror = () => {
            showNotification('Voice search failed. Please try again.', 'error');
        };
        
        recognition.start();
    } else {
        showNotification('Voice search not supported in this browser', 'error');
    }
}

function updateCurrencyDisplay() {
    document.getElementById('currentCurrency').textContent = currentCurrency;
}

function updateLanguageDisplay() {
    document.getElementById('currentLanguage').textContent = currentLanguage;
}

function updateAddressDisplay() {
    document.getElementById('currentAddress').textContent = currentAddress;
}

function showLanguageModal() {
    const modal = createModal('Language Selection', Object.entries(languages).map(([code, name]) => 
        `<div class="language-option" onclick="selectLanguage('${code}')" style="padding: 10px; cursor: pointer; border-bottom: 1px solid #eee;">
            ${name} (${code})
        </div>`
    ).join(''));
    document.body.appendChild(modal);
}

function selectLanguage(langCode) {
    currentLanguage = langCode;
    localStorage.setItem('currentLanguage', currentLanguage);
    updateLanguageDisplay();
    closeAllModals();
    showNotification(`Language changed to ${languages[langCode]}`);
}

function showCurrencyModal() {
    const modal = createModal('Currency Selection', Object.entries(currencies).map(([code, data]) => 
        `<div class="currency-option" onclick="selectCurrency('${code}')" style="padding: 10px; cursor: pointer; border-bottom: 1px solid #eee;">
            ${data.symbol} ${code}
        </div>`
    ).join(''));
    document.body.appendChild(modal);
}

function selectCurrency(currencyCode) {
    currentCurrency = currencyCode;
    localStorage.setItem('currentCurrency', currentCurrency);
    updateCurrencyDisplay();
    closeAllModals();
    showNotification(`Currency changed to ${currencyCode}`);
    refreshPriceDisplays();
}

function refreshPriceDisplays() {
    displayProducts();
    displayDeals();
    updateCartDisplay();
    if (currentPage === 'category') {
        displayCategoryProducts();
    }
}

function formatPrice(price) {
    const currency = currencies[currentCurrency];
    const convertedPrice = price * currency.rate;
    return `${currency.symbol}${convertedPrice.toFixed(2)}`;
}

function showLoginModal() {
    document.getElementById('loginModal').style.display = 'block';
    closeAccountDropdown();
}

function showSignupModal() {
    document.getElementById('signupModal').style.display = 'block';
    closeAccountDropdown();
}

function showForgotPasswordModal() {
    const modal = createModal('Reset Password', `
        <form onsubmit="handlePasswordReset(event)">
            <div class="form-group">
                <label>Email Address</label>
                <input type="email" required placeholder="Enter your email">
            </div>
            <button type="submit" class="auth-btn">Send Reset Link</button>
        </form>
    `);
    document.body.appendChild(modal);
    closeModal('loginModal');
}

function handlePasswordReset(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    showNotification(`Password reset link sent to ${email}`);
    closeAllModals();
}

function switchToSignup() {
    closeModal('loginModal');
    showSignupModal();
}

function switchToLogin() {
    closeModal('signupModal');
    showLoginModal();
}

function socialLogin(provider) {
    showNotification(`Redirecting to ${provider} login...`, 'info');
    setTimeout(() => {
        const mockUser = {
            name: `${provider} User`,
            email: `user@${provider}.com`,
            address: currentAddress,
            provider: provider
        };
        currentUser = mockUser;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateUserInterface();
        closeAllModals();
        showNotification(`Successfully signed in with ${provider}!`);
    }, 2000);
}

function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const rememberMe = document.getElementById('rememberMe').checked;
    
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        if (rememberMe) {
            localStorage.setItem('rememberUser', 'true');
        }
        updateUserInterface();
        closeModal('loginModal');
        showNotification('Welcome back, ' + user.name + '!');
        awardLoyaltyPoints(10, 'Login bonus');
    } else {
        showNotification('Invalid email or password', 'error');
    }
}

function handleSignup(event) {
    event.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;
    const phone = document.getElementById('signupPhone').value;
    
    if (password !== confirmPassword) {
        showNotification('Passwords do not match', 'error');
        return;
    }
    
    if (!validatePasswordStrength(password)) {
        showNotification('Password must be at least 8 characters with uppercase, lowercase, and numbers', 'error');
        return;
    }
    
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    if (users.find(u => u.email === email)) {
        showNotification('Email already exists', 'error');
        return;
    }
    
    const newUser = { 
        name, 
        email, 
        password, 
        phone,
        address: currentAddress,
        joinDate: new Date().toISOString(),
        loyaltyPoints: 100
    };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    currentUser = newUser;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    loyaltyPoints = 100;
    localStorage.setItem('loyaltyPoints', loyaltyPoints.toString());
    
    updateUserInterface();
    closeModal('signupModal');
    showNotification('Account created successfully! Welcome, ' + name + '! You earned 100 loyalty points!');
    
    sendWelcomeEmail(email, name);
}

function validatePasswordStrength(password) {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    
    return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumbers;
}

function updatePasswordStrength() {
    const password = document.getElementById('signupPassword').value;
    const strengthIndicator = document.getElementById('passwordStrength');
    
    if (password.length === 0) {
        strengthIndicator.textContent = '';
        return;
    }
    
    const score = calculatePasswordScore(password);
    
    if (score < 3) {
        strengthIndicator.textContent = 'Weak password';
        strengthIndicator.className = 'password-strength weak';
    } else if (score < 5) {
        strengthIndicator.textContent = 'Medium password';
        strengthIndicator.className = 'password-strength medium';
    } else {
        strengthIndicator.textContent = 'Strong password';
        strengthIndicator.className = 'password-strength strong';
    }
}

function calculatePasswordScore(password) {
    let score = 0;
    if (password.length >= 8) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    return score;
}

document.addEventListener('DOMContentLoaded', function() {
    const signupPassword = document.getElementById('signupPassword');
    if (signupPassword) {
        signupPassword.addEventListener('input', updatePasswordStrength);
    }
});

function sendWelcomeEmail(email, name) {
    console.log(`Welcome email sent to ${email} for ${name}`);
}

function signOut() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    localStorage.removeItem('rememberUser');
    updateUserInterface();
    closeAccountDropdown();
    showNotification('You have been signed out');
}

function updateUserInterface() {
    const userName = document.getElementById('userName');
    const sideMenuUser = document.getElementById('sideMenuUser');
    const signedOutSection = document.getElementById('signedOutSection');
    const signedInSection = document.getElementById('signedInSection');
    
    if (currentUser) {
        userName.textContent = currentUser.name;
        sideMenuUser.textContent = currentUser.name;
        signedOutSection.style.display = 'none';
        signedInSection.style.display = 'block';
    } else {
        userName.textContent = 'Sign in';
        sideMenuUser.textContent = 'Sign in';
        signedOutSection.style.display = 'block';
        signedInSection.style.display = 'none';
    }
}

function showAddressModal() {
    document.getElementById('addressModal').style.display = 'block';
}

function handleAddressChange(event) {
    event.preventDefault();
    const country = document.getElementById('addressCountry').value;
    const zip = document.getElementById('addressZip').value;
    const city = document.getElementById('addressCity').value;
    
    currentAddress = `${city} ${zip}`;
    localStorage.setItem('currentAddress', currentAddress);
    updateAddressDisplay();
    
    if (currentUser) {
        currentUser.address = currentAddress;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
    }
    
    closeModal('addressModal');
    showNotification('Delivery address updated');
}

function showAccountModal() {
    if (!currentUser) {
        showLoginModal();
        return;
    }
    
    const modal = createModal('Your Account', `
        <div class="account-info">
            <div class="account-section">
                <h3>Personal Information</h3>
                <p><strong>Name:</strong> ${currentUser.name}</p>
                <p><strong>Email:</strong> ${currentUser.email}</p>
                <p><strong>Phone:</strong> ${currentUser.phone || 'Not provided'}</p>
                <p><strong>Member since:</strong> ${new Date(currentUser.joinDate || Date.now()).toLocaleDateString()}</p>
                <button class="edit-btn" onclick="editAccountInfo()">Edit</button>
            </div>
            <div class="account-section">
                <h3>Delivery Address</h3>
                <p>${currentUser.address || currentAddress}</p>
                <button class="edit-btn" onclick="showAddressModal()">Change Address</button>
            </div>
            <div class="account-section">
                <h3>Loyalty Program</h3>
                <p><strong>Points:</strong> ${loyaltyPoints}</p>
                <p><strong>Tier:</strong> ${getLoyaltyTier()}</p>
                <button class="edit-btn" onclick="showLoyaltyProgram()">View Details</button>
            </div>
        </div>
    `);
    document.body.appendChild(modal);
    closeAccountDropdown();
}

function getLoyaltyTier() {
    if (loyaltyPoints >= 1000) return 'Gold';
    if (loyaltyPoints >= 500) return 'Silver';
    return 'Bronze';
}

function awardLoyaltyPoints(points, reason) {
    if (!currentUser) return;
    
    loyaltyPoints += points;
    localStorage.setItem('loyaltyPoints', loyaltyPoints.toString());
    showNotification(`+${points} loyalty points earned! (${reason})`);
}

function navigateToHome() {
    currentPage = 'home';
    document.getElementById('homePage').style.display = 'block';
    document.getElementById('categoryPage').style.display = 'none';
    document.getElementById('cartPage').style.display = 'none';
    document.getElementById('checkoutPage').style.display = 'none';
    displayProducts();
    displayRecommendations();
}

function navigateToCategory(category) {
    currentPage = 'category';
    currentCategory = category;
    
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('categoryPage').style.display = 'block';
    document.getElementById('cartPage').style.display = 'none';
    document.getElementById('checkoutPage').style.display = 'none';
    
    const categoryInfo = {
        electronics: {
            title: 'Electronics',
            description: 'Discover the latest in technology and electronics'
        },
        clothing: {
            title: 'Fashion',
            description: 'Trendy clothing and accessories for every style'
        },
        home: {
            title: 'Home & Garden',
            description: 'Everything you need for your home and garden'
        },
        books: {
            title: 'Books',
            description: 'Bestsellers, classics, and new releases'
        },
        sports: {
            title: 'Sports & Outdoors',
            description: 'Gear up for your active lifestyle'
        }
    };
    
    const info = categoryInfo[category] || { title: 'Category', description: 'Browse our products' };
    document.getElementById('categoryTitle').textContent = info.title;
    document.getElementById('categoryBreadcrumb').textContent = info.title;
    document.getElementById('categoryDescription').textContent = info.description;
    
    displayCategoryProducts();
    populateBrandFilters();
    closeSideMenu();
}

function populateBrandFilters() {
    const brandFilters = document.getElementById('brandFilters');
    const categoryProducts = products.filter(p => p.category === currentCategory);
    const brands = [...new Set(categoryProducts.map(p => p.brand))];
    
    brandFilters.innerHTML = brands.map(brand => 
        `<label><input type="checkbox" value="${brand}" onchange="applyBrandFilter()"> ${brand}</label>`
    ).join('');
}

function applyBrandFilter() {
    if (currentPage === 'category') {
        displayCategoryProducts();
    }
}

function applyAvailabilityFilter() {
    if (currentPage === 'category') {
        displayCategoryProducts();
    }
}

function viewFullCart() {
    currentPage = 'cart';
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('categoryPage').style.display = 'none';
    document.getElementById('cartPage').style.display = 'block';
    document.getElementById('checkoutPage').style.display = 'none';
    
    displayFullCart();
    toggleCart();
}

function displayProducts() {
    const productsGrid = document.getElementById('productsGrid');
    let productsToShow = products.slice(0, 6);
    
    productsToShow = sortProductsArray(productsToShow);
    
    productsGrid.innerHTML = '';
    
    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

function displayRecommendations() {
    if (!currentUser) return;
    
    const recommendationsGrid = document.getElementById('recommendationsGrid');
    const recommendedProducts = getPersonalizedRecommendations();
    
    if (recommendedProducts.length > 0) {
        document.getElementById('personalizedRecommendations').style.display = 'block';
        recommendationsGrid.innerHTML = '';
        
        recommendedProducts.forEach(product => {
            const productCard = createProductCard(product);
            recommendationsGrid.appendChild(productCard);
        });
    }
}

function getPersonalizedRecommendations() {
    if (cart.length === 0 && recentlyViewed.length === 0) {
        return products.slice(0, 4);
    }
    
    const userCategories = [...new Set([
        ...cart.map(item => item.category),
        ...recentlyViewed.map(id => products.find(p => p.id === id)?.category).filter(Boolean)
    ])];
    
    const recommendations = products.filter(product => 
        userCategories.includes(product.category) && 
        !cart.some(item => item.id === product.id)
    ).slice(0, 4);
    
    return recommendations.length > 0 ? recommendations : products.slice(0, 4);
}

function displayDeals() {
    const dealsGrid = document.getElementById('dealsGrid');
    const dealProducts = products.filter(p => p.originalPrice > p.price).slice(0, 3);
    
    dealsGrid.innerHTML = '';
    
    dealProducts.forEach(product => {
        const dealCard = createDealCard(product);
        dealsGrid.appendChild(dealCard);
    });
}

function createDealCard(product) {
    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    
    const card = document.createElement('div');
    card.className = 'deal-card';
    card.innerHTML = `
        <div class="deal-badge">${discount}% OFF</div>
        <img src="${product.image}" alt="${product.name}" onclick="showProductModal(${product.id})">
        <div class="deal-content">
            <h4>${product.name}</h4>
            <p class="deal-price">${formatPrice(product.price)} <span>${formatPrice(product.originalPrice)}</span></p>
            <p class="deal-time">Deal ends in ${Math.floor(Math.random() * 5) + 1} days</p>
        </div>
    `;
    return card;
}

function displayCategoryProducts() {
    const categoryProductsGrid = document.getElementById('categoryProductsGrid');
    const resultsCount = document.getElementById('resultsCount');
    
    filteredProducts = products.filter(product => product.category === currentCategory);
    
    filteredProducts = applyFilters(filteredProducts);
    filteredProducts = sortProductsArray(filteredProducts);
    
    resultsCount.textContent = `${filteredProducts.length} results`;
    
    categoryProductsGrid.innerHTML = '';
    
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        categoryProductsGrid.appendChild(productCard);
    });
}

function displayFullCart() {
    const fullCartItems = document.getElementById('fullCartItems');
    const summaryItemCount = document.getElementById('summaryItemCount');
    const summarySubtotal = document.getElementById('summarySubtotal');
    const summaryShipping = document.getElementById('summaryShipping');
    const summaryBeforeTax = document.getElementById('summaryBeforeTax');
    const summaryTax = document.getElementById('summaryTax');
    const summaryDiscount = document.getElementById('summaryDiscount');
    const summaryDiscountRow = document.getElementById('summaryDiscountRow');
    const summaryTotal = document.getElementById('summaryTotal');
    
    if (cart.length === 0) {
        fullCartItems.innerHTML = '<div class="empty-cart" style="text-align: center; padding: 50px;"><h3>Your cart is empty</h3><p>Add some products to get started!</p></div>';
        updateSummaryDisplay(0, 0, 0, 0, 0);
        return;
    }
    
    fullCartItems.innerHTML = '';
    let subtotal = 0;
    let totalItems = 0;
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'full-cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="full-cart-item-info">
                <h3>${item.name}</h3>
                <p class="product-price">${formatPrice(item.price)}</p>
                <p>In Stock</p>
                <div class="full-cart-item-controls">
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})">-</button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
                    </div>
                    <button onclick="saveForLater(${item.id})" style="background: #3498db; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; margin-right: 10px;">Save for Later</button>
                    <button onclick="removeFromCart(${item.id})" style="background: #e74c3c; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;">Remove</button>
                </div>
            </div>
        `;
        fullCartItems.appendChild(cartItem);
        subtotal += item.price * item.quantity;
        totalItems += item.quantity;
    });
    
    const shipping = calculateShipping(subtotal);
    const discount = appliedPromoCode ? calculateDiscount(subtotal) : 0;
    const taxableAmount = subtotal + shipping - discount;
    const tax = taxableAmount * 0.08;
    const total = taxableAmount + tax;
    
    updateSummaryDisplay(totalItems, subtotal, shipping, tax, discount, total);
    
    if (discount > 0) {
        summaryDiscountRow.style.display = 'flex';
        summaryDiscount.textContent = `-${formatPrice(discount)}`;
    } else {
        summaryDiscountRow.style.display = 'none';
    }
}

function updateSummaryDisplay(items, subtotal, shipping, tax, discount, total) {
    document.getElementById('summaryItemCount').textContent = items;
    document.getElementById('summarySubtotal').textContent = formatPrice(subtotal);
    document.getElementById('summaryShipping').textContent = formatPrice(shipping);
    document.getElementById('summaryBeforeTax').textContent = formatPrice(subtotal + shipping - discount);
    document.getElementById('summaryTax').textContent = formatPrice(tax);
    document.getElementById('summaryTotal').textContent = formatPrice(total);
}

function calculateShipping(subtotal) {
    if (subtotal >= 25 || (currentUser && loyaltyPoints >= 100)) {
        return 0;
    }
    return 5.99;
}

function calculateDiscount(subtotal) {
    if (!appliedPromoCode) return 0;
    
    const promoCodes = {
        'SAVE10': { type: 'percentage', value: 10 },
        'SAVE20': { type: 'percentage', value: 20 },
        'FIRST15': { type: 'percentage', value: 15 },
        'LOYALTY5': { type: 'fixed', value: 5 }
    };
    
    const promo = promoCodes[appliedPromoCode];
    if (!promo) return 0;
    
    if (promo.type === 'percentage') {
        return subtotal * (promo.value / 100);
    } else {
        return Math.min(promo.value, subtotal);
    }
}

function saveForLater(productId) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    let savedItems = JSON.parse(localStorage.getItem('savedForLater')) || [];
    const existingSaved = savedItems.find(saved => saved.id === productId);
    
    if (!existingSaved) {
        savedItems.push(item);
        localStorage.setItem('savedForLater', JSON.stringify(savedItems));
    }
    
    removeFromCart(productId);
    showNotification('Item saved for later');
    displaySavedItems();
}

function displaySavedItems() {
    const savedItems = JSON.parse(localStorage.getItem('savedForLater')) || [];
    const savedItemsContainer = document.getElementById('savedItems');
    
    if (savedItems.length === 0) {
        savedItemsContainer.innerHTML = '<p>No saved items</p>';
        return;
    }
    
    savedItemsContainer.innerHTML = savedItems.map(item => `
        <div class="saved-item" style="display: flex; gap: 15px; padding: 15px; border-bottom: 1px solid #eee;">
            <img src="${item.image}" alt="${item.name}" style="width: 80px; height: 80px; object-fit: cover; border-radius: 8px;">
            <div style="flex: 1;">
                <h4>${item.name}</h4>
                <p>${formatPrice(item.price)}</p>
                <div style="margin-top: 10px;">
                    <button onclick="moveToCart(${item.id})" style="background: #ff9900; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; margin-right: 10px;">Move to Cart</button>
                    <button onclick="removeSavedItem(${item.id})" style="background: #e74c3c; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;">Remove</button>
                </div>
            </div>
        </div>
    `).join('');
}

function moveToCart(productId) {
    let savedItems = JSON.parse(localStorage.getItem('savedForLater')) || [];
    const item = savedItems.find(saved => saved.id === productId);
    
    if (item) {
        addToCart(productId, item.quantity);
        savedItems = savedItems.filter(saved => saved.id !== productId);
        localStorage.setItem('savedForLater', JSON.stringify(savedItems));
        displaySavedItems();
        showNotification('Item moved to cart');
    }
}

function removeSavedItem(productId) {
    let savedItems = JSON.parse(localStorage.getItem('savedForLater')) || [];
    savedItems = savedItems.filter(saved => saved.id !== productId);
    localStorage.setItem('savedForLater', JSON.stringify(savedItems));
    displaySavedItems();
    showNotification('Saved item removed');
}

function createProductCard(product) {
    const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;
    
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" onclick="showProductModal(${product.id})">
        <div class="product-info">
            <h3>${product.name}</h3>
            <div class="product-rating">
                <div class="stars">
                    ${generateStars(product.rating)}
                </div>
                <span class="rating-text">(${product.reviews})</span>
            </div>
            <div class="product-price">
                ${formatPrice(product.price)}
                ${product.originalPrice ? `<span style="text-decoration: line-through; color: #666; font-size: 16px; margin-left: 10px;">${formatPrice(product.originalPrice)}</span>` : ''}
            </div>
            <div class="product-badges">
                ${product.primeEligible ? '<span class="badge prime">Prime</span>' : ''}
                ${product.freeShipping ? '<span class="badge free-shipping">Free Shipping</span>' : ''}
                ${product.inStock ? '<span class="badge in-stock">In Stock</span>' : ''}
            </div>
            <div class="product-actions">
                <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
                <button class="quick-view" onclick="showProductModal(${product.id})">Quick View</button>
            </div>
        </div>
    `;
    return card;
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    let starsHTML = '';
    
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<span class="star">★</span>';
    }
    
    if (halfStar) {
        starsHTML += '<span class="star">☆</span>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<span class="star" style="color: #ddd;">★</span>';
    }
    
    return starsHTML;
}

function sortProductsArray(products) {
    switch (currentSort) {
        case 'price-low':
            return [...products].sort((a, b) => a.price - b.price);
        case 'price-high':
            return [...products].sort((a, b) => b.price - a.price);
        case 'rating':
            return [...products].sort((a, b) => b.rating - a.rating);
        case 'newest':
            return [...products].sort((a, b) => b.id - a.id);
        default:
            return products;
    }
}

function sortProducts(sortValue) {
    currentSort = sortValue;
    if (currentPage === 'home') {
        displayProducts();
    } else if (currentPage === 'category') {
        displayCategoryProducts();
    }
}

function sortCategoryProducts(sortValue) {
    currentSort = sortValue;
    displayCategoryProducts();
}

function applyFilters(products) {
    let filtered = [...products];
    
    const maxPrice = document.getElementById('priceRange').value;
    filtered = filtered.filter(product => product.price <= maxPrice);
    
    const ratingCheckboxes = document.querySelectorAll('.rating-filters input[type="checkbox"]:checked');
    if (ratingCheckboxes.length > 0) {
        const minRating = Math.min(...Array.from(ratingCheckboxes).map(cb => parseInt(cb.value)));
        filtered = filtered.filter(product => product.rating >= minRating);
    }
    
    const brandCheckboxes = document.querySelectorAll('.brand-filters input[type="checkbox"]:checked');
    if (brandCheckboxes.length > 0) {
        const selectedBrands = Array.from(brandCheckboxes).map(cb => cb.value);
        filtered = filtered.filter(product => selectedBrands.includes(product.brand));
    }
    
    const availabilityCheckboxes = document.querySelectorAll('.availability-filters input[type="checkbox"]:checked');
    if (availabilityCheckboxes.length > 0) {
        const selectedFilters = Array.from(availabilityCheckboxes).map(cb => cb.value);
        filtered = filtered.filter(product => {
            if (selectedFilters.includes('in-stock') && !product.inStock) return false;
            if (selectedFilters.includes('prime') && !product.primeEligible) return false;
            if (selectedFilters.includes('free-shipping') && !product.freeShipping) return false;
            return true;
        });
    }
    
    return filtered;
}

function applyPriceFilter(value) {
    document.getElementById('maxPrice').textContent = formatPrice(value);
    if (currentPage === 'category') {
        displayCategoryProducts();
    }
}

function applyRatingFilter() {
    if (currentPage === 'category') {
        displayCategoryProducts();
    }
}

function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...product,
            quantity: quantity
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    updateCartDisplay();
    showNotification('Product added to cart!');
    
    if (currentUser) {
        awardLoyaltyPoints(1, 'Item added to cart');
    }
    
    trackEvent('add_to_cart', { product_id: productId, quantity: quantity });
}

function addToWishlist(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = wishlist.find(item => item.id === productId);
    
    if (!existingItem) {
        wishlist.push(product);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        updateWishlistCount();
        updateWishlistDisplay();
        showNotification('Product added to wishlist!');
    } else {
        showNotification('Product already in wishlist', 'info');
    }
}

function removeFromWishlist(productId) {
    wishlist = wishlist.filter(item => item.id !== productId);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateWishlistCount();
    updateWishlistDisplay();
    showNotification('Product removed from wishlist!');
}

function updateWishlistCount() {
    const wishlistCount = document.querySelector('.wishlist-count');
    wishlistCount.textContent = wishlist.length;
    wishlistCount.style.display = wishlist.length > 0 ? 'block' : 'none';
}

function updateWishlistDisplay() {
    const wishlistItems = document.getElementById('wishlistItems');
    
    if (wishlist.length === 0) {
        wishlistItems.innerHTML = '<p class="empty-wishlist">Your wishlist is empty</p>';
        return;
    }
    
    wishlistItems.innerHTML = '';
    
    wishlist.forEach(item => {
        const wishlistItem = document.createElement('div');
        wishlistItem.className = 'wishlist-item';
        wishlistItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="wishlist-item-info">
                <h4>${item.name}</h4>
                <p>${formatPrice(item.price)}</p>
            </div>
            <div class="wishlist-item-actions">
                <button onclick="addToCart(${item.id})">Add to Cart</button>
                <button onclick="removeFromWishlist(${item.id})">Remove</button>
            </div>
        `;
        wishlistItems.appendChild(wishlistItem);
    });
}

function showWishlist() {
    toggleWishlist();
}

function toggleWishlist() {
    const wishlistSidebar = document.getElementById('wishlistSidebar');
    wishlistSidebar.classList.toggle('active');
    updateWishlistDisplay();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    updateCartDisplay();
    
    if (currentPage === 'cart') {
        displayFullCart();
    }
    
    showNotification('Product removed from cart!');
}

function updateCartQuantity(productId, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(productId);
        return;
    }
    
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = newQuantity;
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        updateCartDisplay();
        
        if (currentPage === 'cart') {
            displayFullCart();
        }
    }
}

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    const cartItemCount = document.getElementById('cartItemCount');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'block' : 'none';
    
    if (cartItemCount) {
        cartItemCount.textContent = totalItems;
    }
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const cartSubtotal = document.getElementById('cartSubtotal');
    const cartTotal = document.getElementById('cartTotal');
    const totalItems = document.getElementById('totalItems');
    const discountRow = document.getElementById('discountRow');
    const discountAmount = document.getElementById('discountAmount');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        cartSubtotal.textContent = formatPrice(0);
        cartTotal.textContent = formatPrice(0);
        if (totalItems) totalItems.textContent = '0';
        if (discountRow) discountRow.style.display = 'none';
        return;
    }
    
    cartItems.innerHTML = '';
    let subtotal = 0;
    let itemCount = 0;
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>${formatPrice(item.price)}</p>
                <p>Qty: ${item.quantity}</p>
            </div>
            <div class="cart-item-actions">
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})">-</button>
                    <span class="quantity-display">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
                </div>
                <button onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `;
        cartItems.appendChild(cartItem);
        subtotal += item.price * item.quantity;
        itemCount += item.quantity;
    });
    
    const discount = appliedPromoCode ? calculateDiscount(subtotal) : 0;
    const total = subtotal - discount;
    
    cartSubtotal.textContent = formatPrice(subtotal);
    cartTotal.textContent = formatPrice(total);
    if (totalItems) totalItems.textContent = itemCount;
    
    if (discount > 0 && discountRow) {
        discountRow.style.display = 'flex';
        discountAmount.textContent = `-${formatPrice(discount)}`;
    } else if (discountRow) {
        discountRow.style.display = 'none';
    }
}

function applyPromoCode() {
    const promoCodeInput = document.getElementById('promoCodeInput');
    const code = promoCodeInput.value.trim().toUpperCase();
    
    const validCodes = ['SAVE10', 'SAVE20', 'FIRST15', 'LOYALTY5'];
    
    if (validCodes.includes(code)) {
        appliedPromoCode = code;
        updateCartDisplay();
        if (currentPage === 'cart') {
            displayFullCart();
        }
        showNotification(`Promo code ${code} applied!`);
        promoCodeInput.value = '';
    } else {
        showNotification('Invalid promo code', 'error');
    }
}

function oneClickOrder() {
    if (!currentUser) {
        showLoginModal();
        showNotification('Please sign in to use 1-Click ordering', 'error');
        return;
    }
    
    if (cart.length === 0) {
        showNotification('Your cart is empty', 'error');
        return;
    }
    
    showNotification('Processing 1-Click order...', 'info');
    
    setTimeout(() => {
        const orderNumber = generateOrderNumber();
        processOrder(orderNumber);
        showNotification(`Order ${orderNumber} placed successfully!`);
        
        if (currentUser) {
            awardLoyaltyPoints(Math.floor(cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)), 'Order completed');
        }
        
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        updateCartDisplay();
        
        if (currentPage === 'cart') {
            displayFullCart();
        }
    }, 2000);
}

function proceedToCheckout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty', 'error');
        return;
    }
    
    if (!currentUser) {
        showLoginModal();
        showNotification('Please sign in to proceed to checkout', 'error');
        return;
    }
    
    currentPage = 'checkout';
    checkoutStep = 1;
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('categoryPage').style.display = 'none';
    document.getElementById('cartPage').style.display = 'none';
    document.getElementById('checkoutPage').style.display = 'block';
    
    updateCheckoutStep();
    displayCheckoutSummary();
    toggleCart();
}

function updateCheckoutStep() {
    const steps = document.querySelectorAll('.step');
    const sections = document.querySelectorAll('.checkout-section');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const placeOrderBtn = document.getElementById('placeOrderBtn');
    
    steps.forEach((step, index) => {
        step.classList.toggle('active', index + 1 === checkoutStep);
    });
    
    sections.forEach((section, index) => {
        section.style.display = index + 1 === checkoutStep ? 'block' : 'none';
    });
    
    prevBtn.style.display = checkoutStep > 1 ? 'inline-block' : 'none';
    nextBtn.style.display = checkoutStep < 3 ? 'inline-block' : 'none';
    placeOrderBtn.style.display = checkoutStep === 3 ? 'inline-block' : 'none';
    
    if (checkoutStep === 3) {
        displayOrderReview();
    }
}

function nextCheckoutStep() {
    if (validateCurrentStep()) {
        checkoutStep++;
        updateCheckoutStep();
    }
}

function previousCheckoutStep() {
    checkoutStep--;
    updateCheckoutStep();
}

function validateCurrentStep() {
    if (checkoutStep === 1) {
        const form = document.getElementById('shippingForm');
        const inputs = form.querySelectorAll('input[required], select[required]');
        const shippingOption = form.querySelector('input[name="shipping"]:checked');
        
        for (let input of inputs) {
            if (!input.value.trim()) {
                showNotification('Please fill in all required fields', 'error');
                return false;
            }
        }
        
        if (!shippingOption) {
            showNotification('Please select a shipping option', 'error');
            return false;
        }
        
        return true;
    }
    
    if (checkoutStep === 2) {
        const paymentMethod = document.querySelector('input[name="payment"]:checked');
        if (!paymentMethod) {
            showNotification('Please select a payment method', 'error');
            return false;
        }
        
        if (paymentMethod.value === 'card') {
            const cardNumber = document.getElementById('cardNumber').value;
            const cardExpiry = document.getElementById('cardExpiry').value;
            const cardCVV = document.getElementById('cardCVV').value;
            const cardName = document.getElementById('cardName').value;
            
            if (!cardNumber || !cardExpiry || !cardCVV || !cardName) {
                showNotification('Please fill in all card details', 'error');
                return false;
            }
        }
        
        return true;
    }
    
    return true;
}

function displayOrderReview() {
    const orderReview = document.getElementById('orderReview');
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = calculateShipping(subtotal);
    const discount = appliedPromoCode ? calculateDiscount(subtotal) : 0;
    const tax = (subtotal + shipping - discount) * 0.08;
    const total = subtotal + shipping + tax - discount;
    
    orderReview.innerHTML = `
        <div class="order-items">
            <h4>Items (${cart.reduce((sum, item) => sum + item.quantity, 0)})</h4>
            ${cart.map(item => `
                <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                    <span>${item.name} x ${item.quantity}</span>
                    <span>${formatPrice(item.price * item.quantity)}</span>
                </div>
            `).join('')}
        </div>
        <div class="order-totals" style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                <span>Subtotal:</span>
                <span>${formatPrice(subtotal)}</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                <span>Shipping:</span>
                <span>${formatPrice(shipping)}</span>
            </div>
            ${discount > 0 ? `
                <div style="display: flex; justify-content: space-between; margin-bottom: 10px; color: #27ae60;">
                    <span>Discount:</span>
                    <span>-${formatPrice(discount)}</span>
                </div>
            ` : ''}
            <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                <span>Tax:</span>
                <span>${formatPrice(tax)}</span>
            </div>
            <div style="display: flex; justify-content: space-between; font-weight: bold; font-size: 18px; margin-top: 15px; padding-top: 15px; border-top: 1px solid #eee;">
                <span>Total:</span>
                <span>${formatPrice(total)}</span>
            </div>
        </div>
    `;
}

function displayCheckoutSummary() {
    const checkoutSummary = document.getElementById('checkoutSummary');
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = calculateShipping(subtotal);
    const discount = appliedPromoCode ? calculateDiscount(subtotal) : 0;
    const tax = (subtotal + shipping - discount) * 0.08;
    const total = subtotal + shipping + tax - discount;
    
    checkoutSummary.innerHTML = `
        <div class="summary-row">
            <span>Items (${cart.reduce((sum, item) => sum + item.quantity, 0)}):</span>
            <span>${formatPrice(subtotal)}</span>
        </div>
        <div class="summary-row">
            <span>Shipping:</span>
            <span>${formatPrice(shipping)}</span>
        </div>
        ${discount > 0 ? `
            <div class="summary-row" style="color: #27ae60;">
                <span>Discount:</span>
                <span>-${formatPrice(discount)}</span>
            </div>
        ` : ''}
        <div class="summary-row">
            <span>Tax:</span>
            <span>${formatPrice(tax)}</span>
        </div>
        <div class="summary-total">
            <span>Total:</span>
            <span>${formatPrice(total)}</span>
        </div>
    `;
}

function placeOrder() {
    showNotification('Processing your order...', 'info');
    
    setTimeout(() => {
        const orderNumber = generateOrderNumber();
        processOrder(orderNumber);
        showNotification(`Order ${orderNumber} placed successfully!`);
        
        if (currentUser) {
            awardLoyaltyPoints(Math.floor(cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)), 'Order completed');
        }
        
        cart = [];
        appliedPromoCode = null;
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        updateCartDisplay();
        
        navigateToHome();
        
        sendOrderConfirmationEmail(orderNumber);
    }, 3000);
}

function generateOrderNumber() {
    return 'SH' + Date.now().toString().slice(-8);
}

function processOrder(orderNumber) {
    const order = {
        orderNumber,
        items: [...cart],
        user: currentUser,
        date: new Date().toISOString(),
        status: 'Processing',
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    };
    
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
    
    trackEvent('purchase', { order_number: orderNumber, value: order.total });
}

function sendOrderConfirmationEmail(orderNumber) {
    console.log(`Order confirmation email sent for order ${orderNumber}`);
}

function payWithPayPal() {
    showNotification('Redirecting to PayPal...', 'info');
    setTimeout(() => {
        showNotification('PayPal payment completed!');
        proceedToCheckout();
    }, 2000);
}

function payWithApplePay() {
    if (window.ApplePaySession && ApplePaySession.canMakePayments()) {
        showNotification('Processing Apple Pay...', 'info');
        setTimeout(() => {
            showNotification('Apple Pay payment completed!');
            proceedToCheckout();
        }, 2000);
    } else {
        showNotification('Apple Pay not available', 'error');
    }
}

function payWithGooglePay() {
    showNotification('Processing Google Pay...', 'info');
    setTimeout(() => {
        showNotification('Google Pay payment completed!');
        proceedToCheckout();
    }, 2000);
}

function showProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    addToRecentlyViewed(productId);
    
    const modal = document.getElementById('productModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalStars = document.getElementById('modalStars');
    const modalReviews = document.getElementById('modalReviews');
    const modalPrice = document.getElementById('modalPrice');
    const modalOriginalPrice = document.getElementById('modalOriginalPrice');
    const modalDiscount = document.getElementById('modalDiscount');
    const modalDescription = document.getElementById('modalDescription');
    const sizeSelector = document.getElementById('sizeSelector');
    const colorSelector = document.getElementById('colorSelector');
    
    modalImage.src = product.image;
    modalTitle.textContent = product.name;
    modalStars.innerHTML = generateStars(product.rating);
    modalReviews.textContent = `(${product.reviews} reviews)`;
    modalPrice.textContent = formatPrice(product.price);
    modalOriginalPrice.textContent = product.originalPrice ? formatPrice(product.originalPrice) : '';
    
    if (product.originalPrice) {
        const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
        modalDiscount.textContent = `${discount}% OFF`;
        modalDiscount.style.display = 'inline';
    } else {
        modalDiscount.style.display = 'none';
    }
    
    modalDescription.textContent = product.description;
    
    if (product.sizes && product.sizes.length > 0) {
        sizeSelector.style.display = 'block';
        const sizeSelect = document.getElementById('productSize');
        sizeSelect.innerHTML = product.sizes.map(size => `<option value="${size}">${size}</option>`).join('');
    } else {
        sizeSelector.style.display = 'none';
    }
    
    if (product.colors && product.colors.length > 0) {
        colorSelector.style.display = 'block';
        const colorOptions = document.getElementById('colorOptions');
        colorOptions.innerHTML = product.colors.map(color => 
            `<div class="color-option" style="background-color: ${color.toLowerCase()}" onclick="selectColor('${color}')"></div>`
        ).join('');
    } else {
        colorSelector.style.display = 'none';
    }
    
    populateProductTabs(product);
    
    modal.style.display = 'block';
    modal.setAttribute('data-product-id', productId);
}

function addToRecentlyViewed(productId) {
    recentlyViewed = recentlyViewed.filter(id => id !== productId);
    recentlyViewed.unshift(productId);
    recentlyViewed = recentlyViewed.slice(0, 10);
    localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed));
    displayRecentlyViewed();
}

function displayRecentlyViewed() {
    if (recentlyViewed.length === 0) return;
    
    const recentlyViewedSection = document.getElementById('recentlyViewedSection');
    const recentlyViewedGrid = document.getElementById('recentlyViewedGrid');
    
    recentlyViewedSection.style.display = 'block';
    recentlyViewedGrid.innerHTML = '';
    
    recentlyViewed.slice(0, 6).forEach(productId => {
        const product = products.find(p => p.id === productId);
        if (product) {
            const productCard = createProductCard(product);
            productCard.style.transform = 'scale(0.9)';
            recentlyViewedGrid.appendChild(productCard);
        }
    });
}

function populateProductTabs(product) {
    populateReviews(product);
    populateQA(product);
    populateSpecifications(product);
}

function populateReviews(product) {
    const reviewsSection = document.getElementById('reviewsSection');
    const mockReviews = [
        { name: 'John D.', rating: 5, comment: 'Excellent product! Highly recommended.', date: '2024-01-15' },
        { name: 'Sarah M.', rating: 4, comment: 'Good quality, fast shipping.', date: '2024-01-10' },
        { name: 'Mike R.', rating: 5, comment: 'Perfect! Exactly what I needed.', date: '2024-01-05' }
    ];
    
    reviewsSection.innerHTML = mockReviews.map(review => `
        <div class="review" style="border-bottom: 1px solid #eee; padding: 15px 0;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                <strong>${review.name}</strong>
                <span>${new Date(review.date).toLocaleDateString()}</span>
            </div>
            <div style="margin-bottom: 10px;">
                ${generateStars(review.rating)}
            </div>
            <p>${review.comment}</p>
        </div>
    `).join('');
}

function populateQA(product) {
    const qaSection = document.getElementById('qaSection');
    const mockQA = [
        { question: 'Is this product compatible with...?', answer: 'Yes, it is fully compatible with most devices.', date: '2024-01-12' },
        { question: 'What is the warranty period?', answer: 'This product comes with a 2-year manufacturer warranty.', date: '2024-01-08' }
    ];
    
    qaSection.innerHTML = mockQA.map(qa => `
        <div class="qa-item" style="border-bottom: 1px solid #eee; padding: 15px 0;">
            <div style="margin-bottom: 10px;">
                <strong>Q: ${qa.question}</strong>
            </div>
            <div style="margin-bottom: 10px;">
                <strong>A:</strong> ${qa.answer}
            </div>
            <small style="color: #666;">${new Date(qa.date).toLocaleDateString()}</small>
        </div>
    `).join('');
}

function populateSpecifications(product) {
    const specificationsSection = document.getElementById('specificationsSection');
    
    if (product.specifications) {
        specificationsSection.innerHTML = Object.entries(product.specifications).map(([key, value]) => `
            <div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #eee;">
                <strong>${key}:</strong>
                <span>${value}</span>
            </div>
        `).join('');
    } else {
        specificationsSection.innerHTML = '<p>No specifications available.</p>';
    }
}

function showTab(tabName) {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');
    
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabPanels.forEach(panel => panel.classList.remove('active'));
    
    document.querySelector(`[onclick="showTab('${tabName}')"]`).classList.add('active');
    document.getElementById(`${tabName}Tab`).classList.add('active');
}

function selectColor(color) {
    const colorOptions = document.querySelectorAll('.color-option');
    colorOptions.forEach(option => option.classList.remove('active'));
    event.target.classList.add('active');
}

function addToCartFromModal() {
    const modal = document.getElementById('productModal');
    const productId = parseInt(modal.getAttribute('data-product-id'));
    const quantity = parseInt(document.getElementById('modalQuantity').value);
    
    addToCart(productId, quantity);
    closeModal('productModal');
}

function buyNowFromModal() {
    const modal = document.getElementById('productModal');
    const productId = parseInt(modal.getAttribute('data-product-id'));
    const quantity = parseInt(document.getElementById('modalQuantity').value);
    
    addToCart(productId, quantity);
    closeModal('productModal');
    proceedToCheckout();
}

function addToWishlistFromModal() {
    const modal = document.getElementById('productModal');
    const productId = parseInt(modal.getAttribute('data-product-id'));
    
    addToWishlist(productId);
}

function addToCompareFromModal() {
    const modal = document.getElementById('productModal');
    const productId = parseInt(modal.getAttribute('data-product-id'));
    
    let compareList = JSON.parse(localStorage.getItem('compareList')) || [];
    const product = products.find(p => p.id === productId);
    
    if (compareList.length >= 4) {
        showNotification('You can compare up to 4 products at a time', 'warning');
        return;
    }
    
    if (!compareList.find(p => p.id === productId)) {
        compareList.push(product);
        localStorage.setItem('compareList', JSON.stringify(compareList));
        showNotification('Product added to comparison');
    } else {
        showNotification('Product already in comparison list', 'info');
    }
}

function toggleMenu() {
    const sideMenu = document.getElementById('sideMenu');
    sideMenu.classList.toggle('active');
}

function closeSideMenu() {
    const sideMenu = document.getElementById('sideMenu');
    sideMenu.classList.remove('active');
}

function toggleAccount() {
    const dropdown = document.getElementById('accountDropdown');
    dropdown.classList.toggle('active');
}

function closeAccountDropdown() {
    const dropdown = document.getElementById('accountDropdown');
    dropdown.classList.remove('active');
}

function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    cartSidebar.classList.toggle('active');
    updateCartDisplay();
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function closeAllModals() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => modal.style.display = 'none');
    
    const customModals = document.querySelectorAll('.custom-modal');
    customModals.forEach(modal => modal.remove());
}

function createModal(title, content) {
    const modal = document.createElement('div');
    modal.className = 'modal custom-modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close" onclick="this.closest('.modal').remove()">&times;</span>
            <div style="padding: 40px;">
                <h2 style="margin-bottom: 20px;">${title}</h2>
                ${content}
            </div>
        </div>
    `;
    return modal;
}

function startHeroSlider() {
    setInterval(() => {
        changeSlide(1);
    }, 5000);
}

function changeSlide(direction) {
    const slides = document.querySelectorAll('.hero-slide');
    slides[currentSlide].classList.remove('active');
    
    currentSlide += direction;
    if (currentSlide >= slides.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    
    slides[currentSlide].classList.add('active');
}

function handleSearch() {
    const searchInput = document.querySelector('.search-input');
    const searchCategory = document.querySelector('.search-category');
    const searchTerm = searchInput.value.toLowerCase().trim();
    const selectedCategory = searchCategory.value;
    
    if (searchTerm === '') {
        if (currentPage === 'home') {
            displayProducts();
        } else if (currentPage === 'category') {
            displayCategoryProducts();
        }
        return;
    }
    
    addToSearchHistory(searchTerm);
    
    let searchResults = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) ||
                            product.description.toLowerCase().includes(searchTerm) ||
                            product.brand.toLowerCase().includes(searchTerm);
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });
    
    if (currentPage === 'home') {
        currentPage = 'category';
        document.getElementById('homePage').style.display = 'none';
        document.getElementById('categoryPage').style.display = 'block';
        document.getElementById('cartPage').style.display = 'none';
        document.getElementById('checkoutPage').style.display = 'none';
        
        document.getElementById('categoryTitle').textContent = `Search Results for "${searchTerm}"`;
        document.getElementById('categoryBreadcrumb').textContent = 'Search Results';
        document.getElementById('categoryDescription').textContent = `Found ${searchResults.length} products`;
    }
    
    displaySearchResults(searchResults);
    trackEvent('search', { search_term: searchTerm, results_count: searchResults.length });
}

function addToSearchHistory(searchTerm) {
    searchHistory = searchHistory.filter(term => term !== searchTerm);
    searchHistory.unshift(searchTerm);
    searchHistory = searchHistory.slice(0, 10);
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
}

function displaySearchResults(searchResults) {
    const categoryProductsGrid = document.getElementById('categoryProductsGrid');
    const resultsCount = document.getElementById('resultsCount');
    
    resultsCount.textContent = `${searchResults.length} results`;
    categoryProductsGrid.innerHTML = '';
    
    if (searchResults.length === 0) {
        categoryProductsGrid.innerHTML = '<div style="text-align: center; padding: 50px; color: #666;"><h3>No products found</h3><p>Try adjusting your search terms</p></div>';
        return;
    }
    
    searchResults.forEach(product => {
        const productCard = createProductCard(product);
        categoryProductsGrid.appendChild(productCard);
    });
}

function loadMoreProducts() {
    showNotification('Loading more products...', 'info');
    
    setTimeout(() => {
        const additionalProducts = products.slice(6, 12);
        const productsGrid = document.getElementById('productsGrid');
        
        additionalProducts.forEach(product => {
            const productCard = createProductCard(product);
            productsGrid.appendChild(productCard);
        });
        
        showNotification('More products loaded!');
    }, 1000);
}

function handleNewsletter(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    
    let subscribers = JSON.parse(localStorage.getItem('newsletterSubscribers')) || [];
    if (!subscribers.includes(email)) {
        subscribers.push(email);
        localStorage.setItem('newsletterSubscribers', JSON.stringify(subscribers));
        showNotification('Thank you for subscribing to our newsletter!');
        
        if (currentUser) {
            awardLoyaltyPoints(5, 'Newsletter subscription');
        }
    } else {
        showNotification('You are already subscribed!', 'info');
    }
    
    e.target.reset();
}

function openLiveChat() {
    const liveChat = document.getElementById('liveChat');
    liveChat.classList.add('active');
    liveChat.style.display = 'flex';
}

function closeLiveChat() {
    const liveChat = document.getElementById('liveChat');
    liveChat.classList.remove('active');
    liveChat.style.display = 'none';
}

function sendChatMessage() {
    const chatInput = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chatMessages');
    const message = chatInput.value.trim();
    
    if (message === '') return;
    
    const userMessage = document.createElement('div');
    userMessage.className = 'message user';
    userMessage.innerHTML = `<p>${message}</p>`;
    chatMessages.appendChild(userMessage);
    
    chatInput.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    setTimeout(() => {
        const botResponse = generateBotResponse(message);
        const botMessage = document.createElement('div');
        botMessage.className = 'message bot';
        botMessage.innerHTML = `<p>${botResponse}</p>`;
        chatMessages.appendChild(botMessage);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1000);
}

function generateBotResponse(userMessage) {
    const responses = {
        'hello': 'Hello! How can I help you today?',
        'help': 'I can help you with orders, products, shipping, and returns. What do you need assistance with?',
        'order': 'You can track your orders in the "Your Orders" section. Do you need help with a specific order?',
        'shipping': 'We offer free shipping on orders over $25. Standard shipping takes 5-7 business days.',
        'return': 'You can return items within 30 days of purchase. Visit our returns page for more information.',
        'default': 'Thank you for your message. A customer service representative will assist you shortly.'
    };
    
    const lowerMessage = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(responses)) {
        if (lowerMessage.includes(key)) {
            return response;
        }
    }
    
    return responses.default;
}

document.addEventListener('keypress', function(e) {
    if (e.target.id === 'chatInput' && e.key === 'Enter') {
        sendChatMessage();
    }
});

function showOrdersModal() {
    if (!currentUser) {
        showLoginModal();
        return;
    }
    
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const userOrders = orders.filter(order => order.user.email === currentUser.email);
    
    const modal = createModal('Your Orders', `
        <div class="orders-list">
            ${userOrders.length === 0 ? '<p>No orders found.</p>' : 
                userOrders.map(order => `
                    <div class="order-item" style="border: 1px solid #ddd; padding: 15px; margin-bottom: 15px; border-radius: 8px;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                            <strong>Order #${order.orderNumber}</strong>
                            <span class="order-status" style="background: #3498db; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px;">${order.status}</span>
                        </div>
                        <p>Date: ${new Date(order.date).toLocaleDateString()}</p>
                        <p>Total: ${formatPrice(order.total)}</p>
                        <p>Items: ${order.items.length}</p>
                        <button onclick="trackOrder('${order.orderNumber}')" style="background: #ff9900; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; margin-top: 10px;">Track Order</button>
                    </div>
                `).join('')
            }
        </div>
    `);
    document.body.appendChild(modal);
    closeAccountDropdown();
}

function trackOrder(orderNumber) {
    const modal = createModal('Order Tracking', `
        <div class="order-tracking">
            <h3>Order #${orderNumber}</h3>
            <div class="tracking-steps" style="margin: 20px 0;">
                <div class="tracking-step active" style="padding: 10px; border-left: 3px solid #27ae60; margin-bottom: 10px;">
                    <strong>Order Placed</strong>
                    <p>Your order has been received and is being processed.</p>
                </div>
                <div class="tracking-step active" style="padding: 10px; border-left: 3px solid #27ae60; margin-bottom: 10px;">
                    <strong>Processing</strong>
                    <p>Your order is being prepared for shipment.</p>
                </div>
                <div class="tracking-step" style="padding: 10px; border-left: 3px solid #ddd; margin-bottom: 10px;">
                    <strong>Shipped</strong>
                    <p>Your order has been shipped and is on its way.</p>
                </div>
                <div class="tracking-step" style="padding: 10px; border-left: 3px solid #ddd; margin-bottom: 10px;">
                    <strong>Delivered</strong>
                    <p>Your order has been delivered.</p>
                </div>
            </div>
            <p><strong>Estimated Delivery:</strong> ${new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString()}</p>
        </div>
    `);
    document.body.appendChild(modal);
    closeAllModals();
    document.body.appendChild(modal);
}

function showLoyaltyProgram() {
    const tier = getLoyaltyTier();
    const nextTierPoints = tier === 'Bronze' ? 500 : tier === 'Silver' ? 1000 : 'Max';
    
    const modal = createModal('Loyalty Program', `
        <div class="loyalty-program">
            <div style="text-align: center; margin-bottom: 30px;">
                <h3>Your Loyalty Status</h3>
                <div style="font-size: 48px; color: #ff9900; margin: 20px 0;">${loyaltyPoints}</div>
                <p>Points Available</p>
                <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 20px 0;">
                    <strong>Current Tier: ${tier}</strong>
                    ${nextTierPoints !== 'Max' ? `<p>Next tier in ${nextTierPoints - loyaltyPoints} points</p>` : '<p>You have reached the highest tier!</p>'}
                </div>
            </div>
            
            <div class="loyalty-benefits">
                <h4>Your Benefits</h4>
                <ul style="list-style: none; padding: 0;">
                    <li style="padding: 10px 0; border-bottom: 1px solid #eee;">
                        <i class="fas fa-check" style="color: #27ae60; margin-right: 10px;"></i>
                        Earn 1 point per dollar spent
                    </li>
                    <li style="padding: 10px 0; border-bottom: 1px solid #eee;">
                        <i class="fas fa-check" style="color: #27ae60; margin-right: 10px;"></i>
                        Free shipping on orders over $25
                    </li>
                    ${tier !== 'Bronze' ? `
                        <li style="padding: 10px 0; border-bottom: 1px solid #eee;">
                            <i class="fas fa-check" style="color: #27ae60; margin-right: 10px;"></i>
                            Early access to sales
                        </li>
                    ` : ''}
                    ${tier === 'Gold' ? `
                        <li style="padding: 10px 0; border-bottom: 1px solid #eee;">
                            <i class="fas fa-check" style="color: #27ae60; margin-right: 10px;"></i>
                            Exclusive Gold member discounts
                        </li>
                    ` : ''}
                </ul>
            </div>
            
            <div class="redeem-points" style="margin-top: 30px;">
                <h4>Redeem Points</h4>
                <button onclick="redeemPoints(100, 5)" style="background: #ff9900; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer; margin: 5px;">
                    $5 off (100 points)
                </button>
                <button onclick="redeemPoints(200, 10)" style="background: #ff9900; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer; margin: 5px;">
                    $10 off (200 points)
                </button>
                <button onclick="redeemPoints(500, 25)" style="background: #ff9900; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer; margin: 5px;">
                    $25 off (500 points)
                </button>
            </div>
        </div>
    `);
    document.body.appendChild(modal);
}

function redeemPoints(pointsCost, dollarValue) {
    if (loyaltyPoints >= pointsCost) {
        loyaltyPoints -= pointsCost;
        localStorage.setItem('loyaltyPoints', loyaltyPoints.toString());
        
        const promoCode = `LOYALTY${dollarValue}`;
        showNotification(`Redeemed! Use code ${promoCode} for $${dollarValue} off your next order`);
        closeAllModals();
    } else {
        showNotification(`You need ${pointsCost - loyaltyPoints} more points for this reward`, 'error');
    }
}

function showGiftCards() {
    const modal = createModal('Gift Cards', `
        <div class="gift-cards">
            <h3>Purchase Gift Cards</h3>
            <div class="gift-card-options" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px; margin: 20px 0;">
                <div class="gift-card-option" onclick="selectGiftCard(25)" style="border: 2px solid #ddd; padding: 20px; text-align: center; border-radius: 8px; cursor: pointer;">
                    <h4>$25</h4>
                </div>
                <div class="gift-card-option" onclick="selectGiftCard(50)" style="border: 2px solid #ddd; padding: 20px; text-align: center; border-radius: 8px; cursor: pointer;">
                    <h4>$50</h4>
                </div>
                <div class="gift-card-option" onclick="selectGiftCard(100)" style="border: 2px solid #ddd; padding: 20px; text-align: center; border-radius: 8px; cursor: pointer;">
                    <h4>$100</h4>
                </div>
                <div class="gift-card-option" onclick="selectGiftCard(200)" style="border: 2px solid #ddd; padding: 20px; text-align: center; border-radius: 8px; cursor: pointer;">
                    <h4>$200</h4>
                </div>
            </div>
            <div class="custom-amount" style="margin: 20px 0;">
                <label>Custom Amount:</label>
                <input type="number" id="customGiftAmount" min="10" max="1000" placeholder="Enter amount">
                <button onclick="selectCustomGiftCard()" style="background: #ff9900; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; margin-left: 10px;">Select</button>
            </div>
        </div>
    `);
    document.body.appendChild(modal);
}

function selectGiftCard(amount) {
    showNotification(`Gift card for ${formatPrice(amount)} added to cart`);
    closeAllModals();
}

function selectCustomGiftCard() {
    const amount = document.getElementById('customGiftAmount').value;
    if (amount >= 10 && amount <= 1000) {
        showNotification(`Gift card for ${formatPrice(amount)} added to cart`);
        closeAllModals();
    } else {
        showNotification('Please enter an amount between $10 and $1000', 'error');
    }
}

function showSubscribeAndSave() {
    const modal = createModal('Subscribe & Save', `
        <div class="subscribe-save">
            <h3>Subscribe & Save Program</h3>
            <p>Save up to 15% and never run out of the products you use most.</p>
            
            <div class="benefits" style="margin: 20px 0;">
                <h4>Benefits:</h4>
                <ul>
                    <li>Save 5% on every delivery</li>
                    <li>Save an additional 10% when you have 5 or more subscriptions</li>
                    <li>Free shipping on all subscription orders</li>
                    <li>Flexible delivery schedule</li>
                    <li>Cancel anytime</li>
                </ul>
            </div>
            
            <div class="eligible-products">
                <h4>Eligible Products:</h4>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin: 15px 0;">
                    ${products.filter(p => ['home', 'sports'].includes(p.category)).slice(0, 4).map(product => `
                        <div style="border: 1px solid #ddd; padding: 15px; border-radius: 8px;">
                            <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100px; object-fit: cover; border-radius: 4px;">
                            <h5 style="margin: 10px 0;">${product.name}</h5>
                            <p>${formatPrice(product.price * 0.95)} <small style="text-decoration: line-through;">${formatPrice(product.price)}</small></p>
                            <button onclick="subscribeToProduct(${product.id})" style="background: #ff9900; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; width: 100%;">Subscribe</button>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `);
    document.body.appendChild(modal);
}

function subscribeToProduct(productId) {
    const product = products.find(p => p.id === productId);
    showNotification(`Subscribed to ${product.name}! You'll save 5% on every delivery.`);
    closeAllModals();
}

function showMarketplace() {
    const modal = createModal('Marketplace', `
        <div class="marketplace">
            <h3>Third-Party Sellers</h3>
            <p>Discover products from verified sellers around the world.</p>
            
            <div class="seller-categories" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin: 20px 0;">
                <div class="seller-category" style="border: 1px solid #ddd; padding: 20px; border-radius: 8px; text-align: center;">
                    <i class="fas fa-store" style="font-size: 48px; color: #ff9900; margin-bottom: 15px;"></i>
                    <h4>Electronics Sellers</h4>
                    <p>Certified electronics retailers</p>
                    <button onclick="browseSellerCategory('electronics')" style="background: #ff9900; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;">Browse</button>
                </div>
                <div class="seller-category" style="border: 1px solid #ddd; padding: 20px; border-radius: 8px; text-align: center;">
                    <i class="fas fa-tshirt" style="font-size: 48px; color: #ff9900; margin-bottom: 15px;"></i>
                    <h4>Fashion Boutiques</h4>
                    <p>Independent fashion retailers</p>
                    <button onclick="browseSellerCategory('clothing')" style="background: #ff9900; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;">Browse</button>
                </div>
                <div class="seller-category" style="border: 1px solid #ddd; padding: 20px; border-radius: 8px; text-align: center;">
                    <i class="fas fa-home" style="font-size: 48px; color: #ff9900; margin-bottom: 15px;"></i>
                    <h4>Home & Garden</h4>
                    <p>Specialty home goods sellers</p>
                    <button onclick="browseSellerCategory('home')" style="background: #ff9900; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;">Browse</button>
                </div>
            </div>
            
            <div class="become-seller" style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-top: 20px;">
                <h4>Become a Seller</h4>
                <p>Start selling your products on ShopHub and reach millions of customers.</p>
                <button onclick="showSellerRegistration()" style="background: #27ae60; color: white; border: none; padding: 12px 24px; border-radius: 4px; cursor: pointer;">Start Selling</button>
            </div>
        </div>
    `);
    document.body.appendChild(modal);
}

function browseSellerCategory(category) {
    closeAllModals();
    navigateToCategory(category);
}

function showSellerRegistration() {
    const modal = createModal('Become a Seller', `
        <div class="seller-registration">
            <h3>Join ShopHub Marketplace</h3>
            <form onsubmit="handleSellerRegistration(event)">
                <div class="form-group">
                    <label>Business Name</label>
                    <input type="text" required placeholder="Enter your business name">
                </div>
                <div class="form-group">
                    <label>Business Type</label>
                    <select required>
                        <option value="">Select business type</option>
                        <option value="individual">Individual</option>
                        <option value="business">Business</option>
                        <option value="corporation">Corporation</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Product Categories</label>
                    <div style="display: flex; flex-wrap: wrap; gap: 10px;">
                        <label><input type="checkbox" value="electronics"> Electronics</label>
                        <label><input type="checkbox" value="clothing"> Clothing</label>
                        <label><input type="checkbox" value="home"> Home & Garden</label>
                        <label><input type="checkbox" value="books"> Books</label>
                        <label><input type="checkbox" value="sports"> Sports</label>
                    </div>
                </div>
                <div class="form-group">
                    <label>Contact Email</label>
                    <input type="email" required placeholder="Enter your email">
                </div>
                <div class="form-group">
                    <label>Phone Number</label>
                    <input type="tel" required placeholder="Enter your phone number">
                </div>
                <button type="submit" class="auth-btn">Submit Application</button>
            </form>
        </div>
    `);
    document.body.appendChild(modal);
    closeAllModals();
    document.body.appendChild(modal);
}

function handleSellerRegistration(event) {
    event.preventDefault();
    showNotification('Seller application submitted! We will review and contact you within 2-3 business days.');
    closeAllModals();
}

function showPrimeModal() {
    const modal = createModal('ShopHub Prime', `
        <div class="prime-membership">
            <div style="text-align: center; margin-bottom: 30px;">
                <h3 style="color: #00a8ff;">ShopHub Prime</h3>
                <p style="font-size: 18px;">Unlimited fast, free delivery and more</p>
            </div>
            
            <div class="prime-benefits" style="margin: 20px 0;">
                <h4>Prime Benefits:</h4>
                <ul style="list-style: none; padding: 0;">
                    <li style="padding: 10px 0; border-bottom: 1px solid #eee;">
                        <i class="fas fa-shipping-fast" style="color: #00a8ff; margin-right: 10px;"></i>
                        FREE One-Day Delivery on millions of items
                    </li>
                    <li style="padding: 10px 0; border-bottom: 1px solid #eee;">
                        <i class="fas fa-video" style="color: #00a8ff; margin-right: 10px;"></i>
                        Prime Video streaming service
                    </li>
                    <li style="padding: 10px 0; border-bottom: 1px solid #eee;">
                        <i class="fas fa-music" style="color: #00a8ff; margin-right: 10px;"></i>
                        Prime Music with millions of songs
                    </li>
                    <li style="padding: 10px 0; border-bottom: 1px solid #eee;">
                        <i class="fas fa-book" style="color: #00a8ff; margin-right: 10px;"></i>
                        Prime Reading access
                    </li>
                    <li style="padding: 10px 0; border-bottom: 1px solid #eee;">
                        <i class="fas fa-bolt" style="color: #00a8ff; margin-right: 10px;"></i>
                        Exclusive deals and early access
                    </li>
                </ul>
            </div>
            
            <div class="prime-pricing" style="text-align: center; margin: 30px 0;">
                <div style="display: flex; justify-content: center; gap: 20px;">
                    <div style="border: 2px solid #00a8ff; padding: 20px; border-radius: 8px;">
                        <h4>Monthly</h4>
                        <div style="font-size: 24px; color: #00a8ff; margin: 10px 0;">$12.99/month</div>
                        <button onclick="subscribeToPrime('monthly')" style="background: #00a8ff; color: white; border: none; padding: 12px 24px; border-radius: 4px; cursor: pointer;">Start Free Trial</button>
                    </div>
                    <div style="border: 2px solid #00a8ff; padding: 20px; border-radius: 8px; background: #f0f8ff;">
                        <h4>Annual</h4>
                        <div style="font-size: 24px; color: #00a8ff; margin: 10px 0;">$139/year</div>
                        <small style="color: #27ae60;">Save $16.88</small>
                        <br>
                        <button onclick="subscribeToPrime('annual')" style="background: #00a8ff; color: white; border: none; padding: 12px 24px; border-radius: 4px; cursor: pointer; margin-top: 10px;">Start Free Trial</button>
                    </div>
                </div>
                <p style="margin-top: 15px; font-size: 14px; color: #666;">30-day free trial, cancel anytime</p>
            </div>
        </div>
    `);
    document.body.appendChild(modal);
}

function subscribeToPrime(plan) {
    showNotification(`Prime ${plan} subscription started! Enjoy your 30-day free trial.`);
    closeAllModals();
    
    if (currentUser) {
        currentUser.primeSubscription = {
            plan: plan,
            startDate: new Date().toISOString(),
            trialEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
        };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        awardLoyaltyPoints(50, 'Prime subscription');
    }
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    const container = document.getElementById('notificationContainer');
    container.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 5000);
}

function trackEvent(eventName, parameters) {
    console.log(`Event: ${eventName}`, parameters);
    
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, parameters);
    }
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

document.addEventListener('click', function(e) {
    const accountDropdown = document.getElementById('accountDropdown');
    const cartSidebar = document.getElementById('cartSidebar');
    const wishlistSidebar = document.getElementById('wishlistSidebar');
    const sideMenu = document.getElementById('sideMenu');
    const searchSuggestions = document.getElementById('searchSuggestions');
    
    if (!e.target.closest('.account') && !e.target.closest('.account-dropdown')) {
        accountDropdown.classList.remove('active');
    }
    
    if (!e.target.closest('.cart') && !e.target.closest('.cart-sidebar')) {
        cartSidebar.classList.remove('active');
    }
    
    if (!e.target.closest('.wishlist') && !e.target.closest('.wishlist-sidebar')) {
        wishlistSidebar.classList.remove('active');
    }
    
    if (!e.target.closest('.menu-btn') && !e.target.closest('.side-menu')) {
        sideMenu.classList.remove('active');
    }
    
    if (!e.target.closest('.search-input-container')) {
        searchSuggestions.style.display = 'none';
    }
});

window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeAllModals();
        
        document.getElementById('accountDropdown').classList.remove('active');
        document.getElementById('cartSidebar').classList.remove('active');
        document.getElementById('wishlistSidebar').classList.remove('active');
        document.getElementById('sideMenu').classList.remove('active');
        document.getElementById('searchSuggestions').style.display = 'none';
        closeLiveChat();
    }
});

document.querySelector('.search-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        handleSearch();
    }
});

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

function showAboutModal() {
    const modal = createModal('About ShopHub', `
        <div class="about-content">
            <p>ShopHub is your ultimate shopping destination, offering millions of products from trusted sellers worldwide.</p>
            <p>Founded in 2024, we are committed to providing the best online shopping experience with competitive prices, fast shipping, and excellent customer service.</p>
            <h4>Our Mission</h4>
            <p>To make online shopping accessible, affordable, and enjoyable for everyone.</p>
        </div>
    `);
    document.body.appendChild(modal);
}

function showTermsModal() {
    const modal = createModal('Terms of Service', `
        <div class="terms-content" style="max-height: 400px; overflow-y: auto;">
            <h4>1. Acceptance of Terms</h4>
            <p>By using ShopHub, you agree to these terms and conditions.</p>
            <h4>2. Use of Service</h4>
            <p>You may use our service for lawful purposes only.</p>
            <h4>3. Privacy Policy</h4>
            <p>Your privacy is important to us. Please review our Privacy Policy.</p>
            <h4>4. Limitation of Liability</h4>
            <p>ShopHub shall not be liable for any indirect, incidental, or consequential damages.</p>
        </div>
    `);
    document.body.appendChild(modal);
}

function showPrivacyModal() {
    const modal = createModal('Privacy Policy', `
        <div class="privacy-content" style="max-height: 400px; overflow-y: auto;">
            <h4>Information We Collect</h4>
            <p>We collect information you provide directly to us, such as when you create an account or make a purchase.</p>
            <h4>How We Use Your Information</h4>
            <p>We use your information to provide, maintain, and improve our services.</p>
            <h4>Information Sharing</h4>
            <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent.</p>
            <h4>Data Security</h4>
            <p>We implement appropriate security measures to protect your personal information.</p>
        </div>
    `);
    document.body.appendChild(modal);
}

function showRecommendations() {
    const modal = createModal('Your Recommendations', `
        <div class="recommendations-content">
            <h3>Recommended for You</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin: 20px 0;">
                ${getPersonalizedRecommendations().map(product => `
                    <div style="border: 1px solid #ddd; padding: 15px; border-radius: 8px;">
                        <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 120px; object-fit: cover; border-radius: 4px;">
                        <h5 style="margin: 10px 0;">${product.name}</h5>
                        <p>${formatPrice(product.price)}</p>
                        <button onclick="addToCart(${product.id}); closeAllModals();" style="background: #ff9900; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; width: 100%;">Add to Cart</button>
                    </div>
                `).join('')}
            </div>
        </div>
    `);
    document.body.appendChild(modal);
}

function editAccountInfo() {
    const modal = createModal('Edit Account Information', `
        <form onsubmit="updateAccountInfo(event)">
            <div class="form-group">
                <label>Name</label>
                <input type="text" id="editName" value="${currentUser.name}" required>
            </div>
            <div class="form-group">
                <label>Email</label>
                <input type="email" id="editEmail" value="${currentUser.email}" required>
            </div>
            <div class="form-group">
                <label>Phone</label>
                <input type="tel" id="editPhone" value="${currentUser.phone || ''}" required>
            </div>
            <button type="submit" class="auth-btn">Update Information</button>
        </form>
    `);
    document.body.appendChild(modal);
    closeAllModals();
    document.body.appendChild(modal);
}

function updateAccountInfo(event) {
    event.preventDefault();
    
    currentUser.name = document.getElementById('editName').value;
    currentUser.email = document.getElementById('editEmail').value;
    currentUser.phone = document.getElementById('editPhone').value;
    
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    updateUserInterface();
    closeAllModals();
    showNotification('Account information updated successfully!');
}

displaySavedItems();