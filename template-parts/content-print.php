<div class="reve--to-print" id="reve--print<?php echo $i ?>">
    <table class="table--print">
            <tr>
                <td>Date</td>
                <td><?php echo get_the_date( 'd/m/Y' );?></td>
            </tr>

            <tr>
                <td>Nom de l'auteur</td>
                <td><?php echo get_the_author_meta( "nickname", false ); ?></td>
            </tr>

            <tr>
                <td>Titre du rêve</td>
                <td class="table--print-title"><?php echo strtolower(str_replace(' ', '', get_the_title())); ?></p></td>
            </tr>

            <tr>
                <td>Texte du rêve</td>
                <td><?php the_field( 'contenu_texte' ); ?></td>
            </tr>

            <tr>
                <td>Typologie du rêve</td>
                <td>
                    <?php if ( $term_typologie ) : ?>
                        <?php if ( $term_typologie->name === 'Cauchemar' ) : ?>
                            <!-- CAUCHEMAR -->
                            <?php echo esc_html( $term_typologie->name ); ?>
                        <?php endif; ?>

                        <?php if ( $term_typologie->name === 'Rêve Concomitant' ) : ?>
                            <?php echo esc_html( $term_typologie->name ); ?>
                        <?php endif; ?>

                        <?php if ( $term_typologie->name === 'Rêve Créatif' ) : ?>
                            <?php echo esc_html( $term_typologie->name ); ?>
                        <?php endif; ?>

                        <?php if ( $term_typologie->name === 'Rêve d\'actualité' ) : ?>
                            <?php echo esc_html( $term_typologie->name ); ?>
                        <?php endif; ?>

                        <?php if ( $term_typologie->name === 'Rêve lucide') : ?>
                            <?php echo esc_html( $term_typologie->name ); ?>
                        <?php endif; ?>

                        <?php if ( $term_typologie->name === 'Rêve prémonitoire') : ?>
                            <?php echo esc_html( $term_typologie->name ); ?>
                        <?php endif; ?>

                        <?php if ( $term_typologie->name === 'Rêve Récurrent') : ?>
                            <?php echo esc_html( $term_typologie->name ); ?>
                        <?php endif; ?>

                        <?php if ( $term_typologie->name === 'Rêve sexuel') : ?>
                            <?php echo esc_html( $term_typologie->name ); ?>
                        <?php endif; ?>
                    <?php endif; ?>
                </td>
            </tr>
            <tr>
                <td>Niveau de lucidité du rêve</td>
                <td>
                    <!-- niveau de lucidité -->
                    <?php if ( $term_lucidite ) : ?>
                        <?php echo esc_html( $term_lucidite->name ); ?>
                    <?php endif; ?>
                </td>
            </tr>
    </table>







</div>
