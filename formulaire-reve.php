<?php
/*
 * Template Name: Formulaire en front inscription
 */
        acf_form_head(); ?>
<?php get_header(); ?>

<?php while ( have_posts() ) : the_post(); ?>
<?php acf_form('new-dream'); ?>
 <?php endwhile; ?>

<?php //echo do_shortcode( '[advanced_form form="form_602bcd072ff07"]' ); ?>

<?php get_footer(); ?>
