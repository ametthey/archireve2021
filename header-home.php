<!DOCTYPE html>
<html <?php language_attributes(); ?>>
    <head>

        <meta charset="<?php bloginfo( 'charset' ); ?>">
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="profile" href="https://gmpg.org/xfn/11" />
        <link rel="stylesheet" href="https://use.typekit.net/gta0mfy.css">

        <?php wp_head(); ?>
    </head>
    <body <?php body_class() ?>>

        <?php get_template_part('template-parts/content', 'logo-home-animation'); ?>

        <div class="content">


        <header id="masthead" class="site-header header-home" role="banner">

            <!-- Trigger a propos pour mobile -->
            <div id="header--mobile-apropos" class="button--round round--black"></div>

            <!-- Site branding -->
            <div class="site-branding">
                <a href="<?php echo esc_url( get_permalink( 134 ) ); ?>" >
                    <?php get_template_part( 'template-parts/content', 'logo' ); ?>
                </a>
            </div>

            <!-- Connexion pour mobile -->
            <div id="mobile--connexion" class="button--rounded"><a href="<?php echo esc_url( get_page_link( 194 ) ); ?>"><p>CONNEXION</p></a></div>

        </header>

        <!-- A Propos for mobile -->
        <?php get_template_part( 'template-parts/content/content', 'right-propos-header' ); ?>

        <!-- <main id="swup" class="transition&#45;fade"> -->
        <div id="page">

