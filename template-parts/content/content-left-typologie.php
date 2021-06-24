<div class="typopologie--container">
    <div class="swiper-container">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
        <?php
            $terms = get_terms( 'typologiedereve');
            $o = 0;

            foreach ( $terms as $term ) {
        ?>
            <div class="swiper-slide">
                <div class="typologie--item typologie--item-<?php echo $term->slug; ?>">
                    <input id="typologie-radio-input-<?php echo $o; ?>" type="checkbox" value=".<?php echo $term->slug; ?>" class="typologie--label-input <?php echo $term->slug; ?>">
                        <label for="typologie-radio-input-<?php echo $o; ?>" class="typologie--label typologie--label-radio typologie--element">
                            <div class="typologie--visuals">
                                <img class="typologie--item-image" src="<?php echo get_stylesheet_directory_uri(); ?>/dist/assets/images/<?php echo esc_html( $term->slug ); ?>.svg">
                                <p><?php echo $term->name; ?></p>
                            </div>
                        </label>
                    </input>
                </div>
            </div>
        <?php
            $o++;
            }
        ?>
        </div>

        <!-- If we need navigation buttons -->
        <div class="swiper-button-prev">
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/assets/images/fleche-gauche.svg" alt="">
        </div>
        <div class="swiper-button-next">
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/assets/images/fleche-droite.svg" alt="">
        </div>

    </div>
</div>
