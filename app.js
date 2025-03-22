let currentImageIndex = 0;
const images = [
    "./images/img2.webp",
    "./images/appearance.webp", 
    "./images/img1.webp",
    "./images/img3.webp",
    "./images/masa.webp",
    "./images/konferans.webp", 
    "./images/mavimasa.webp",
    "./images/mormasa.webp",
    "./images/halay.webp",
    "./images/img4.webp",
    "./images/ictasarim3.webp",
    "./images/ictasarim2.webp",
    "./images/img6.webp",
    "./images/img8.webp",
    "./images/img7.webp",
];

if (window.innerWidth <= 768) {
    document.getElementById('hero-img').src = './images/appearencemobil.webp';
} else {
    document.getElementById('hero-img').src = './images/appearance.webp';
}

function changeImage(direction) {
    currentImageIndex += direction;

    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }

    document.getElementById("current-image").src = images[currentImageIndex];
}

function openLightbox(element) {
    if (event.target.tagName !== 'BUTTON') {
        const img = element.querySelector('img');
        const lightbox = document.getElementById('lightbox');
        const lightboxImage = document.getElementById('lightbox-image');
        lightboxImage.src = img.src;
        lightbox.style.display = 'flex';
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

let currentVideoIndex = 0;
const videos = [
    "https://www.youtube.com/embed/G24ENGNhezY",
    "https://www.youtube.com/embed/89Q6_22u4aQ",
    "https://www.youtube.com/embed/iMNcxq4BYCo",
    "https://www.youtube.com/embed/PGBNkacDhCc",
    "https://www.youtube.com/embed/5egNqD85mw0",
    "https://www.youtube.com/embed/KkYWfhBQbp4",
    "https://www.youtube.com/embed/YhimvTdywdk",
];

function changeVideo(direction) {
    currentVideoIndex += direction;

    if (currentVideoIndex < 0) {
        currentVideoIndex = videos.length - 1;
    } else if (currentVideoIndex >= videos.length) {
        currentVideoIndex = 0;
    }

    document.getElementById("video-player").src = videos[currentVideoIndex];
}

window.onscroll = function () {
    var button = document.getElementById("scrollToTop");
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}


let touchStartX = 0;
let touchEndX = 0;
const galleryImage = document.getElementById("current-image");

galleryImage.addEventListener("touchstart", function (event) {
    touchStartX = event.touches[0].clientX;
});

galleryImage.addEventListener("touchmove", function (event) {
    touchEndX = event.touches[0].clientX;
});

galleryImage.addEventListener("touchend", function () {
    let swipeDistance = touchStartX - touchEndX;
    if (swipeDistance > 50) {
        changeImage(1); 
    } else if (swipeDistance < -50) {
        changeImage(-1);
    }
});
