<?php
function foxora_theme_setup() {
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'html5', [ 'search-form', 'comment-form', 'gallery', 'caption' ] );
    add_theme_support( 'customize-selective-refresh-widgets' );

    register_nav_menus( [
        'primary' => __( 'Primary Menu', 'foxora-theme' ),
        'footer'  => __( 'Footer Menu', 'foxora-theme' ),
    ] );
}
add_action( 'after_setup_theme', 'foxora_theme_setup' );
