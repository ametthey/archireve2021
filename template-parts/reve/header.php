<!-- AUTHOR ET DATE DU POST -->
<div class="article-header--author-and-date background-<?php echo esc_html( $term_typologie->slug ); ?>">
    <span class="article-header-author"><?php echo get_the_author_meta( 'nickname', false ); ?></span> - <span class="article-header-date"><?php echo get_the_date( 'd/m/Y' );?></span>
</div>

<!-- TITRE DU REVE -->
<?php the_title( '<h1>', '</h1>' ); ?>


<!-- LIEN DE TELECHARGEMENT -->
<div class="article-reve--download border-left-<?php echo esc_html( $term_typologie->slug ); ?>">

    <?php
        if ( is_page_template('page-back-office.php') ) {
?>

<a href="<?php the_permalink(); ?>">
    <button class="contenu--edit">
        <img class="contenu--edit" src="<?php echo get_stylesheet_directory_uri(); ?>/dist/assets/images/contenu_edit.svg" alt="">
    </button>
</a>
<?php

        } else {
?>
<div class="button--round round--white round--small button--select-to-download"></div>
    <!-- <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/assets/images/contenu_texte.svg" alt=""> -->
    <svg xmlns="http://www.w3.org/2000/svg" width="21.819" height="20.326" id="contenu--texte">
        <g fill="#303030">
            <rect class="rect--long" width="21" height="2" rx="1.24"/>
            <rect class="rect--short" width="15" height="2" rx="1.24" transform="translate(0 5.949)"/>
            <rect class="rect--long" width="21" height="2" rx="1.24" transform="translate(0 11.897)"/>
            <rect class="rect--short" width="15" height="2" rx="1.24" transform="translate(0 17.846)"/>
        </g>
    </svg>

<?php

        }

?>


</div>
