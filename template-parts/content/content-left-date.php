<div class="calendrier--container">
    <div class="swiper-container swiper-container-date">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
            <?php
                // loop from 2018 to 2025
                for ( $date = 2018; $date <= 2025; $date++ ) {
                    ?>
                    <div class="swiper-slide">
                        <div class="calendrier--item">
                            <h4><?php echo $date; ?></h4>
                            <div class="calendrier--mois">
                                <div data-filter-date="" data-for-isotope="" class="mois--item button--round round--white">jan</div>
                                <div data-filter-date="" data-for-isotope="" class="mois--item button--round round--white">fév</div>
                                <div data-filter-date="" data-for-isotope="" class="mois--item button--round round--white">mar</div>
                                <div data-filter-date="" data-for-isotope="" class="mois--item button--round round--white">avr</div>
                                <div data-filter-date="" data-for-isotope="" class="mois--item button--round round--white">mai</div>
                                <div data-filter-date="" data-for-isotope="" class="mois--item button--round round--white">juin</div>
                                <div data-filter-date="" data-for-isotope="" class="mois--item button--round round--white">juillet</div>
                                <div data-filter-date="" data-for-isotope="" class="mois--item button--round round--white">aoû</div>
                                <div data-filter-date="" data-for-isotope="" class="mois--item button--round round--white">sep</div>
                                <div data-filter-date="" data-for-isotope="" class="mois--item button--round round--white">oct</div>
                                <div data-filter-date="" data-for-isotope="" class="mois--item button--round round--white">nov</div>
                                <div data-filter-date="" data-for-isotope="" class="mois--item button--round round--white">dec</div>
                            </div>
                        </div>
                    </div>
                    <?php
                }
            ?>

        </div>

        <!-- If we need navigation buttons -->
        <div class="swiper-button-prev swiper-date-button-prev">
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/assets/images/fleche-gauche.svg" alt="">
        </div>
        <div class="swiper-button-next swiper-date-button-next">
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/assets/images/fleche-droite.svg" alt="">
        </div>
    </div>

</div>
