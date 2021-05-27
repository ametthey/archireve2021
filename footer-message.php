

            </div><!-- #content -->

            <footer>


                <?php
                    if (! is_active_sidebar( 'my-footer-sidebar' )) {
                        return;
                    }
                ?>

                <?php dynamic_sidebar( 'my-footer-sidebar' ); ?>

            </footer>

        </div><!-- #page -->

        <?php wp_footer(); ?>
	</body>
</html>
