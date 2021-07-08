<?php
/*
 * Template Name: back-office
 */

$pseudo = $current_user->user_nicename;

get_header(); ?>



<div class="content--home content--profil">

    <div class="profil--header">
        <h1><?php echo $pseudo; ?></h1>

        <div class="profil--header-links">
            <a href="<?php echo esc_url( get_permalink( 199 ) ); ?>">
                <h3 class="button--rounded rounded--big">Modifier le profil</h3>
            </a>
            <a href="<?php echo esc_url( get_permalink( 134 ) ); ?>">
                <h3 class="button--rounded rounded--big">Voir les rêves</h3>
            </a>
            <a href="<?php echo wp_logout_url( home_url( '/home/' ) ); ?>">
                <h3 class="button--rounded rounded--big">Se déconnecter</h3>
            </a>
        </div>
    </div>

    <?php


    // Si le user a déjà fait un post
    // Afficher les posts

    if ( is_user_logged_in() ) {
        if(current_user_can('administrator')) {
            echo 'Je suis administrator';
        } else if ( current_user_can('author') ){
            global $current_user;
            // get_currentuserinfo();
            wp_get_current_user();
            ?>

            <div class="profil--reve">

                <div class="profil--reve-new profil--reve-new-active">
                    <h2><a href="#">PUBLIER UN NOUVEAU RÊVE</a></h2>
                </div>

            <?php

            // Si le user n'a jamais posté de rêves
            // Proposer de poster son premier post
            $args = array(
                'author'  =>  $current_user->ID,
                'orderby' => 'date',
                'order'   => 'DESC',
                'post_type'      => 'reve',
                'posts_per_page' => -1
            );
            $home_projects = new WP_Query( $args );
            if ( $home_projects->have_posts() ) : while ( $home_projects->have_posts() ) : $home_projects->the_post();

            ?>

                <div class="profil--reve-published profil--reve-new">
                    <h1><?php the_field( 'titre_du_reve' ); ?></h1>
                </div>


            <?php
            endwhile; else :

            ?>


            <div class="profil--no-reve">
                <h2>UN RÊVE À PARTAGER ?</h2>
                <h2><a href="#">PUBLIE TON PREMIER RÊVE!</a></h2>
            </div>

            <?php


            endif; wp_reset_postdata();
            ?>

            </div>

            <div class="profil--empty"></div>

            <?php
        }
    } else if ( ! is_user_logged_in() ) {
        echo 'Vous n\'êtes pas autorisés à être ici !';
    }


    ?>



</div>

<?php get_footer(); ?>
