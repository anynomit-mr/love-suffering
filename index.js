
const sparkles = document.querySelectorAll('.sparkle');

function scatterSparkles() {
    sparkles.forEach((sparkle) => {
        const randomX = Math.random() * window.innerWidth; // Random X position
        const randomY = Math.random() * window.innerHeight; // Random Y position
        const delay = Math.random() * 2; // Random delay for twinkle
        sparkle.style.left = `${randomX}px`;
        sparkle.style.top = `${randomY}px`;
        sparkle.style.animationDelay = `${delay}s`;
    });
}

// Initial scatter on page load
scatterSparkles();

// Scatter again when the window is resized (to adapt to new viewport)

window.addEventListener('resize', scatterSparkles);