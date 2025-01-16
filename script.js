function shopNow() {
    alert("Redirecting to the shop...");
}

document.querySelector('.hamburger-menu').addEventListener('click', function() {
    document.querySelector('.mobile-nav-overlay').classList.toggle('show');
});

//slider 
let slideIndex = 1;
showSlides(slideIndex);

// Next/Previous Controls
function changeSlide(n) {
    showSlides(slideIndex += n);
}

// Dot Controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Display Slides
function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Autoplay Slider
setInterval(() => {
    changeSlide(1);
}, 5000);

/*Slider for home page watch display*/
function moveSlide(section, direction) {
    const slider = document.getElementById(`${section}-slider`);
    const sliderWidth = slider.clientWidth;
    slider.scrollLeft += sliderWidth * direction;
}

// Search functionality
function performSearch() {
    const query = document.getElementById('search').value;
    alert(`Searching for: ${query}`);
}

// Add to cart functionality
function addToCart(product) {
    alert(`${product} has been added to your cart.`);
}

// Cart functionality with remove button
let cart = [];

function loadCartItems() {
    const cartTable = document.getElementById('cart-items');
    cartTable.innerHTML = ''; // Clear existing table

    cart.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.name}</td>
            <td>$${item.price}</td>
            <td>${item.quantity}</td>
            <td>$${(item.price * item.quantity).toFixed(2)}</td>
            <td><button class="remove-btn" onclick="removeItem(${index})">Remove</button></td>
            `;
        cartTable.appendChild(row);
    });

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    document.getElementById('total-price').textContent = `$${totalPrice.toFixed(2)}`;
}

function removeItem(index) {
    cart.splice(index, 1);
    loadCartItems();
}

//payment popup
const productButton = document.querySelector(".buyButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
