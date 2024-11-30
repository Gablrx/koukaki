// Attends que le contenu de la page soit complètement chargé avant d'exécuter le script.
document.addEventListener('DOMContentLoaded', (event) => {

    // ANIMATION TITRES :
    // IntersectionObserver pour détecter le titre est visible par l'utilisateur



    // Déclenche ou supprime l'animation selon la visibilité de .titre.
    const titreObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Ajoute la classe 'animation-titre' si visible
                entry.target.classList.add('animation-titre');
            } else {
                // Réinitialise si .titre n'est plus visible.
                entry.target.classList.remove('animation-titre');
            }
        });
    }, { threshold: 0.3 }); // 30% de l'élément doit être visible
    // Observe les éléments avec la classe 'titre'
    const titres = document.querySelectorAll('.titre');
    titres.forEach(titre => {
        titreObserver.observe(titre);
    });


    // FADE IN SECTIONS



    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Ajoute la classe 'section-visible' lorsque la classe 'fade' entrent dans le viewport
                entry.target.classList.add('section-visible'); // opacity: 1;
            }
        });
    }, { threshold: 0.2 }); // 20% de l'élément doit être visible pour déclencher
    // Observe tous les éléments avec classe 'fade'
    const sections = document.querySelectorAll('.fade');
    sections.forEach(section => {
        sectionObserver.observe(section);
    });

});