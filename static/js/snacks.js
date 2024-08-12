
  // Product Data

  const products = {
    "5rs": [
        {
            name: "Bhujia",
            price: "₹5",
            source: "snacks/bhujia.png",
        },
        {
            name: "Mini Aloo Bhujia",
            price: "₹5",
            image: "https://via.placeholder.com/150",
        },
        {
            name: "Mini Mix Namkeen",
            price: "₹5",
            image: "https://via.placeholder.com/150",
        },
        {
            name: "Mini Sev",
            price: "₹5",
            image: "https://via.placeholder.com/150",
        },
        {
            name: "Mini Chana Dal",
            price: "₹5",
            image: "https://via.placeholder.com/150",
        },
        {
            name: "Mini Moong Dal",
            price: "₹5",
            image: "https://via.placeholder.com/150",
        },
        {
            name: "Mini Peanuts",
            price: "₹5",
            image: "https://via.placeholder.com/150",
        },
        {
            name: "Mini Bhel",
            price: "₹5",
            image: "https://via.placeholder.com/150",
        },
    ],
    "10rs": [
        {
            name: "Bhujia",
            price: "₹10",
            image: "https://via.placeholder.com/150",
        },
        {
            name: "Aloo Bhujia",
            price: "₹10",
            image: "https://via.placeholder.com/150",
        },
        {
            name: "Mix Namkeen",
            price: "₹10",
            image: "https://via.placeholder.com/150",
        },
        {
            name: "Sev",
            price: "₹10",
            image: "https://via.placeholder.com/150",
        },
        {
            name: "Chana Dal",
            price: "₹10",
            image: "https://via.placeholder.com/150",
        },
        {
            name: "Moong Dal",
            price: "₹10",
            image: "https://via.placeholder.com/150",
        },
        {
            name: "Peanuts",
            price: "₹10",
            image: "https://via.placeholder.com/150",
        },
        {
            name: "Bhel",
            price: "₹10",
            image: "https://via.placeholder.com/150",
        },
    ],
    gift: [
        {
            name: "Premium Mix",
            price: "₹50",
            image: "https://via.placeholder.com/150",
        },
        {
            name: "Royal Bhujia",
            price: "₹50",
            image: "https://via.placeholder.com/150",
        },
        {
            name: "Festive Pack",
            price: "₹100",
            image: "https://via.placeholder.com/150",
        },
        {
            name: "Deluxe Namkeen",
            price: "₹100",
            image: "https://via.placeholder.com/150",
        },
        {
            name: "Special Combo",
            price: "₹150",
            image: "https://via.placeholder.com/150",
        },
        {
            name: "Family Pack",
            price: "₹200",
            image: "https://via.placeholder.com/150",
        },
        {
            name: "Party Mix",
            price: "₹250",
            image: "https://via.placeholder.com/150",
        },
        {
            name: "Celebration Pack",
            price: "₹300",
            image: "https://via.placeholder.com/150",
        },
    ],
};

// Function to show products based on category
function showCategory(category) {
    const container = document.getElementById("products-container");
    container.innerHTML = ""; // Clear existing products

    products[category].forEach((product) => {
        const productCard = `
        <div class="p-4  fade-in text-center">
            <img src="${product.source}" alt="${product.name}" class="h-40 w-full object-cover mb-4 rounded">
            <h3 class="text-xl font-semibold mb-2">${product.name}</h3>
            <p class="text-gray-600">${product.price}</p>
        </div>
    `;
        container.insertAdjacentHTML("beforeend", productCard);
    });

    // Add fade-in animation
    setTimeout(() => {
        document.querySelectorAll(".fade-in").forEach((el) => {
            el.classList.add("fade-in-active");
        });
    }, 100);
}

// Show default category (₹5 Products) on page load
showCategory("5rs");

// snackhead animation
const spans = document.querySelectorAll(".word span");

spans.forEach((span, idx) => {
    span.addEventListener("click", (e) => {
        e.target.classList.add("active");
    });
    span.addEventListener("animationend", (e) => {
        e.target.classList.remove("active");
    });

    // Initial animation
    setTimeout(() => {
        span.classList.add("active");
    }, 750 * (idx + 1));
});




document.addEventListener('DOMContentLoaded', function () {
let lastScrollTop = 0;
const navbar = document.getElementById('menu');

if (navbar) {
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scroll down: hide the navbar using GSAP
            gsap.to(navbar, {y: '-300%', duration: 0.3, ease: 'power2.out'});
        } else {
            // Scroll up: show the navbar using GSAP
            gsap.to(navbar, {y: '0%', duration: 0.3, ease: 'power2.out'});
        }

        lastScrollTop = scrollTop;
    });
}
});