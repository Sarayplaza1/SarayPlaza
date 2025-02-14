let currentImageIndex = 0;
const images = [
    "./images/img2.JPG",
    "./images/appearance.JPG", 
    "./images/img1.JPG",
    "./images/img3.JPG",
    "./images/masa.jpg",
    "./images/konferans.jpg", 
    "./images/mavimasa.jpg",
    "./images/mormasa.jpg",
    "./images/halay.png",
    "./images/img4.JPG",
];

if (window.innerWidth <= 768) {
    document.getElementById('hero-img').src = './images/appearencemobil.png';
} else {
    document.getElementById('hero-img').src = './images/appearance.JPG';
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