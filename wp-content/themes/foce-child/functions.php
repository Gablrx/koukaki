<?php
function theme_enqueue_styles_and_scripts()
{
    //  Stylesheet theme parent
    wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');

    // Style theme enfant
    wp_enqueue_style('child-style', get_stylesheet_directory_uri() . '/style.css', array('parent-style'));

    // Custom scripts
    wp_enqueue_script('banner-parallaxe', get_stylesheet_directory_uri() . '/js/banner-parallaxe.js', array(), '1.0.0', true);
    wp_enqueue_script('anim-titles', get_stylesheet_directory_uri() . '/js/anim-titles.js', array(), '1.0.0', true);
    wp_enqueue_script('clouds', get_stylesheet_directory_uri() . '/js/clouds.js', array(), null, true);

    //  Swiper JS library 
    wp_register_script('swiperJs', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js', array(), null, true);
    wp_enqueue_script('swiperJs');
    wp_enqueue_script('charactersSwiper', get_stylesheet_directory_uri() . '/js/charactersSwiper.js', array('swiperJs'), null, true);
}

add_action('wp_enqueue_scripts', 'theme_enqueue_styles_and_scripts');

// Get customizer options form parent theme
if (get_stylesheet() !== get_template()) {
    add_filter('pre_update_option_theme_mods_' . get_stylesheet(), function ($value, $old_value) {
        update_option('theme_mods_' . get_template(), $value);
        return $old_value; // prevent update to child theme mods
    }, 10, 2);
    add_filter('pre_option_theme_mods_' . get_stylesheet(), function ($default) {
        return get_option('theme_mods_' . get_template(), $default);
    });
}
