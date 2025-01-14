<?php
$args = array(
    'post_type' => 'characters',
    'posts_per_page' => -1,
    'meta_key'  => '_main_char_field',
    'orderby'   => 'meta_value_num',

);
$characters_query = new WP_Query($args);
?>
<article id="characters" class="fade">

    <h3 class="titre"><span>Les personnages</span></h3>
    <!-- Swiper -->
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <?php while ($characters_query->have_posts()) : $characters_query->the_post(); ?>
                <div class="swiper-slide">
                    <figure>
                        <?php echo get_the_post_thumbnail(get_the_ID(), 'full'); ?>
                        <figcaption><?php the_title(); ?></figcaption>
                    </figure>
                </div>
            <?php endwhile; ?>
        </div>

    </div>
</article>