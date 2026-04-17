<article class="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
  <?php if ( has_post_thumbnail() ) : ?>
    <a href="<?php the_permalink(); ?>">
      <?php the_post_thumbnail( 'medium', [ 'class' => 'w-full h-48 object-cover' ] ); ?>
    </a>
  <?php endif; ?>
  <div class="p-5">
    <h2 class="text-lg font-semibold mb-2">
      <a href="<?php the_permalink(); ?>" class="hover:text-blue-600 dark:hover:text-blue-400">
        <?php the_title(); ?>
      </a>
    </h2>
    <p class="text-sm text-gray-500 dark:text-gray-400 mb-3"><?php echo get_the_date(); ?></p>
    <p class="text-sm text-gray-600 dark:text-gray-300"><?php the_excerpt(); ?></p>
  </div>
</article>
