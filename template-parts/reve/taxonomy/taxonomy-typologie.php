<?php $typologie_de_reve = get_field( 'typologie_de_reve' ); ?>
<?php $term = get_term_by( 'id', $typologie_de_reve, 'typologiedereve' ); ?>
<?php if ( $term ) : ?>
    <?php if ( $term->name === 'Cauchemar' ) : ?>
    <!-- CAUCHEMAR -->
    <div class="article-taxonomies--typologie border-right-<?php echo esc_html( $term->slug ); ?>">
        <img class="article-taxonomies--typologie-icone" src="<?php echo get_stylesheet_directory_uri(); ?>/dist/assets/images/Cauchemar.svg">
    </div>
    <?php endif; ?>

    <?php if ( $term->name === 'Rêve Concomitant' ) : ?>
    <!-- REVE CONCOMITANT -->
    <div class="article-taxonomies--typologie border-right-<?php echo esc_html( $term->slug ); ?>">
        <img class="article-taxonomies--typologie-icone" src="<?php echo get_stylesheet_directory_uri(); ?>/dist/assets/images/ReveConcomitant.svg">
    </div>
    <?php endif; ?>

    <?php if ( $term->name === 'Rêve Créatif' ) : ?>
    <!-- REVE CREATIF -->
    <div class="article-taxonomies--typologie border-right-<?php echo esc_html( $term->slug ); ?>">
        <img class="article-taxonomies--typologie-icone" src="<?php echo get_stylesheet_directory_uri(); ?>/dist/assets/images/ReveCréatif.svg">
    </div>
    <?php endif; ?>

    <?php if ( $term->name === 'Rêve d\'actualité' ) : ?>
    <!-- REVE D ACTUALITE -->
    <div class="article-taxonomies--typologie border-right-<?php echo esc_html( $term->slug ); ?>">
        <img class="article-taxonomies--typologie-icone" src="<?php echo get_stylesheet_directory_uri(); ?>/dist/assets/images/ReveActualite.svg">
    </div>
    <?php endif; ?>

    <?php if ( $term->name === 'Rêve lucide') : ?>
    <!-- REVE LUCIDE -->
    <div class="article-taxonomies--typologie border-right-<?php echo esc_html( $term->slug ); ?>">
        <img class="article-taxonomies--typologie-icone" src="<?php echo get_stylesheet_directory_uri(); ?>/dist/assets/images/ReveLucide.svg">
    </div>
    <?php endif; ?>

    <?php if ( $term->name === 'Rêve prémonitoire') : ?>
    <!-- REVE PREMONITOIRE -->
    <div class="article-taxonomies--typologie border-right-<?php echo esc_html( $term->slug ); ?>">
        <img class="article-taxonomies--typologie-icone" src="<?php echo get_stylesheet_directory_uri(); ?>/dist/assets/images/RevePremonitoire.svg">
    </div>
    <?php endif; ?>

    <?php if ( $term->name === 'Rêve Récurrent') : ?>
    <!-- REVE RECURRENT -->
    <div class="article-taxonomies--typologie border-right-<?php echo esc_html( $term->slug ); ?>">
        <img class="article-taxonomies--typologie-icone" src="<?php echo get_stylesheet_directory_uri(); ?>/dist/assets/images/ReveRecurrent.svg">
    </div>
    <?php endif; ?>

    <?php if ( $term->name === 'Rêve sexuel') : ?>
    <!-- REVE SEXUEL -->
    <div class="article-taxonomies--typologie border-right-<?php echo esc_html( $term->slug ); ?>">
        <img class="article-taxonomies--typologie-icone" src="<?php echo get_stylesheet_directory_uri(); ?>/dist/assets/images/ReveSexuel.svg">
    </div>
    <?php endif; ?>

<?php endif; ?>
