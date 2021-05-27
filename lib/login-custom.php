<?php
// Add custom message to WordPress login page
// https://smallenvelop.com/add-custom-message-wordpress-login-page/

function smallenvelop_login_message( $message ) {
    if ( empty($message) ){
        return "<h1>CONNEXION</h1><h2>ENTRER VOTRE ADRESSE MAIL POUR VOUS CONNECTER</h2>";
    } else {
        return $message;
    }
}

add_filter( 'login_message', 'smallenvelop_login_message' );

// Customize the login label and input
// https://codex.wordpress.org/Customizing_the_Login_Form
// if ( ! is_user_logged_in() ) { // Display WordPress login form:
//     $args = array(
//         'redirect' => admin_url(),
//         'form_id' => 'loginform-custom',
//         'label_username' => __( 'Mail' ),
//         'label_password' => __( 'Mot de passe' ),
//         'label_remember' => __( 'Tu te rappelle de moi' ),
//         'label_log_in' => __( 'CONTINUER' ),
//         'remember' => true
//     );
//     wp_login_form( $args );
// } else { // If logged in:
//     wp_loginout( home_url() ); // Display "Log Out" link.
//     echo " | ";
//     wp_register('', ''); // Display "Site Admin" link.
// }
