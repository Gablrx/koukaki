<?php

get_header();
?>

<main id="primary" class="site-main">
    <section class="banner">

        <video autoplay loop muted playsinline class="fade-in-down">
            <source src=" <?php echo get_stylesheet_directory_uri() . '/assets/videos/StudioKoukaki-video-header-sans-son.mp4'; ?>" type="video/mp4">
            Video non prise en charge
        </video>

        <img class="fade-in-up" src="<?php echo get_template_directory_uri() . '/assets/images/logo.png'; ?> " alt="logo Fleurs d'oranger & chats errants">
    </section>
    <section id="story" class="story ">
        <div class="fade">
            <h2 class="titre">
                <span>L'histoire</span>
            </h2>


            <article id="" class="story__article">
                <p><?php echo get_theme_mod('story'); ?></p>
            </article>
        </div>
        <!-- Section des personnages : -->
        <?php get_template_part('template-parts/section-characters'); ?>

        <article id="place" class="">
            <div class="fade">

                <h3 class="titre"><span>Le Lieu</span></h3>
                <p><?php echo get_theme_mod('place'); ?></p>
            </div>
            <div class="clouds-container">
                <img src="./wp-content/themes/foce-child/assets/images/big_cloud.png" alt="Nuage 1" class="cloud cloud1">
                <img src="./wp-content/themes/foce-child/assets/images/little_cloud.png" alt="Nuage 2" class="cloud cloud2">
            </div>

        </article>

    </section>


    <section id="studio" class="fade">

        <h2 class="titre">
            <span>Studio Koukaki</span>
        </h2>
        <div>
            <p>Acteur majeur de l’animation, Koukaki est un studio intégré fondé en 2012 qui créé, produit et distribue des programmes originaux dans plus de 190 pays pour les enfants et les adultes. Nous avons deux sections en activité : le long métrage et le court métrage. Nous développons des films fantastiques, principalement autour de la culture de notre pays natal, le Japon.</p>
            <p>Avec une créativité et une capacité d’innovation mondialement reconnues, une expertise éditoriale et commerciale à la pointe de son industrie, le Studio Koukaki se positionne comme un acteur incontournable dans un marché en forte croissance. Koukaki construit chaque année de véritables succès et capitalise sur de puissantes marques historiques. Cette année, il vous présente “Fleurs d’oranger et chats errants”.</p>
        </div>

        <?php get_template_part('template-parts/section-oscars'); ?>
    </section>



</main><!-- #main -->

<?php
get_footer();
