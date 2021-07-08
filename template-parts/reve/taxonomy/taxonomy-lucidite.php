<?php if ( $term_lucidite ) : ?>
    <div class="article-taxonomies--lucidite border-left-<?php echo esc_html( $term_typologie->slug ); ?>">
        <div class="<?php echo esc_html( $term_lucidite->slug );?> button--rounded rounded--lucidite" id="rounded--<?php echo esc_html( $term_typologie->slug ); ?>"><p><?php echo esc_html( $term_lucidite->name ); ?></p></div>
    </div>
<?php endif; ?>
