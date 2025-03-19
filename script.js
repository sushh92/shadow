// Sample product data
const products = [
    {
        id: 1,
        name: "Product 1",
        price: 29.99,
        images: [
            "./assets/images.jpg",
            "./assets/images1.jpg",
            "./assets/images.jpg",
            "./assets/images1.jpg",
            "./assets/images.jpg",
            "./assets/images1.jpg"
        ],
        description: "This is a sample product description."
    },
    {
        id: 2,
        name: "Product 2",
        price: 39.99,
        image: "./assets/images.jpg",
        description: "This is another sample product description."
    },
    {
        id: 3,
        name: "Product 3",
        price: 49.99,
        image: "./assets/images1.jpg",
        description: "This is a third sample product description."
    }
];

// DOM Elements
const productsContainer = document.getElementById('products-container');

// Display products
function displayProducts() {
    productsContainer.innerHTML = products.map(product => `
        <div class="product-card">
            ${product.images ? `
                <div class="image-gallery">
                    <div class="main-image">
                        <img src="${product.images[0]}" alt="${product.name}" class="product-image">
                    </div>
                    <div class="thumbnail-container">
                        ${product.images.map((img, index) => `
                            <img src="${img}" alt="${product.name} view ${index + 1}" 
                                 class="thumbnail ${index === 0 ? 'active' : ''}"
                                 onclick="changeMainImage(this, '${img}')">
                        `).join('')}
                    </div>
                </div>
            ` : `
                <img src="${product.image}" alt="${product.name}" class="product-image">
            `}
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <a href="https://wa.me/YOUR_PHONE_NUMBER?text=Hi, I'm interested in ${encodeURIComponent(product.name)} ($${product.price.toFixed(2)})" 
                   class="whatsapp-link" 
                   target="_blank">
                    <i class="fab fa-whatsapp"></i> Contact on WhatsApp
                </a>
            </div>
        </div>
    `).join('');
}

// Function to change main image
function changeMainImage(thumbnail, newSrc) {
    const mainImage = thumbnail.parentElement.previousElementSibling.querySelector('img');
    mainImage.src = newSrc;
    
    // Update active thumbnail
    thumbnail.parentElement.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.classList.remove('active');
    });
    thumbnail.classList.add('active');
}

// Initialize the page
displayProducts(); 