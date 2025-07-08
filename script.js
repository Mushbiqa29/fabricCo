// Toggle Hamburger Menu
function toggleMenu() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.toggle('active');
  const hamburger = document.getElementById('hamburger');
    hamburger.classList.toggle('active');
}

// Scroll Effect for Fabric PNGs
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const hero = document.querySelector('.hero');
  const heroHeight = hero.offsetHeight;
  const imgs = document.querySelectorAll('.fabric-img');

  imgs.forEach(img => {
    if (scrolled > heroHeight / 2) {
      img.classList.add('floating-hidden');
    } else {
      img.classList.remove('floating-hidden');
}
});
});
window.addEventListener("scroll", () => {
  const section = document.getElementById("about");
  const rect = section.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    section.classList.add("reveal");
}
});
// Preloader Animation
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  setTimeout(() => {
    gsap.to(preloader, {
      opacity: 0,
      duration: 1,
      onComplete: () => preloader.style.display = 'none'
    });
  }, 3000);
});

// GSAP Scroll Effects
window.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".hero-content", {
    opacity: 0,
    y: 60,
    duration: 1.2
  });

  gsap.from("#about .container", {
    scrollTrigger: "#about",
    opacity: 0,
    x: -100,
    duration: 1
  });

  gsap.from("#products .card", {
    scrollTrigger: "#products",
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1
  });

  gsap.from("#customizer .container", {
    scrollTrigger: "#customizer",
    opacity: 0,
    scale: 0.9,
    duration: 1
  });

  gsap.from("#process .step", {
    scrollTrigger: "#process",
    opacity: 0,
    y: 30,
    stagger: 0.2,
    duration: 1
  });

  gsap.from("footer", {
    scrollTrigger: "footer",
    opacity: 0,
    y: 30,
    duration: 1
  });
});
let track = document.getElementById('carouselTrack');
let currentIndex = 0;

function updateCarousel() {
  const cards = document.querySelectorAll('.carousel-card');
  const cardWidth = cards[0].offsetWidth + 30; // card + margin
  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

function prevSlide() {
  const cards = document.querySelectorAll('.carousel-card');
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
}
function nextSlide() {
  const cards = document.querySelectorAll('.carousel-card');
  const maxIndex = cards.length - Math.floor(track.offsetWidth / cards[0].offsetWidth);

  if (currentIndex < maxIndex) {
    currentIndex++;
    updateCarousel();
}
}

window.addEventListener('resize', updateCarousel);

// Fabric Preview Tool
function previewFabric() {
  const type = document.getElementById('type').value;
  const color = document.getElementById('color').value;
  const patternInput = document.getElementById('pattern');
  const gallery = document.getElementById('preview-gallery');

  gallery.innerHTML = '';

  const previewCard = document.createElement('div');
  previewCard.className = 'preview-card';
  previewCard.innerHTML = `<h4>${type}</h4><div class="color-block" style="background:${color}; height:100px; border-radius:5px;"></div>`;

  if (patternInput.files && patternInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = document.createElement('img');
      img.src = e.target.result;
      img.className = 'pattern-img';
      previewCard.appendChild(img);
    };
    reader.readAsDataURL(patternInput.files[0]);
  }

  gallery.appendChild(previewCard);
}
const videoSources = {
  raw: "vedio1.mp4",
  carding: "vedio2.mp4",
  weaving: "vedio3.mp4",
  dyeing: "vedio4.mp4",
  finishing: "vedio5.mp4",
  packaging: "vedio6.mp4"
};

function openVideo(step) {
  const modal = document.getElementById("videoModal");
  const video = document.getElementById("stepVideo");
  const source = video.querySelector("source");

  if (videoSources[step]) {
    source.src = videoSources[step];
    video.load();
    modal.style.display = "block";
  } else {
    alert("Video not found for this step.");
  }
}

function closeVideo() {
  const modal = document.getElementById("videoModal");
  const video = document.getElementById("stepVideo");
  modal.style.display = "none";
  video.pause();
  video.currentTime = 0;
}

window.onclick = function (event) {
  const modal = document.getElementById("videoModal");
  if (event.target === modal) {
    closeVideo();
}
};
const bubblesContainer = document.querySelector('.bubbles');

for (let i = 0; i < 100; i++) {
  const bubble = document.createElement('div');
  bubble.className = 'bubble';
  bubble.style.setProperty('--size', `${2 + Math.random() * 4}rem`);
  bubble.style.setProperty('--distance', `${6 + Math.random() * 10}rem`);
  bubble.style.setProperty('--position', `${Math.random() * 100}%`);
  bubble.style.setProperty('--time', `${4 + Math.random() * 6}s`);
  bubble.style.setProperty('--delay', `${-1 * (Math.random() * 6)}s`);
  bubblesContainer.appendChild(bubble);
}
// Testimonial Auto Slider
const track2 = document.getElementById("testimonialTrack");
const dotsContainer = document.getElementById("testimonialDots");
const cards = track2.children;
let index = 0;

// Create dots
for (let i = 0; i < cards.length; i++) {
  const dot = document.createElement("span");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => {
    index = i;
    updateTestimonial();
  });
  dotsContainer.appendChild(dot);
}
const dots = dotsContainer.children;

function updateTestimonial() {
  track2.style.transform = `translateX(-${index * 100}%)`;
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  dots[index].classList.add("active");
}

// Auto Scroll every 5 sec
setInterval(() => {
  index = (index + 1) % cards.length;
  updateTestimonial();
},5000);
