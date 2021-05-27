<!-- https://developer.wordpress.org/reference/functions/set_query_var/ -->
<!-- https://qastack.fr/wordpress/176804/passing&#45;a&#45;variable&#45;to&#45;get&#45;template&#45;part -->
<!-- https://www.patricelaurent.net/passer&#45;variable&#45;get_template_part&#45;wordpress/ -->
<!-- UTILISER SET_QUERY_VAR PLUTOT -->
<?php $typologie_de_reve = get_field( 'typologie_de_reve' ); ?>
<?php $term = get_term_by( 'id', $typologie_de_reve, 'typologiedereve' ); ?>
<?php if ( $term ) : ?>

    <?php $niveau_de_lucidite = get_field( 'niveau_de_lucidite' ); ?>
    <?php $term_lucidite = get_term_by( 'id', $niveau_de_lucidite, 'niveaudelucidite' ); ?>
    <?php if ( $term_lucidite ) : ?>


    <div class="article-taxonomies--lucidite border-left-<?php echo esc_html( $term->slug ); ?> ">
        <div class="button--rounded rounded--lucidite" id="rounded--<?php echo esc_html( $term->slug ); ?>">
            <p><?php echo esc_html( $term_lucidite->name ); ?></p>
            <h1>COUCOU</h1>
        </div>
    </div>
    <?php endif; ?>

<?php endif; ?>
