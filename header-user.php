<!DOCTYPE html>
<html <?php language_attributes(); ?>>
    <head>

        <meta charset="<?php bloginfo( 'charset' ); ?>">
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="profile" href="https://gmpg.org/xfn/11" />

        <?php wp_head(); ?>
    </head>
    <body <?php body_class( 'body-user' ) ?> >

        <header id="header-user">
            <a class="header-user" href="<?php echo get_post_type_archive_link( 'reve' ); ?>">

                <?php get_template_part( 'template-parts/content', 'logo' ); ?>

            </a>
        </header>

        <div id="page" class="front-page">

