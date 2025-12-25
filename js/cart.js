/* ============================================
   SWADESHI VYAPAR - Cart & Checkout Logic
============================================ */

document.addEventListener('DOMContentLoaded', function() {
    // Determine which page we're on
    if (document.querySelector('.cart-section')) {
        initCartPage();
    }
    if (document.querySelector('.checkout-section')) {
        initCheckoutPage();
    }
});

/* ============================================
   CART PAGE FUNCTIONS
============================================ */

function initCartPage() {
    renderCartItems();
    updateCartSummary();
}

function renderCartItems() {
    const cartItemsContainer = document.querySelector('.cart-items-list');
    const emptyCartContainer = document.querySelector('.empty-cart');
    const cartContainer = document.querySelector('.cart-container');
    const cart = getCart();

    if (cart.length === 0) {
        if (cartContainer) cartContainer.style.display = 'none';
        if (emptyCartContainer) emptyCartContainer.style.display = 'block';
        return;
    }

    if (cartContainer) cartContainer.style.display = 'grid';
    if (emptyCartContainer) emptyCartContainer.style.display = 'none';

    if (!cartItemsContainer) return;

    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item" data-id="${item.id}">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-info">
                <h3>${item.name}</h3>
                <p class="region"><i class="fas fa-map-marker-alt"></i> ${item.region}</p>
                <p class="price">₹${item.price.toLocaleString('en-IN')}</p>
                <p class="eco-info"><i class="fas fa-leaf"></i> Eco Rating: ${item.ecoRating}% | <i class="fas fa-star"></i> +${Math.floor(item.ecoRating / 10)} E-Points</p>
            </div>
            <div class="cart-item-actions">
                <div class="quantity-control">
                    <button onclick="changeQuantity(${item.id}, -1)"><i class="fas fa-minus"></i></button>
                    <span>${item.quantity}</span>
                    <button onclick="changeQuantity(${item.id}, 1)"><i class="fas fa-plus"></i></button>
                </div>
                <button class="remove-item" onclick="removeItem(${item.id})"><i class="fas fa-trash"></i> Remove</button>
            </div>
        </div>
    `).join('');
}

function updateCartSummary() {
    const cart = getCart();
    
    // Calculate totals
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const ePoints = cart.reduce((sum, item) => sum + Math.floor(item.ecoRating / 10) * item.quantity, 0);
    const shipping = subtotal > 500 ? 0 : 49;
    const total = subtotal + shipping;

    // Update DOM
    const subtotalEl = document.querySelector('.summary-subtotal');
    const itemsCountEl = document.querySelector('.summary-items-count');
    const shippingEl = document.querySelector('.summary-shipping');
    const totalEl = document.querySelector('.summary-total');
    const epointsEl = document.querySelector('.epoints-earned span');

    if (subtotalEl) subtotalEl.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
    if (itemsCountEl) itemsCountEl.textContent = `${totalItems} item(s)`;
    if (shippingEl) shippingEl.textContent = shipping === 0 ? 'FREE' : `₹${shipping}`;
    if (totalEl) totalEl.textContent = `₹${total.toLocaleString('en-IN')}`;
    if (epointsEl) epointsEl.textContent = `+${ePoints}`;
}

function changeQuantity(productId, change) {
    updateCartQuantity(productId, change);
    renderCartItems();
    updateCartSummary();
}

function removeItem(productId) {
    removeFromCart(productId);
    renderCartItems();
    updateCartSummary();
    showToast('Item removed from cart');
}

/* ============================================
   CHECKOUT PAGE FUNCTIONS
============================================ */

function initCheckoutPage() {
    loadOrderSummary();
    initCheckoutForm();
    handleBuyNow();
}

function handleBuyNow() {
    const urlParams = new URLSearchParams(window.location.search);
    const buyId = urlParams.get('buy');
    
    if (buyId && typeof products !== 'undefined') {
        const product = products.find(p => p.id === parseInt(buyId));
        if (product) {
            // Add single product for immediate checkout
            let cart = getCart();
            const existingItem = cart.find(item => item.id === product.id);
            
            if (!existingItem) {
                cart.push({
                    ...product,
                    quantity: 1
                });
                saveCart(cart);
            }
            
            loadOrderSummary();
        }
    }
}

function loadOrderSummary() {
    const orderItemsContainer = document.querySelector('.order-items');
    const cart = getCart();

    if (cart.length === 0) {
        window.location.href = 'cart.html';
        return;
    }

    if (!orderItemsContainer) return;

    // Calculate totals
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const ePoints = cart.reduce((sum, item) => sum + Math.floor(item.ecoRating / 10) * item.quantity, 0);
    const shipping = subtotal > 500 ? 0 : 49;
    const total = subtotal + shipping;

    // Render order items
    orderItemsContainer.innerHTML = cart.map(item => `
        <div class="order-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="order-item-details">
                <h4>${item.name}</h4>
                <p>Qty: ${item.quantity} × ₹${item.price.toLocaleString('en-IN')}</p>
            </div>
        </div>
    `).join('');

    // Update totals
    const subtotalEl = document.querySelector('.order-subtotal');
    const shippingEl = document.querySelector('.order-shipping');
    const totalEl = document.querySelector('.order-total');
    const epointsEl = document.querySelector('.order-epoints');

    if (subtotalEl) subtotalEl.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
    if (shippingEl) shippingEl.textContent = shipping === 0 ? 'FREE' : `₹${shipping}`;
    if (totalEl) totalEl.textContent = `₹${total.toLocaleString('en-IN')}`;
    if (epointsEl) epointsEl.textContent = `+${ePoints}`;
}

function initCheckoutForm() {
    const checkoutForm = document.querySelector('.checkout-form form');
    if (!checkoutForm) return;

    checkoutForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate form
        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const address = document.getElementById('address').value.trim();

        if (!name || !phone || !address) {
            showToast('Please fill all required fields', 'error');
            return;
        }

        if (!/^\d{10}$/.test(phone)) {
            showToast('Please enter a valid 10-digit phone number', 'error');
            return;
        }

        // Process order
        processOrder({
            name,
            phone,
            address,
            pincode: document.getElementById('pincode')?.value || '',
            city: document.getElementById('city')?.value || ''
        });
    });
}

function processOrder(customerDetails) {
    const cart = getCart();
    
    // Calculate E-Points to add
    const ePointsEarned = cart.reduce((sum, item) => 
        sum + Math.floor(item.ecoRating / 10) * item.quantity, 0
    );

    // Add E-Points
    addEPoints(ePointsEarned);

    // Save order to localStorage (for demo purposes)
    const order = {
        id: Date.now(),
        date: new Date().toISOString(),
        items: cart,
        customer: customerDetails,
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        ePointsEarned
    };

    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));

    // Clear cart
    localStorage.removeItem('cart');
    updateCartCount();

    // Show success modal
    showSuccessModal(ePointsEarned);
}

function showSuccessModal(ePoints) {
    const modal = document.querySelector('.success-modal');
    if (modal) {
        // Update E-Points in modal
        const epointsEl = modal.querySelector('.modal-epoints');
        if (epointsEl) epointsEl.textContent = `+${ePoints}`;

        const totalPointsEl = modal.querySelector('.modal-total-points');
        if (totalPointsEl) totalPointsEl.textContent = getEPoints();

        modal.classList.add('active');
    } else {
        // Fallback if modal not found
        alert(`Order placed successfully! You earned ${ePoints} E-Points!`);
        window.location.href = 'index.html';
    }
}

function closeSuccessModal() {
    const modal = document.querySelector('.success-modal');
    if (modal) {
        modal.classList.remove('active');
    }
    window.location.href = 'index.html';
}

/* ============================================
   HELPER FUNCTIONS (if not already defined)
============================================ */

// Ensure these functions exist if cart.js is loaded before app.js
if (typeof getCart !== 'function') {
    function getCart() {
        return JSON.parse(localStorage.getItem('cart')) || [];
    }
}

if (typeof saveCart !== 'function') {
    function saveCart(cart) {
        localStorage.setItem('cart', JSON.stringify(cart));
        if (typeof updateCartCount === 'function') {
            updateCartCount();
        }
    }
}

if (typeof updateCartQuantity !== 'function') {
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
}

if (typeof removeFromCart !== 'function') {
    function removeFromCart(productId) {
        let cart = getCart();
        cart = cart.filter(item => item.id !== parseInt(productId));
        saveCart(cart);
        return cart;
    }
}

if (typeof getEPoints !== 'function') {
    function getEPoints() {
        return parseInt(localStorage.getItem('epoints')) || 0;
    }
}

if (typeof addEPoints !== 'function') {
    function addEPoints(points) {
        const currentPoints = getEPoints();
        const newTotal = currentPoints + points;
        localStorage.setItem('epoints', newTotal);
        return newTotal;
    }
}

if (typeof showToast !== 'function') {
    function showToast(message, type = 'success') {
        const existingToast = document.querySelector('.toast');
        if (existingToast) existingToast.remove();

        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        document.body.appendChild(toast);

        setTimeout(() => toast.classList.add('show'), 100);
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }
}

if (typeof updateCartCount !== 'function') {
    function updateCartCount() {
        const cart = getCart();
        const count = cart.reduce((sum, item) => sum + item.quantity, 0);
        const badges = document.querySelectorAll('.cart-count');
        badges.forEach(badge => {
            badge.textContent = count;
            badge.style.display = count > 0 ? 'block' : 'none';
        });
    }
}
