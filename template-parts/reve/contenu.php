<?php if ( have_rows( 'choix_du_contenu' ) ): ?>
	<?php while ( have_rows( 'choix_du_contenu' ) ) : the_row(); ?>
		<?php if ( get_row_layout() == 'texte_uniquement' ) : ?>
			<p><?php the_sub_field( 'texte' ); ?></p>
		<?php elseif ( get_row_layout() == 'texte_&_dessin' ) : ?>
			<p><?php the_sub_field( 'texte' ); ?></p>
			<?php $dessin = get_sub_field( 'dessin' ); ?>
			<?php if ( $dessin ) : ?>
				<img src="<?php echo esc_url( $dessin['url'] ); ?>" alt="<?php echo esc_attr( $dessin['alt'] ); ?>" />
			<?php endif; ?>
		<?php endif; ?>
	<?php endwhile; ?>
<?php else: ?>
	<?php // no layouts found ?>
<?php endif; ?>
