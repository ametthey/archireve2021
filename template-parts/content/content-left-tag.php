<div class="tagsearch--container left--filter">
    <?php the_field('autocomplete_search_bar'); ?>
    <input type="text" class="tagsearch" placeholder="RECHERCHER UN TAG..." />
    <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/assets/images/loupe.svg">
</div>

<?php

    // https://designorbital.com/snippets/how-to-get-all-taxonomies-for-a-post-type/
    $terms = get_terms( 'customtag' );

    // Afficher de tags sur 3 rangées,
    // peut varié en fonction de la longueur du mot
    $terms = array_slice($terms, 0, 10);
    echo '<div class="tagitems--container left--filter">';
        foreach ( $terms as $term ) {
            echo '<button class="tagitem button--squared no-button-style" data-filter=".' . $term->slug . '"><h4>' . $term->name . '</h4></button>';
        }
    echo '</div>';
?>
