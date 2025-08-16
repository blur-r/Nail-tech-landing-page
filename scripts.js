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


    showGallery('acrylic');
});

VANTA.BIRDS({
    el: "#about",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    backgroundColor: 0x93369b,
    backgroundAlpha: 0
})

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

const images = {
    acrylic: [
        { a: "./images/acrylic 1a.jpg", b: "./images/acrylic 1b.jpg" },
        { a: "./images/acrylic 2a.png", b: "./images/acrylic 2b.png" },
        { a: "./images/acrylic 3a.png", b: "./images/acrylic 3b.png" },
        { a: "./images/acrylic 4a.png", b: "./images/acrylic 4b.png" }
    ],
    gel: [
        { a: "./images/gel 1a.png", b: "./images/gel 1b.png" },
        { a: "./images/gel 2a.png", b: "./images/gel 2b.png" },
        { a: "./images/gel 3a.png", b: "./images/gel 3b.png" },
        { a: "./images/gel 4a.png", b: "./images/gel 4b.png" },
        { a: "./images/gel 5a.png", b: "./images/gel 5b.png" },
        { a: "./images/gel 6a.png", b: "./images/gel 6b.png" },
        { a: "./images/gel 7a.png", b: "./images/gel 7b.png" },
        { a: "./images/gel 8.jpg" }
    ]
};

let currentSet = 'acrylic';
let currentIndex = 0;
let isShowingA = true;

function showGallery(set) {
    currentSet = set;
    const gallery = document.getElementById('gallery-img');
    const acrylicBtn = document.getElementById('acrylicBtn');
    const gelBtn = document.getElementById('gelBtn');


    if (set === 'acrylic') {
        acrylicBtn.classList.add('btn-active');
        gelBtn.classList.remove('btn-active');
    } else {
        gelBtn.classList.add('btn-active');
        acrylicBtn.classList.remove('btn-active');
    }

    gallery.innerHTML = '';
    images[set].forEach((pair, index) => {
        const img = document.createElement('img');
        img.src = pair.a;
        img.alt = `${set} ${index + 1}a`;
        img.onclick = () => openModal(index);
        gallery.appendChild(img);
    });
}

function openModal(index) {
    currentIndex = index;
    isShowingA = true;
    const modal = document.getElementById('modal');
    const expandedImage = document.getElementById('expandedImage');
    expandedImage.src = images[currentSet][currentIndex].a;
    expandedImage.alt = `${currentSet} ${currentIndex + 1}a`;
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

function changeImage(direction) {
    if (direction === 1 && isShowingA) {
        isShowingA = false;
    } else if (direction === -1 && !isShowingA) {
        isShowingA = true;
    } else {
        currentIndex = (currentIndex + direction + images[currentSet].length) % images[currentSet].length;
        isShowingA = direction === 1;
    }
    const expandedImage = document.getElementById('expandedImage');
    const pair = images[currentSet][currentIndex];
    expandedImage.src = isShowingA ? pair.a : pair.b;
    expandedImage.alt = `${currentSet} ${currentIndex + 1}${isShowingA ? 'a' : 'b'}`;
}

// Initialize with acrylic set
showGallery('acrylic');

// ScrollReveal animations
ScrollReveal().reveal('.hero-content', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 200,
    reset: false
});

ScrollReveal().reveal('.about h1, .about p', {
    origin: 'left',
    distance: '40px',
    duration: 800,
    interval: 150,
    reset: false
});

ScrollReveal().reveal('.service h1', {
    origin: 'top',
    distance: '30px',
    duration: 800,
    delay: 100,
    reset: false
});

ScrollReveal().reveal('.service-item', {
    origin: 'bottom',
    distance: '60px',
    duration: 1000,
    interval: 200,
    reset: false
});

ScrollReveal().reveal('.gallery h1, .gallery-btn', {
    origin: 'right',
    distance: '40px',
    duration: 800,
    delay: 100,
    reset: false
});

ScrollReveal().reveal('.contact h1, .contact-form, .contact-icon', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    interval: 200,
    reset: false
});

ScrollReveal().reveal('footer', {
    origin: 'bottom',
    distance: '20px',
    duration: 800,
    delay: 300,
    reset: false
});
