const mainHeader = document.querySelector("#main-header");
const mainFooter = document.querySelector("#main-footer");

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