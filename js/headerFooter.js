const mainHeader = document.querySelector("#main-header");
const mainFooter = document.querySelector("#main-footer");

// insert all of the elements i want inside them
mainHeader.innerHTML = `
        <div class="container header-container">
        <img src="./imgs/main-logo.png" alt="Young Drivers logo" class="header-logo"/>
        <nav>
                <ul class="nav-links">
                    <li><a href="/index.html">Home</a></li>
                    <li><a href="/products.html?category=equipment">Equipment</a></li>
                    <li><a href="/products.html?category=party">Events</a></li>
                    <li><a href="#" class="btn">About Us</a></li>
                </ul>
            </nav>
            <div class="mobile-menu">&#9776;</div>
      </div>
`

mainFooter.innerHTML = `
        <p>77 Memorial Avenue, Orillia, Ontario Canada, L3V 5W9</p>
        <p>Phone: 705-327-RENT</p>
        <p>Complete Rent-Alls</p>
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

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});