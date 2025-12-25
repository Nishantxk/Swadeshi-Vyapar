/* ============================================
   SWADESHI VYAPAR - Main Application Logic
============================================ */

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    initApp();
});

// Initialize Application
function initApp() {
    updateCartCount();
    updateEPoints();
    initSidebar();
    initSearch();
    initCategories();
    initProducts();
}

/* ============================================
   CART FUNCTIONS
============================================ */

// Get cart from localStorage
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

// Save cart to localStorage
function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === parseInt(productId));
    if (!product) return;

    let cart = getCart();
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    saveCart(cart);
    showToast(`${product.name} added to cart!`);
}

// Remove product from cart
function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== parseInt(productId));
    saveCart(cart);
    return cart;
}

// Update quantity in cart
function updateCartQuantity(productId, change) {
    let cart = getCart();
    const item = cart.find(i => i.id === parseInt(productId));
    
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.id !== parseInt(productId));
        }
        saveCart(cart);
    }
    return cart;
}

// Update cart count badge
function updateCartCount() {
    const cart = getCart();
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const badges = document.querySelectorAll('.cart-count');
    badges.forEach(badge => {
        badge.textContent = count;
        badge.style.display = count > 0 ? 'block' : 'none';
    });
}

// Calculate cart total
function getCartTotal() {
    const cart = getCart();
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

// Calculate E-Points for cart
function getCartEPoints() {
    const cart = getCart();
    return cart.reduce((sum, item) => sum + Math.floor(item.ecoRating / 10) * item.quantity, 0);
}

/* ============================================
   E-POINTS FUNCTIONS
============================================ */

// Get E-Points from localStorage
function getEPoints() {
    return parseInt(localStorage.getItem('epoints')) || 0;
}

// Add E-Points
function addEPoints(points) {
    const currentPoints = getEPoints();
    const newTotal = currentPoints + points;
    localStorage.setItem('epoints', newTotal);
    updateEPoints();
    return newTotal;
}

// Update E-Points display
function updateEPoints() {
    const points = getEPoints();
    const displays = document.querySelectorAll('.epoints-value');
    displays.forEach(display => {
        display.textContent = points;
    });
}

/* ============================================
   SIDEBAR FILTER FUNCTIONS
============================================ */

function initSidebar() {
    const toggleBtn = document.querySelector('.filter-toggle-btn');
    const sidebar = document.querySelector('.filter-sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    const closeBtn = document.querySelector('.close-sidebar');

    if (toggleBtn && sidebar) {
        toggleBtn.addEventListener('click', () => {
            sidebar.classList.add('active');
            if (overlay) overlay.classList.add('active');
        });
    }

    if (closeBtn && sidebar) {
        closeBtn.addEventListener('click', () => {
            sidebar.classList.remove('active');
            if (overlay) overlay.classList.remove('active');
        });
    }

    if (overlay && sidebar) {
        overlay.addEventListener('click', () => {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        });
    }

    // Clear filters button
    const clearBtn = document.querySelector('.clear-filters');
    if (clearBtn) {
        clearBtn.addEventListener('click', clearFilters);
    }
}

function clearFilters() {
    // Reset all checkboxes
    document.querySelectorAll('.filter-section input[type="checkbox"]').forEach(cb => {
        cb.checked = false;
    });

    // Reset range inputs
    document.querySelectorAll('.filter-section input[type="range"]').forEach(range => {
        range.value = range.max;
    });

    // Reset category active states
    document.querySelectorAll('.filter-section li').forEach(li => {
        li.classList.remove('active');
    });

    // Reload products
    if (typeof filterProducts === 'function') {
        filterProducts();
    }

    showToast('Filters cleared');
}

/* ============================================
   SEARCH FUNCTIONS
============================================ */

function initSearch() {
    // Header search - text input
    const headerSearch = document.getElementById('headerSearch');
    const headerSearchBtn = document.querySelector('.search-container .search-btn');
    
    if (headerSearch) {
        // Click search button
        if (headerSearchBtn) {
            headerSearchBtn.addEventListener('click', () => performSearch(headerSearch.value));
        }
        // Enter key in search input
        headerSearch.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') performSearch(headerSearch.value);
        });
    }

    // Main search
    const mainSearch = document.querySelector('.main-search input');
    const mainSearchBtn = document.querySelector('.main-search .search-btn');
    
    if (mainSearch && mainSearchBtn) {
        mainSearchBtn.addEventListener('click', () => performSearch(mainSearch.value));
        mainSearch.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') performSearch(mainSearch.value);
        });
    }

    // Image search - camera button
    const imageSearchInput = document.querySelector('.image-search-input');
    if (imageSearchInput) {
        imageSearchInput.addEventListener('change', handleImageSearch);
    }
}

function performSearch(query) {
    if (!query.trim()) return;
    
    // Redirect to category page with search query
    window.location.href = `category.html?search=${encodeURIComponent(query.trim())}`;
}

function handleImageSearch(e) {
    const file = e.target.files[0];
    if (file) {
        showToast('Image search is a demo feature. Showing all products.');
        window.location.href = 'category.html';
    }
}

/* ============================================
   CATEGORY FUNCTIONS
============================================ */

function initCategories() {
    const categoriesGrid = document.querySelector('.categories-grid');
    if (!categoriesGrid || typeof categories === 'undefined') return;

    // Show only first 6 categories in grid (Arts replaces Electronics in display)
    const gridCategories = categories.slice(0, 6);
    
    categoriesGrid.innerHTML = gridCategories.map(cat => `
        <a href="category.html?type=${cat.id}" class="category-card">
            <img src="${cat.image}" alt="${cat.name}" loading="lazy">
            <h3>${cat.name}</h3>
        </a>
    `).join('');
}

/* ============================================
   PRODUCT FUNCTIONS
============================================ */

function initProducts() {
    const productsGrid = document.querySelector('.products-grid');
    if (!productsGrid || typeof products === 'undefined') return;

    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const categoryType = urlParams.get('type');
    const searchQuery = urlParams.get('search');

    let filteredProducts = [...products];

    // Filter by category
    if (categoryType) {
        filteredProducts = filteredProducts.filter(p => p.category === categoryType);
        
        // Update page title
        const pageTitle = document.querySelector('.products-header h2');
        if (pageTitle) {
            const cat = categories.find(c => c.id === categoryType);
            pageTitle.textContent = cat ? cat.name : 'Products';
        }
    }

    // Filter by search query
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filteredProducts = filteredProducts.filter(p => 
            p.name.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query) ||
            p.region.toLowerCase().includes(query) ||
            p.category.toLowerCase().includes(query)
        );

        // Update page title
        const pageTitle = document.querySelector('.products-header h2');
        if (pageTitle) {
            pageTitle.textContent = `Search: "${searchQuery}"`;
        }
    }

    renderProducts(filteredProducts);
    initProductFilters(filteredProducts);
}

function renderProducts(productsToRender) {
    const productsGrid = document.querySelector('.products-grid');
    if (!productsGrid) return;

    if (productsToRender.length === 0) {
        productsGrid.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
                <div style="font-size: 4rem; margin-bottom: 20px;"><i class="fas fa-search" style="color: #ccc;"></i></div>
                <h3>No products found</h3>
                <p style="color: #666; margin-top: 10px;">Try adjusting your filters or search terms.</p>
            </div>
        `;
        return;
    }

    productsGrid.innerHTML = productsToRender.map(product => `
        <div class="product-card" data-id="${product.id}">
            <a href="product.html?id=${product.id}" class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <span class="eco-badge"><i class="fas fa-leaf"></i> ${product.ecoRating}%</span>
            </a>
            <div class="product-info">
                <h3><a href="product.html?id=${product.id}">${product.name}</a></h3>
                <p class="product-region"><i class="fas fa-map-marker-alt"></i> ${product.region}</p>
                <p class="product-price">₹${product.price.toLocaleString('en-IN')}</p>
                <div class="product-actions">
                    <button class="btn btn-secondary" onclick="addToCart(${product.id}); event.stopPropagation();">
                        <i class="fas fa-cart-plus"></i> Add to Cart
                    </button>
                    <a href="checkout.html?buy=${product.id}" class="btn btn-primary">
                        <i class="fas fa-bolt"></i> Buy Now
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

function initProductFilters(initialProducts) {
    // Category filter
    const categoryFilters = document.querySelectorAll('.category-filter-item');
    categoryFilters.forEach(item => {
        item.addEventListener('click', function() {
            categoryFilters.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            filterProducts();
        });
    });

    // Region filter checkboxes
    const regionFilters = document.querySelectorAll('.region-filter input');
    regionFilters.forEach(cb => {
        cb.addEventListener('change', filterProducts);
    });

    // Eco rating range
    const ecoRange = document.querySelector('.eco-range input[type="range"]');
    const ecoValue = document.querySelector('.eco-range .current-value');
    if (ecoRange) {
        ecoRange.addEventListener('input', function() {
            if (ecoValue) ecoValue.textContent = this.value + '%';
            filterProducts();
        });
    }

    // Sort dropdown
    const sortSelect = document.querySelector('.sort-dropdown');
    if (sortSelect) {
        sortSelect.addEventListener('change', filterProducts);
    }
}

function filterProducts() {
    let filtered = [...products];

    // Get URL params
    const urlParams = new URLSearchParams(window.location.search);
    const categoryType = urlParams.get('type');
    const searchQuery = urlParams.get('search');

    // Apply category from URL
    if (categoryType) {
        filtered = filtered.filter(p => p.category === categoryType);
    }

    // Apply search from URL
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query) ||
            p.region.toLowerCase().includes(query)
        );
    }

    // Apply sidebar category filter
    const activeCategory = document.querySelector('.category-filter-item.active');
    if (activeCategory && activeCategory.dataset.category !== 'all') {
        filtered = filtered.filter(p => p.category === activeCategory.dataset.category);
    }

    // Apply region filter
    const checkedRegions = Array.from(document.querySelectorAll('.region-filter input:checked'))
        .map(cb => cb.value);
    if (checkedRegions.length > 0) {
        filtered = filtered.filter(p => 
            checkedRegions.some(region => p.region.toLowerCase().includes(region.toLowerCase()))
        );
    }

    // Apply eco rating filter
    const ecoRange = document.querySelector('.eco-range input[type="range"]');
    if (ecoRange) {
        const minEco = parseInt(ecoRange.value);
        filtered = filtered.filter(p => p.ecoRating >= minEco);
    }

    // Apply sorting
    const sortSelect = document.querySelector('.sort-dropdown');
    if (sortSelect) {
        const sortBy = sortSelect.value;
        switch (sortBy) {
            case 'price-low':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filtered.sort((a, b) => b.price - a.price);
                break;
            case 'eco-high':
                filtered.sort((a, b) => b.ecoRating - a.ecoRating);
                break;
            case 'name':
                filtered.sort((a, b) => a.name.localeCompare(b.name));
                break;
        }
    }

    renderProducts(filtered);
}

/* ============================================
   PRODUCT DETAILS FUNCTIONS
============================================ */

function loadProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    if (!productId || typeof products === 'undefined') return;

    const product = products.find(p => p.id === parseInt(productId));
    if (!product) {
        window.location.href = 'category.html';
        return;
    }

    // Update page content
    document.title = `${product.name} - Swadeshi Vyapar`;

    const container = document.querySelector('.product-details-container');
    if (container) {
        container.innerHTML = `
            <div class="product-gallery">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-detail-info">
                <h1>${product.name}</h1>
                <p class="product-detail-region"><i class="fas fa-map-marker-alt"></i> ${product.region}</p>
                <p class="product-detail-price">₹${product.price.toLocaleString('en-IN')}</p>
                <p class="product-description">${product.description}</p>
                
                <div class="eco-rating-section">
                    <h4><i class="fas fa-leaf"></i> Eco Rating</h4>
                    <div class="eco-bar">
                        <span style="width: ${product.ecoRating}%"></span>
                    </div>
                    <div class="eco-rating-value">
                        <span>Eco Score: ${product.ecoRating}%</span>
                        <span><i class="fas fa-star"></i> E-Points: +${Math.floor(product.ecoRating / 10)}</span>
                    </div>
                </div>
                
                <div class="product-detail-actions">
                    <button class="btn btn-secondary" onclick="addToCart(${product.id})"><i class="fas fa-cart-plus"></i> Add to Cart</button>
                    <a href="checkout.html?buy=${product.id}" class="btn btn-primary"><i class="fas fa-bolt"></i> Buy Now</a>
                </div>
            </div>
        `;
    }
}

/* ============================================
   UTILITY FUNCTIONS
============================================ */

// Show toast notification
function showToast(message, type = 'success') {
    // Remove existing toast
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }

    // Create new toast
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);

    // Show toast
    setTimeout(() => toast.classList.add('show'), 100);

    // Hide and remove toast
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Format price
function formatPrice(price) {
    return '₹' + price.toLocaleString('en-IN');
}

// Debounce function
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
