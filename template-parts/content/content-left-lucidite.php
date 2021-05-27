<?php
    // https://designorbital.com/snippets/how-to-get-all-taxonomies-for-a-post-type/
    $terms = get_terms( 'niveaudelucidite' );
    echo '<div class="lucidite--container">';
    foreach ( $terms as $term ) {
        echo '<div class="' . $term->slug . ' lucidite--item button--rounded"><h4>' . $term->name . '</h4></div>';
    }
    echo '</div>';
?>
