<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <?php wp_head(); ?>
</head>
<body <?php body_class( 'bg-white text-gray-900 dark:bg-gray-950 dark:text-white' ); ?>>
<?php wp_body_open(); ?>
<header class="border-b border-gray-200 dark:border-gray-800">
  <div class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
    <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="text-xl font-bold">
      <?php bloginfo( 'name' ); ?>
    </a>
    <nav>
      <?php wp_nav_menu( [ 'theme_location' => 'primary', 'container' => false,
        'menu_class' => 'flex gap-6 text-sm text-gray-600 dark:text-gray-300' ] ); ?>
    </nav>
  </div>
</header>
