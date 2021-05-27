<!DOCTYPE html>
<html <?php language_attributes(); ?>>
    <head>

        <meta charset="<?php bloginfo( 'charset' ); ?>">
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="profile" href="https://gmpg.org/xfn/11" />

        <?php wp_head(); ?>
    </head>
    <body <?php body_class() ?> >

        <header id="masthead" class="site-header" role="banner">

            <!-- Trigger a propos pour mobile -->
            <div id="header--mobile-apropos" class="button--round round--black"></div>

            <!-- Site branding -->
            <div class="site-branding">
                <a href="<?php echo get_post_type_archive_link( 'reve' ); ?>">
                    <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/assets/images/logo-one-line.svg" alt="">
                </a>
            </div>

            <!-- Connexion pour mobile -->
            <div id="mobile--connexion" class="button--rounded"><a href="<?php echo esc_url( get_page_link( 85 ) ); ?>"><p>CONNEXION</p></a></div>


        </header>

        <div id="page">

