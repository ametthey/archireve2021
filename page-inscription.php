<?php
    acf_form_head();
    /*
     * Template Name: inscription alternative
     */
?>
<?php get_header( 'user' ); ?>

<div class="container--inscription">
    <h1 class="container--inscription-title">INSCRIPTION</h1>

    <h2 class="container--inscription-subtitle">ENTRER VOTRE PSEUDO ET VOTRE ADRESSE MAIL POUR CRÉER VOTRE COMPTE</h2>

    <?php // echo do_shortcode(' [_themename_custom_registration]'); ?>
    <?php echo do_shortcode(' [user_registration_form id="456"] '); ?>



    <a class="connexion--already-user" href="<?php echo esc_url( get_page_link( 194 ) ); ?>">Archireveur ? Connectez vous</a>
</div>


<?php get_footer(); ?>
