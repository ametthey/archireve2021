<?php
    // https://designorbital.com/snippets/how-to-get-all-taxonomies-for-a-post-type/
    $terms = get_terms( 'customtag' );

    // Afficher de tags sur 3 rangées,
    // peut varié en fonction de la longueur du mot
    $terms = array_slice($terms, 0, 10);
    echo '<div class="tagitems--container">';
    foreach ( $terms as $term ) {
        echo '<div class="tagitem button--squared"><h4>' . $term->name . '</h4></div>';
    }
    echo '</div>';
?>
