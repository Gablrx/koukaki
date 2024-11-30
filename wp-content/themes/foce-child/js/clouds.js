document.addEventListener('DOMContentLoaded', function () {
    const cloudsContainer = document.querySelector('.clouds-container');

    let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop; // Determine la direction de défilement actuelle
    let cloudsVisible = false;
    let initialVisibility = true; // Pour suivre la première fois que les nuages deviennent visibles

    // Intersection Observer pour détecter quand les nuages entrent dans la vue
    let observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            cloudsVisible = entry.isIntersecting;
            if (cloudsVisible && initialVisibility) {
                lastScrollTop = window.pageYOffset || document.documentElement.scrollTop; // Réinitialiser lastScrollTop
                initialVisibility = false;
            }
        });
    });

    observer.observe(cloudsContainer);

    window.addEventListener('scroll', function () {
        if (!cloudsVisible) return;

        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        let scrollDistance = scrollTop - lastScrollTop;

        let cloudsContainerPos = parseInt(getComputedStyle(cloudsContainer).right, 10) + scrollDistance;

        cloudsContainerPos = Math.min(cloudsContainerPos, 700); // 400 (position initiale) + 300
        cloudsContainerPos = Math.max(cloudsContainerPos, 400); // Position initiale

        cloudsContainer.style.right = cloudsContainerPos + 'px';

        lastScrollTop = scrollTop;
    });
});
