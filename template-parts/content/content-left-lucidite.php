<?php
    // https://designorbital.com/snippets/how-to-get-all-taxonomies-for-a-post-type/
    $terms = get_terms( 'niveaudelucidite' );
    $o = 0;
    echo '<div class="lucidite--container left--filter">';
        echo '<h4 class="content-left-container-title">Niveau de lucidité <img class="tooltip-icon" src="https://www.perimetre.studio/wp-content/uploads/2021/07/infoBulle.png"></h4>';
        foreach ( $terms as $term ) {

            // EACH
            echo '<input id="radio-input-' . $o . '"type="checkbox" value=".' . $term->slug . '" class=" lucidite--label-input ' . $term->slug . ' "><label for="radio-input-' . $o . '" class="lucidite--label lucidite--label-radio lucidite--item button--rounded">' . $term->name . '</label>';
            $o++;
        }
        // TOUT
        // echo '<input id="radio-input-' . $o . '"type="checkbox" value="*" class="lucidite--label-input"><label for="radio-input-' . $o . '" class="lucidite--label lucidite--label-radio lucidite--item button--rounded lucidite--item-all">Tout</label>';

    echo '</div>';
?>
