<?php
/*
 * Template Name: A propos
 */

get_header(); ?>



<div data-scroll-container class="content--apropos">
<!-- <div class="content&#45;&#45;apropos"> -->
    <div class="content--apropos-fading-container">
    <!-- <div data&#45;scroll&#45;container class="content&#45;&#45;apropos&#45;fading&#45;container"> -->
        <?php get_template_part( 'template-parts/content/content', 'right-propos-1' ); ?>
        <?php get_template_part( 'template-parts/content/content', 'right-propos-2' ); ?>
        <?php get_template_part( 'template-parts/content/content', 'right-propos-3' ); ?>
        <?php get_template_part( 'template-parts/content/content', 'right-propos-4' ); ?>
        <?php get_template_part( 'template-parts/content/content', 'right-propos-5' ); ?>
        <?php get_template_part( 'template-parts/content/content', 'right-propos-6' ); ?>
    </div>
</div>
<?php get_footer(); ?>

