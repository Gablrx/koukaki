
// Banner parallaxe logo sur video
document.addEventListener('scroll', function () {
    let scrolledHeight = window.pageYOffset;
    let bannerHeight = document.querySelector('.banner').offsetHeight;
    let img = document.querySelector('.banner img');

    // Limite à laquelle l'image commence à monter
    let limit = bannerHeight / 2; // à la moitié de la hauteur de la bannière


    if (scrolledHeight < limit) {
        // Avant d'atteindre la limite, l'image descend avec le défilement
        img.style.transform = 'translateY(' + (scrolledHeight * 0.5) + 'px)';
    } else {

        let imgPosition = (scrolledHeight - limit) * 0.5;// différence entre la hauteur défilée et la limite
        img.style.transform = 'translateY(' + (-imgPosition + limit * 0.5) + 'px)'; // L'image monte avec la vidéo
    }
});