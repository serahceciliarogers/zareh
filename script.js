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
});
