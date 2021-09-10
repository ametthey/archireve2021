<?php
/*
 * Template Name: profil
 */

// https://gist.github.com/chrisdigital/5525127
// https://stackoverflow.com/questions/21312839/how-to-create-a-edit-profile-page-for-users-on-frontend-with-custom-fields-on-wo
/* Get user info. */
global $current_user, $wp_roles;
// get_currentuserinfo();
wp_get_current_user();

/* Load the registration file. */
// require_once( ABSPATH . WPINC . '/registration.php' );
$error = array();
/* If profile was saved, update profile. */
if ( 'POST' == $_SERVER['REQUEST_METHOD'] && !empty( $_POST['action'] ) && $_POST['action'] == 'update-user' ) {

    /* Update user password. */
    if ( !empty($_POST['pass1'] ) && !empty( $_POST['pass2'] ) ) {
        if ( $_POST['pass1'] == $_POST['pass2'] )
            wp_update_user( array( 'ID' => $current_user->ID, 'user_pass' => esc_attr( $_POST['pass1'] ) ) );
        else
            $error[] = __('The passwords you entered do not match.  Your password was not updated.', 'profile');
    }

    /* Update user information. */
    if ( !empty( $_POST['url'] ) )
       wp_update_user( array ('ID' => $current_user->ID, 'user_url' => esc_attr( $_POST['url'] )));
    if ( !empty( $_POST['email'] ) ){
        if (!is_email(esc_attr( $_POST['email'] )))
            $error[] = __('The Email you entered is not valid.  please try again.', 'profile');
        elseif(email_exists(esc_attr( $_POST['email'] )) != $current_user->id )
            $error[] = __('This email is already used by another user.  try a different one.', 'profile');
        else{
            wp_update_user( array ('ID' => $current_user->ID, 'user_email' => esc_attr( $_POST['email'] )));
        }
    }

    if ( !empty( $_POST['first-name'] ) )
        update_user_meta( $current_user->ID, 'first_name', esc_attr( $_POST['first-name'] ) );
    if ( !empty( $_POST['last-name'] ) )
        update_user_meta($current_user->ID, 'last_name', esc_attr( $_POST['last-name'] ) );
    if ( !empty( $_POST['display_name'] ) )
        wp_update_user(array('ID' => $current_user->ID, 'display_name' => esc_attr( $_POST['display_name'] )));
      update_user_meta($current_user->ID, 'display_name' , esc_attr( $_POST['display_name'] ));
    if ( !empty( $_POST['description'] ) )
        update_user_meta( $current_user->ID, 'description', esc_attr( $_POST['description'] ) );

    /* Redirect so the page will show updated info.*/
  /*I am not Author of this Code- i dont know why but it worked for me after changing below line to if ( count($error) == 0 ){ */
    if ( count($error) == 0 ) {
        //action hook for plugins and extra fields saving
        do_action('edit_user_profile_update', $current_user->ID);
        wp_redirect( get_permalink().'?updated=true' ); exit;
    }
}




get_header(); ?>

<div class="content--home content--profil">

    <div class="profil--header">
        <h1>Profil</h1>
    <?php


    // Si le user a déjà fait un post
    // Afficher les posts

    if ( is_user_logged_in() ) {
        if(current_user_can('administrator')) {
            echo 'Je suis administrator';
        } else if ( current_user_can('author') ){
            global $current_user;
            // get_currentuserinfo();
            wp_get_current_user();
            ?>

        <div class="profil--header-links">
            <a href="<?php echo esc_url( get_permalink( 199 ) ); ?>">
                <h3 class="button--rounded rounded--big">Modifier le profil</h3>
            </a>
            <a href="<?php echo esc_url( get_permalink( 182 ) ); ?>">
                <h3 class="button--rounded rounded--big">Voir mes rêves</h3>
            </a>
            <a href="<?php echo wp_logout_url( home_url( '/home/' ) ); ?>">
                <h3 class="button--rounded rounded--big">Se déconnecter</h3>
            </a>
        </div>

    <?php
            }
        } else if ( ! is_user_logged_in() ) {
            echo 'Vous n\'êtes pas autorisés à être ici !';
        }
    ?>
    </div>

    <div class="profil--utilisateur">
    <?php

        // if ( is_user_logged_in() ) {
        //     if(current_user_can('administrator')) {
        //         echo 'Je suis administrator';
        //     } else if ( current_user_can('author') ){
        //         echo 'Je suis author';
        //         global $current_user;
        //         get_currentuserinfo();
        //     }
        // } else if ( ! is_user_logged_in() ) {
        //     echo 'Vous n\'êtes pas autorisés à être ici !';
        // }
    ?>

    <div id="post-<?php the_ID(); ?>">
            <div class="entry-content entry">
                <?php the_content(); ?>
                <?php if ( !is_user_logged_in() ) : ?>
                        <p class="warning">
                            <?php _e('You must be logged in to edit your profile.', 'profile'); ?>
                        </p><!-- .warning -->
                <?php else : ?>
                    <?php if ( count($error) > 0 ) echo '<p class="error">' . implode("<br />", $error) . '</p>'; ?>
                    <form method="post" id="adduser" action="<?php the_permalink(); ?>">
                        <p class="form-email">
                            <label for="email"><?php _e('E-mail *', 'profile'); ?></label>
                            <input class="text-input" name="email" type="text" id="email" value="<?php the_author_meta( 'user_email', $current_user->ID ); ?>" />
                        </p><!-- .form-email -->
                        <p class="form-password">
                            <label for="pass1"><?php _e('Password *', 'profile'); ?> </label>
                            <input class="text-input" name="pass1" type="password" id="pass1" />
                        </p><!-- .form-password -->
                        <p class="form-password">
                            <label for="pass2"><?php _e('Repeat Password *', 'profile'); ?></label>
                            <input class="text-input" name="pass2" type="password" id="pass2" />
                        </p><!-- .form-password -->

                        <?php
                            //action hook for plugin and extra fields
                            do_action('edit_user_profile',$current_user);
                        ?>
                        <p class="form-submit">
                            <?php echo $referer; ?>
                            <input name="updateuser" type="submit" id="updateuser" class="submit button" value="<?php _e('Update', 'profile'); ?>" />
                            <?php wp_nonce_field( 'update-user' ) ?>
                            <input name="action" type="hidden" id="action" value="update-user" />
                        </p><!-- .form-submit -->
                    </form><!-- #adduser -->
                <?php endif; ?>
            </div><!-- .entry-content -->
        </div><!-- .hentry .post -->

    </div>

</div>

<?php get_footer(); ?>

