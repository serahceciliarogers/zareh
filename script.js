document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.seamless-image');
    const navDots = document.querySelectorAll('.nav-dot');

    // Update active dot on window scroll
    window.addEventListener('scroll', () => {
        let currentImageIndex = 0;

        images.forEach((img, index) => {
            const imgTop = img.offsetTop;
            // Catch the scroll slightly before the image reaches the absolute top
            if (window.scrollY >= imgTop - window.innerHeight / 2) {
                currentImageIndex = index;
            }
        });

        // Remove active class from all
        navDots.forEach(dot => dot.classList.remove('active'));
        // Add active class to current
        if (navDots[currentImageIndex]) {
            navDots[currentImageIndex].classList.add('active');
        }
    });

    // Carousel Logic for Section 2
    const track = document.getElementById('glimpses-track');
    const nextBtn = document.getElementById('next-glimpse');
    let currentSlideIndex = 0;

    if (track && nextBtn) {
        nextBtn.addEventListener('click', () => {
            const images = track.querySelectorAll('.carousel-image');
            const totalImages = images.length;
            
            // We show 3 images at a time, scroll by 1 image (33.333%)
            if (currentSlideIndex < totalImages - 3) {
                currentSlideIndex++;
            } else {
                currentSlideIndex = 0; // Loop back to start
            }
            
            const scrollPercentage = -(currentSlideIndex * 33.3333);
            track.style.transform = `translateX(${scrollPercentage}%)`;
        });
    }

    // Lightbox Logic for Artisan Profiles
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');
    const triggers = document.querySelectorAll('.lightbox-trigger');

    if (lightbox && lightboxImg && closeBtn) {
        triggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                const imageSrc = trigger.getAttribute('data-image');
                if (imageSrc) {
                    lightboxImg.src = imageSrc;
                    lightbox.style.display = 'flex';
                }
            });
        });

        // Close lightbox when clicking the X
        closeBtn.addEventListener('click', () => {
            lightbox.style.display = 'none';
        });

        // Close lightbox when clicking anywhere outside the image
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.style.display = 'none';
            }
        });
    }
});
