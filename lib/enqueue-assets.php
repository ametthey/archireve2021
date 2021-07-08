<?php

/**************************************************************************
 * Après avoir cloner le projet:
 * changer le mot _themename par le nom du projet
 * en terme d'organiser, on renomme les handle par le
 * nom du projet pour mieux s'y retrouver
 * ex: _themename_assets -> myProject_assets
 ***********************************************************************/

/*
 * Starter Theme  stylesheet
 */
function _themename_assets() {


    // Home
    // if ( is_page_template( 'page-home.php' ) && is_front_page() && is_home() ) {
    // }


    // User
    if ( is_page_template( 'page-inscription-alternative.php' ) && is_page_template( 'page-profil.php' ) && is_page_template( 'page-back-office.php' ) ) {
        wp_enqueue_style( '_themename-stylesheet', get_stylesheet_directory_uri() . '/dist/assets/css/bundle.css', [], '1.0.0' ,  'all' );
        wp_enqueue_script( '_themename-about', get_stylesheet_directory_uri() . '/dist/assets/js/user.js', [], '1.0.0' , true );
    } else {
        wp_enqueue_style( '_themename-stylesheet', get_stylesheet_directory_uri() . '/dist/assets/css/bundle.css', [], '1.0.0' ,  'all' );
        wp_enqueue_script( '_themename-scripts', get_stylesheet_directory_uri() . '/dist/assets/js/main.js', [ 'jquery' ], '1.0.1' ,   true );

    }


    // HWK
    // wp_enqueue_style( '_themename-stylesheet-boostrap', 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css', [], '4.0.0' ,  'all' );
    // wp_enqueue_script( '_themename-script-jquery', 'https://code.jquery.com/jquery-3.2.1.slim.min.js', [], '4.0.0' ,  'all' );
    // wp_enqueue_script( '_themename-script-popper', 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js', [], '4.0.0' ,  'all' );
    // wp_enqueue_script( '_themename-script-boostrap', 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js', [], '4.0.0' ,  'all' );

}
add_action( 'wp_enqueue_scripts', '_themename_assets' );



/*
 * Admin stylesheet
 */

// function _themename_admin_assets() {
//     wp_enqueue_style( '_themename-admin-stylesheet', get_stylesheet_directory_uri() . '/dist/assets/css/admin.css', [], '1.0.0', 'all');
//     wp_enqueue_script( '_themename-admin-scripts', get_stylesheet_directory_uri() . '/dist/assets/js/admin.js', [], '1.0.0' , true );
// }

// add_action( 'admin_enqueue_scripts', '_themename_admin_assets' );

/*
 * Login Stylesheet
 */
function _themename_login_assets() {
    wp_enqueue_style( '_themename-admin-stylesheet', get_stylesheet_directory_uri() . '/dist/assets/css/login.css', [], '1.0.0', 'all' );
    wp_enqueue_script( '_themename-admin-scripts', get_stylesheet_directory_uri() . '/dist/assets/js/login.js', [], '1.0.0', 'all' );
}
add_action( 'login_enqueue_scripts', '_themename_login_assets' );

/***********************************************************************
 *
 * Defer JavaScript Scripts
 *
 ***********************************************************************/

// function _themename_defer_parsing_of_js( $url ) {
//     if ( is_user_logged_in() ) return $url; //don't break WP Admin
//     if ( FALSE === strpos( $url, '.js' ) ) return $url;
//     if ( strpos( $url, 'jquery.js' ) ) return $url;
//     return str_replace( ' src', ' defer src', $url );
// }
// add_filter( 'script_loader_tag', '_themename_defer_parsing_of_js', 10 );

/***********************************************************************
 *
 * Remove jQuery
 *
 ***********************************************************************/

// function _themename_no_more_jquery(){
//     wp_deregister_script('jquery');
// }
// add_action('wp_enqueue_scripts', '_themename_no_more_jquery');

/***********************************************************************
 *
 * Remove jQuery Migrate
 *
 ***********************************************************************/

// function remove_jquery_migrate( $scripts ) {
//     if ( ! is_admin() && isset( $scripts->registered['jquery'] ) ) {
//         $script = $scripts->registered['jquery'];
//         if ( $script->deps ) {
//             // Check whether the script has any dependencies
//
//             $script->deps = array_diff( $script->deps, array( 'jquery-migrate' ) );
//         }
//     }
// }
// add_action( 'wp_default_scripts', 'remove_jquery_migrate' );

