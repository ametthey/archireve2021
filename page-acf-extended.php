<?php
/*
 * Template Name: ACF Extended Form
 */

acf_form_head();
get_header(); ?>

<?php get_template_part( 'template-parts/content/content', 'left' ); ?>


<div class="content--home">

    <?php
        $fields = array(
            'field_602ba6887d298',	// titre
        );

        acf_register_form(array(
            'id'                => 'new-reve',
            'post_id'           => 'new_post',
            'new_post'          => array(
                'post_type'     => 'reve',
                'post_status'   => 'publish',
            ),
            'post_title'        => false,
            'post_content'      => false,
            'uploader'          => 'basic',
            'return'			=> home_url('thank-your-for-submitting-your-recipe'),
            'fields'            => $fields,
            'submit_value'      => 'Publier un nouveau rêve'
        ));

        // Load the form
        acf_form('new-reve');
    ?>

</div>

<?php get_template_part( 'template-parts/content/content', 'right' ); ?>

<?php get_footer(); ?>
