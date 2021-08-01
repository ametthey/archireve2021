<!-- AUTHOR ET DATE DU POST -->
<div class="article-header--author-and-date background-<?php echo esc_html( $term_typologie->slug ); ?>">
    <span class="article-header-author"><?php echo get_the_author_meta( 'nickname', false ); ?></span> - <span class="article-header-date"><?php echo get_the_date( 'd/m/Y' );?></span>
</div>

<!-- TITRE DU REVE -->
<?php the_title( '<h1>', '</h1>' ); ?>


<!-- LIEN DE TELECHARGEMENT -->
<div class="article-reve--download border-left-<?php echo esc_html( $term_typologie->slug ); ?>">
    <div class="button--round round--white round--small button--select-to-download"></div>
    <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/assets/images/contenu_texte.svg" alt="">
</div>
