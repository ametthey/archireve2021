<!-- <div class="content&#45;&#45;left"> -->
<div class="content--left is-open">
    <div class="content--left-header">
        <div id="left--button" class="button--round round--black"></div>

<?php

    if ( is_user_logged_in() ) {
        if(current_user_can('administrator')) {
        } else if ( current_user_can('author') ){
            global $current_user;
            $pseudo = $current_user->user_nicename;
            wp_get_current_user();
            ?>

            <div id="left--connexion" class="button--rounded left--connexion-user">
                <a href="<?php echo esc_url( get_page_link( 199 ) ); ?>">
                    <p><?php echo $pseudo; ?></p>
                </a>
            </div>
            <div id="left--inscription" class="button--rounded rounded--black">
                <a href="<?php echo esc_url( get_page_link( 182 ) ) ;?>">
                    <p>Mes rêves</p>


            <?php
        }
    } else if ( ! is_user_logged_in() ) {
        ?>
            <div id="left--connexion" class="button--rounded">
                <a href="<?php echo esc_url( get_page_link( 194 ) ); ?>">
                    <p>CONNEXION</p>
                </a>
            </div>
            <div id="left--inscription" class="button--rounded rounded--black">
                <a href="<?php echo esc_url( get_page_link( 190 ) ) ;?>">
                    <p>INSCRIPTION</p>
                </a>
            </div>
        <?php
    }

?>
    </div>

    <div class="content--left-cover"><h3>filtres</h3> <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/assets/images/loupe.svg"></div>

    <?php get_template_part('template-parts/content/content', 'left-tag'); ?>

    <?php get_template_part('template-parts/content/content', 'left-lucidite'); ?>

    <?php get_template_part('template-parts/content/content', 'left-typologie'); ?>

    <?php get_template_part('template-parts/content/content', 'left-date'); ?>

    <!-- TÉLÉCHARGER ET SÉLECTIONNER -->
    <div class="button--download">
        <div class="button--rounded rounded--big">
            <h4>TÉLÉCHARGER LES RÊVES</h4>
        </div>
    </div>
    <div class="button--select">
        <div class="button--round round--white"></div>
        <p>TOUT SÉLECTIONNER</p>
    </div>
</div>
