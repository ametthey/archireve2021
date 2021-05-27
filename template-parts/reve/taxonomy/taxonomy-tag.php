<?php $tag = get_field( 'tag' ); ?>
<?php if ( $tag ) : ?>
    <?php $get_terms_args = array(
        'taxonomy' => 'customtag',
        'hide_empty' => 0,
        'include' => $tag,
    ); ?>
    <div class="article-taxonomies--tag">
        <?php $terms = get_terms( $get_terms_args ); ?>
        <?php if ( $terms ) : ?>
        <?php foreach ( $terms as $term ) : ?>
        <?php echo '<div class="button--squared"><p>' . esc_html( $term->name ) . '</p></div>'; ?>
        <?php endforeach; ?>
        <?php endif; ?>
    </div>
<?php endif; ?>
