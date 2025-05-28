document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-link'); // Select all nav links

    if (!hamburger || !navLinks) {
        console.error("Elements not found!");
        return;
    }

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Add click event to all nav links
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
});

// Remove the old linkAction function and related code