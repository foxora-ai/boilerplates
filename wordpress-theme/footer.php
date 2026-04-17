<footer class="border-t border-gray-200 dark:border-gray-800 mt-16">
  <div class="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-500 dark:text-gray-400 flex justify-between">
    <span>&copy; <?php echo date( 'Y' ); ?> <?php bloginfo( 'name' ); ?></span>
    <?php wp_nav_menu( [ 'theme_location' => 'footer', 'container' => false,
      'menu_class' => 'flex gap-4' ] ); ?>
  </div>
</footer>
<?php wp_footer(); ?>
</body>
</html>
