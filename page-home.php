<?php
/*
 * Template Name: home
 */

get_header(); ?>

<?php get_template_part( 'template-parts/content/content', 'left' ); ?>


<div class="content--home">
    <div class="content--home-text-border">
        <h3>LES RÊVES</h3>
    </div>

    <?php

        /*
         * ATTENTION, LE CONTENU DE LA QUERY EST LA MEME
         * QUE DANS LE TEMPLATE-PARTS
         */

        $args = array(
            'orderby' => 'date',
            'order'   => 'DESC',
            'post_type'      => 'reve',
            'posts_per_page' => -1
        );
        $home_projects = new WP_Query( $args );
        if ( $home_projects->have_posts() ) : $i = 0; while ( $home_projects->have_posts() ) : $home_projects->the_post(); $i++;

    ?>

    <?php $typologie_de_reve = get_field( 'typologie_de_reve' ); ?>
    <?php $term = get_term_by( 'id', $typologie_de_reve, 'typologiedereve' ); ?>

    <?php $niveau_de_lucidite = get_field( 'niveau_de_lucidite' ); ?>
    <?php $term_lucidite = get_term_by( 'id', $niveau_de_lucidite, 'niveaudelucidite' ); ?>

    <?php $tagElement = get_field( 'tag' ); ?>
    <?php $get_terms_args = array(
        'taxonomy' => 'customtag',
        'hide_empty' => 0,
        'include' => $tag,
    ); ?>
    <?php $tags = get_the_terms( $post->ID, 'customtag' ); ?>

    <?php if ( $term_lucidite  && $term  ) : ?>
    <article
        class="
        article-reve article-<?php echo esc_html( $term->slug); ;?> border-<?php echo esc_html( $term->slug ); ?> <?php echo esc_html( $term_lucidite->slug ); ?> <?php echo esc_html( $term->slug ); ?>
            <?php
                if ( !empty( $tags ) ) {
                    foreach( $tags as $tag ) {
                        echo $tag->name . ' ';
                    }
                }
            ?>
        "
        id="reve--<?php echo $i; ?>"
        data-filter-date=""
    >


        <div class="article-reve--header border-bottom-<?php echo esc_html( $term->slug ); ?>">
        <!-- AUTHOR ET DATE DU POST -->
        <div class="article-header--author-and-date background-<?php echo esc_html( $term->slug ); ?>">
            <span><?php echo get_the_author_meta( 'nickname', false ); ?></span> - <span class="article-header-date"><?php echo get_the_date( 'd/m/Y' );?></span>
        </div>

        <!-- TITRE DU REVE -->
        <h1><?php the_field( 'titre_du_reve' ); ?></h1>

        <!-- LIEN DE TELECHARGEMENT -->
        <div class="article-reve--download border-left-<?php echo esc_html( $term->slug ); ?>">
        <div class="button--round round--white round--small button--select-to-download"></div>

        <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/assets/images/contenu_texte.svg" alt="">
        </div>
        </div>

        <div class="article-reve--text border-bottom-<?php echo esc_html( $term->slug ); ?>">
        <!-- CONTENU -->
        <?php get_template_part( 'template-parts/reve/contenu' ); ?>
    </div>

        <div class="article-reve--taxonomies border-top-<?php echo esc_html( $term->slug ); ?>">

        <!-- TYPOLOGIE DE REVE -->
        <?php if ( $term ) : ?>
        <?php if ( $term->name === 'Cauchemar' ) : ?>
        <!-- CAUCHEMAR -->
        <div class="article-taxonomies--typologie border-right-<?php echo esc_html( $term->slug ); ?>">
        <img class="article-taxonomies--typologie-icone" src="<?php echo get_stylesheet_directory_uri(); ?>/dist/assets/images/cauchemar.svg">
        </div>
        <?php endif; ?>

    <?php if ( $term->name === 'Rêve Concomitant' ) : ?>
        <!-- REVE CONCOMITANT -->
        <div class="article-taxonomies--typologie border-right-<?php echo esc_html( $term->slug ); ?>">
        <img class="article-taxonomies--typologie-icone" src="<?php echo get_stylesheet_directory_uri(); ?>/dist/assets/images/reve-concomitant.svg">
        </div>
        <?php endif; ?>

    <?php if ( $term->name === 'Rêve Créatif' ) : ?>
        <!-- REVE CREATIF -->
        <div class="article-taxonomies--typologie border-right-<?php echo esc_html( $term->slug ); ?>">
        <img class="article-taxonomies--typologie-icone" src="<?php echo get_stylesheet_directory_uri(); ?>/dist/assets/images/reve-creatif.svg">
        </div>
        <?php endif; ?>

    <?php if ( $term->name === 'Rêve d\'actualité' ) : ?>
        <!-- REVE D ACTUALITE -->
        <div class="article-taxonomies--typologie border-right-<?php echo esc_html( $term->slug ); ?>">
        <img class="article-taxonomies--typologie-icone" src="<?php echo get_stylesheet_directory_uri(); ?>/dist/assets/images/reve-dactualite.svg">
        </div>
        <?php endif; ?>

    <?php if ( $term->name === 'Rêve lucide') : ?>
        <!-- REVE LUCIDE -->
        <div class="article-taxonomies--typologie border-right-<?php echo esc_html( $term->slug ); ?>">
        <img class="article-taxonomies--typologie-icone" src="<?php echo get_stylesheet_directory_uri(); ?>/dist/assets/images/reve-lucide.svg">
        </div>
        <?php endif; ?>

    <?php if ( $term->name === 'Rêve prémonitoire') : ?>
        <!-- REVE PREMONITOIRE -->
        <div class="article-taxonomies--typologie border-right-<?php echo esc_html( $term->slug ); ?>">
        <img class="article-taxonomies--typologie-icone" src="<?php echo get_stylesheet_directory_uri(); ?>/dist/assets/images/reve-premonitoire.svg">
        </div>
        <?php endif; ?>

    <?php if ( $term->name === 'Rêve Récurrent') : ?>
        <!-- REVE RECURRENT -->
        <div class="article-taxonomies--typologie border-right-<?php echo esc_html( $term->slug ); ?>">
        <img class="article-taxonomies--typologie-icone" src="<?php echo get_stylesheet_directory_uri(); ?>/dist/assets/images/reve-recurrent.svg">
        </div>
        <?php endif; ?>

    <?php if ( $term->name === 'Rêve sexuel') : ?>
        <!-- REVE SEXUEL -->
        <div class="article-taxonomies--typologie border-right-<?php echo esc_html( $term->slug ); ?>">
        <img class="article-taxonomies--typologie-icone" src="<?php echo get_stylesheet_directory_uri(); ?>/dist/assets/images/reve-sexuel.svg">
        </div>
        <?php endif; ?>

    <?php endif; ?>
    <?php // get_template_part( 'template-parts/reve/taxonomy/taxonomy', 'typologie' ); ?>

        <!-- CUSTOM TAG -->
        <?php get_template_part( 'template-parts/reve/taxonomy/taxonomy', 'tag' ); ?>

    <!-- NIVEAU DE LUCIDITE -->
        <?php // get_template_part( 'template-parts/reve/taxonomy/taxonomy', 'lucidite' ); ?>

    <?php if ( $term_lucidite ) : ?>
        <div class="article-taxonomies--lucidite border-left-<?php echo esc_html( $term->slug ); ?>">
            <div class="<?php echo esc_html( $term_lucidite->slug );?> button--rounded rounded--lucidite" id="rounded--<?php echo esc_html( $term->slug ); ?>"><p><?php echo esc_html( $term_lucidite->name ); ?></p></div>
        </div>
        <?php endif; ?>

    </div>



        </article>
        <?php endif; ?>
    <?php endwhile; endif; wp_reset_postdata(); ?> <!-- WP_Query for CPT project -->
</div>

<?php get_template_part( 'template-parts/content/content', 'right' ); ?>

<?php get_footer(); ?>
