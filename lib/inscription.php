<?php

/*
 * https://code.tutsplus.com/fr/tutorials/creating-a-custom-wordpress-registration-form-plugin--cms-20968
 *
 */

function _themename_custom_registration_function() {
    if (isset($_POST['submit'])) {
        registration_validation(
        $_POST['username'],
        $_POST['password'],
        $_POST['email'],
		);

		// sanitize user form input
        // global $username, $password, $email, $website, $first_name, $last_name, $nickname, $bio;
        global $username,  $email, $password;
        $username	= 	sanitize_user($_POST['username']);
        $password 	= 	esc_attr($_POST['password']);
        $email 		= 	sanitize_email($_POST['email']);

		// call @function complete_registration to create the user
		// only when no WP_error is found
        complete_registration(
        $username,
        $password,
        $email,
		);
    }

    registration_form(
    	$username,
        $password,
        $email,
		);
}

function registration_form( $username, $password, $email) {

    echo '
    <form action="' . $_SERVER['REQUEST_URI'] . '" method="post" class="form--inscription">

        <div class="username">
            <label for="pseudo">Pseudo</label>
            <input type="text" name="username" value="' . (isset($_POST['username']) ? $username : null) . '">
        </div>

        <div class="email">
            <label for="email">Mail</label>
            <input type="text" name="email" value="' . (isset($_POST['email']) ? $email : null) . '">
        </div>

        <div class="password">
            <label for="password">Mot de passe</label>
            <input type="password" name="password" value="' . (isset($_POST['password']) ? $password : null) . '">
        </div>


        <div class="login_fields">
            <input type="submit" name="submit" value="CONTINUER" class="user-submit"/>
        </div>
	</form>
	';
}

// function registration_validation( $username, $password, $email, $website, $first_name, $last_name, $nickname, $bio )  {
function registration_validation( $username, $password, $email )  {
    global $reg_errors;
    $reg_errors = new WP_Error;

    if ( empty( $username ) || empty( $password ) || empty( $email ) ) {
        $reg_errors->add('field', 'Veuillez remplir les champs requis');
    }

    if ( strlen( $username ) < 4 ) {
        $reg_errors->add('username_length', 'Le pseudo est trop court. Choisisez au moins 4 caractères.');
    }

    if ( username_exists( $username ) )
        $reg_errors->add('user_name', 'Désolé, ce nom d\'utilisateur est déjà utilisé');

    if ( !validate_username( $username ) ) {
        $reg_errors->add('username_invalid', 'Désolé, le pseudo que vous avez entré n\'est pas valide.');
    }

    if ( strlen( $password ) < 5 ) {
        $reg_errors->add('password', 'Le mot de passe doit contenu plus de 5 caractères.');
    }

    if ( !is_email( $email ) ) {
        $reg_errors->add('email_invalid', 'Le mail n\'est pas valide');
    }

    if ( email_exists( $email ) ) {
        $reg_errors->add('email', 'Mail déjà utilisé');
    }

    // https://wordpress.stackexchange.com/questions/188417/why-is-wp-error-is-not-returning-false-even-theres-no-defined-error
    if ( is_wp_error( $error ) && ! empty( $error->errors ) ) {

        echo '<div class="registration--error-container is-active">';
        echo '<h2>ERREUR</h2>';
        echo '<div class="button--round round--white"></div>';

            foreach ( $reg_errors->get_error_messages() as $error ) {
                echo '
                        <div class="registration--error-item">
                            <h3>• ' . $error . '</h3>
                        </div>
                ';
            }

            echo var_dump( $reg_errors );

        echo '</div>';
    }
}

function complete_registration() {
    // global $reg_errors, $username, $password, $email, $website, $first_name, $last_name, $nickname, $bio;
    global $reg_errors, $username, $password, $email;
    if ( 1 > count( $reg_errors->get_error_messages() ) ) {
        $userdata = array(
        'user_login'	=> 	$username,
        'user_email' 	=> 	$email,
        'user_pass' 	=> 	$password,
		);
        $user = wp_insert_user( $userdata );
        // echo 'Registration complete. Goto <a href="' . get_site_url() . '/wp-login.php">login page</a>.';
        echo '
            <div class="wrapper--merci">
                <div class="container--merci">
                    <h1 class="container--merci-title">MERCI ' . $username . '!</h1>
                    <h2 class="container--merci-subtitle">nous avons envoyé un mail à ' . $email . '.
                        Cliquez sur le lien pour activer votre compte.</h2>
                </div>
            </div>
        ';
	}
}

// Register a new shortcode: [_themename_custom_registration]
add_shortcode('_themename_custom_registration', 'custom_registration_shortcode');

// The callback function that will replace [book]
function custom_registration_shortcode() {
    ob_start();
    _themename_custom_registration_function();
    return ob_get_clean();
}

