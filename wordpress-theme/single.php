<?php get_header(); ?>
<main class="max-w-3xl mx-auto px-4 py-12">
  <?php while ( have_posts() ) : the_post(); ?>
    <article class="prose dark:prose-invert max-w-none">
      <h1 class="text-4xl font-bold mb-4"><?php the_title(); ?></h1>
      <div class="text-sm text-gray-500 mb-8">
        <?php echo get_the_date(); ?> &mdash; <?php the_author(); ?>
      </div>
      <?php if ( has_post_thumbnail() ) : ?>
        <div class="mb-8"><?php the_post_thumbnail( 'large', [ 'class' => 'rounded-xl w-full' ] ); ?></div>
      <?php endif; ?>
      <div class="text-gray-700 dark:text-gray-300 leading-relaxed">
        <?php the_content(); ?>
      </div>
    </article>
  <?php endwhile; ?>
</main>
<?php get_footer(); ?>
