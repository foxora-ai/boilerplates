<?php
function foxora_enqueue_scripts() {
    wp_enqueue_style(
        'foxora-style',
        get_template_directory_uri() . '/assets/css/style.css',
        [],
        '0.1.0'
    );
    wp_enqueue_script(
        'foxora-script',
        get_template_directory_uri() . '/assets/js/main.js',
        [],
        '0.1.0',
        true
    );
}
add_action( 'wp_enqueue_scripts', 'foxora_enqueue_scripts' );
