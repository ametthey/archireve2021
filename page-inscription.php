<?php acf_form_head(); ?>
<?php
    /*
     * Template Name: inscription
     */

?>
<?php get_header(); ?>

<div class="container--connexion">
    <h1>INSCRIPTION</h1>

    <h2>ENTRER VOTRE ADRESSE MAIL POUR CRÉER VOTRE COMPTE</h2>

    <?php wp_register(); ?>

    <a class="connexion--already-user" href="<?php echo esc_url( get_page_link( 85 ) ); ?>">Archireveur ? Connectez vous</a>
</div>


<?php get_footer(); ?>
