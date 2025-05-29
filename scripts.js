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

// VANTA.BIRDS({
//     el: "#about",
//     mouseControls: true,
//     touchControls: true,
//     gyroControls: false,
//     minHeight: 200.00,
//     minWidth: 200.00,
//     scale: 1.00,
//     scaleMobile: 1.00,
//     backgroundColor: 0x93369b,
//     backgroundAlpha: 0
// })

// VANTA.FOG({
//     el: "#about",
//     mouseControls: true,
//     touchControls: true,
//     gyroControls: false,
//     minHeight: 1500.00,
//     minWidth: 200.00,
//     highlightColor: 0x93359c,
//     midtoneColor: 0xb76082,
//     lowlightColor: 0xffffff,
//     baseColor: 0xa37981,
//     blurFactor: 0.48,
//     backgroundAlpha: 0
// })