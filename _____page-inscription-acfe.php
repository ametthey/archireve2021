<?php
    /*
     * Template Name: inscription acfe
     */
?>
<?php get_header( 'user' ); ?>

<?php

add_filter('acfe/form/load/user_id', 'my_form_user_values_source', 10, 3);
add_filter('acfe/form/load/user_id/form=nouvel-utilisateur', 'my_form_user_values_source', 10, 3);
add_filter('acfe/form/load/user_id/action=my-user-action', 'my_form_user_values_source', 10, 3);

/*
 * @int     $user_id  User ID used as source
 * @array   $form     The form settings
 * @string  $action   The action alias name
 */
add_filter('acfe/form/load/user_id/form=nouvel-utilisateur', 'my_form_user_values_source', 10, 3);
function my_form_user_values_source($user_id, $form, $action){

    /*
     * Retrieve Form Setting
     */
    if($form['custom_key'] === 'custom_value'){

        // Force to load values from the User ID 12
        $user_id = 12;

    }

    return $user_id;

}


?>

<div class="container--inscription">
    <h1 class="container--inscription-title">INSCRIPTION</h1>

    <h2 class="container--inscription-subtitle">ENTRER VOTRE PSEUDO ET VOTRE ADRESSE MAIL POUR CRÉER VOTRE COMPTE</h2>

    <!-- inscription d’un nouvel utilisateur -->
    <?php acfe_form('nouvel-utilisateur'); ?>

    <a class="connexion--already-user" href="<?php echo esc_url( get_page_link( 85 ) ); ?>">Archireveur ? Connectez vous</a>
</div>


<?php get_footer(); ?>
