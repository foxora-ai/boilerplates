<?php get_header(); ?>
<main class="max-w-6xl mx-auto px-4 py-12">
  <?php if ( have_posts() ) : ?>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <?php while ( have_posts() ) : the_post(); ?>
        <?php get_template_part( 'template-parts/card' ); ?>
      <?php endwhile; ?>
    </div>
    <div class="mt-12"><?php the_posts_navigation(); ?></div>
  <?php else : ?>
    <p class="text-gray-500"><?php esc_html_e( 'No posts found.', 'foxora-theme' ); ?></p>
  <?php endif; ?>
</main>
<?php get_footer(); ?>
