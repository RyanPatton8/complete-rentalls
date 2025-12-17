const mainHeader = document.querySelector("#main-header");
const mainFooter = document.querySelector("#main-footer");

// insert all of the elements i want inside them
mainHeader.innerHTML = `
        <div class="container header-container">
        <a href="index.html#"><img src="./imgs/main-logo.png" alt="Young Drivers logo" class="header-logo"/>
        </a>
        <nav>
                <ul class="nav-links">
                    <li><a href="index.html#">Home</a></li>
                    <li><a href="product-categories.html?category=Equipment">Equipment</a></li>
                    <li><a href="product-categories.html?category=Events">Events</a></li>
                    <li><a href="index.html#about-us-holder" class="btn">About Us</a></li>
                    <li><a href="index.html#contact-us-holder" class="btn">Contact Us</a></li>
                </ul>
            </nav>
            <div class="mobile-menu">&#9776;</div>
      </div>
`

mainFooter.innerHTML = `
        <div class="footer-contact">
            <a href="https://www.google.com/maps/search/?api=1&query=77%20Memorial%20Avenue%2C%20Orillia%2C%20Ontario%20Canada%2C%20L3V%205W9" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-location-dot"></i> 77 Memorial Avenue, Orillia, Ontario Canada, L3V 5W9</a>
            <a href="tel:+17053277368"><i class="fa-solid fa-phone"></i> 705-327-RENT</a>
        </div>
        <div class="socials">
            <a href="https://www.instagram.com/completerentallsorillia/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram">
                <i class="fa-brands fa-square-instagram"></i>
            </a>

            <a href="https://www.facebook.com/CompleteRentAllsOrillia/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook">
                <i class="fa-brands fa-square-facebook"></i>
            </a>
        </div>
`

// Mobile Menu Toggle
document.querySelector('.mobile-menu').addEventListener('click', function() {
    let navLinks = document.querySelector('.nav-links');
    if(!navLinks.classList.contains('open') && !navLinks.classList.contains('close')){
        navLinks.classList.toggle('open');
    }
    else{
        navLinks.classList.toggle('open');
        navLinks.classList.toggle('close');
    } 
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.remove('open');
        navLinks.classList.add('close');
    });
});


// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});