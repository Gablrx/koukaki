document.addEventListener('DOMContentLoaded', function () {
    let menuToggle = document.querySelector('.menu-toggle'); // btn du menu

    if (menuToggle) {
        menuToggle.addEventListener('click', function () {
            let menuFullScreen = document.querySelector('.menu-full-screen');

            let isOpen = menuToggle.getAttribute('aria-expanded') === 'true';

            if (isOpen) {
                menuFullScreen.classList.add('visible');
                document.querySelector('.menu-toggle').classList.add('croix');
            } else {
                // Sinon, retire la classe pour fermer le menu et remove la croix
                menuFullScreen.classList.remove('visible');
                document.querySelector('.menu-toggle').classList.remove('croix');
            }
        });
    }

    document.querySelectorAll('.menu-full-screen a').forEach(link => {
        link.addEventListener('click', () => {
            let menuFullScreen = document.querySelector('.menu-full-screen');
            menuFullScreen.classList.remove('visible');
            document.querySelector('.menu-toggle').classList.remove('croix');

            if (menuToggle) {
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });

});

