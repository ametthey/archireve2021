<div class="content--left">
    <div class="content--left-header">
        <div id="left--button" class="button--round round--white"></div>

<?php

    if ( is_user_logged_in() ) {
        if(current_user_can('administrator')) {
        } else if ( current_user_can('author') ){
            global $current_user;
            $pseudo = $current_user->user_nicename;
            wp_get_current_user();
            ?>

            <div id="left--connexion" class="left--filter button--rounded left--connexion-user">
                <a href="<?php echo $home_url . '/reveur_info/' . $pseudo; ?>">
                    <p><?php echo $pseudo; ?></p>
                </a>
            </div>
            <div id="left--inscription" class="left--filter button--rounded rounded--black left--inscription">
                <a href="<?php echo esc_url( get_page_link( 182 ) ) ;?>">
                    <p>Mes rêves</p>
                </a>
            </div>

            <?php
        }
    } else if ( ! is_user_logged_in() ) {
        ?>
            <div id="left--connexion" class="left--filter button--rounded">
                <a href="<?php echo esc_url( get_page_link( 194 ) ); ?>">
                    <p>CONNEXION</p>
                </a>
            </div>
            <div id="left--inscription" class="left--filter button--rounded rounded--black">
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

    <h4 class="content-left-container-title left--filter">Niveau de lucidité <img class="tooltip-icon" src="https://www.perimetre.studio/wp-content/uploads/2021/07/infoBulle.png">
        <span class="tooltip-text"><?php the_field( 'niveau_de_lucidite_tooltip', 'option'  ); ?></span>
    </h4>
    <?php get_template_part('template-parts/content/content', 'left-lucidite'); ?>

    <h4 class="content-left-container-title left--filter">Typologie de rêve <img class="tooltip-icon" src="https://www.perimetre.studio/wp-content/uploads/2021/07/infoBulle.png">
        <span class="tooltip-text"><?php the_field( 'recherce_typologie_de_reves', 'option'  ); ?></span>
    </h4>
    <?php get_template_part('template-parts/content/content', 'left-typologie'); ?>

    <!-- NEW FILTERS TEMPLATE PARTS -->
    <?php get_template_part( 'template-parts/left/filters'); ?>

    <h4 class="content-left-container-title left--filter">Période <img class="tooltip-icon" src="https://www.perimetre.studio/wp-content/uploads/2021/07/infoBulle.png">
        <span class="tooltip-text"><?php the_field( 'recherche_periode', 'option'  ); ?></span>
    </h4>
    <?php get_template_part('template-parts/content/content', 'left-date'); ?>

    <?php get_template_part('template-parts/content/content', 'left-buttons'); ?>


</div>
