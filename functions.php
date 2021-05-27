<?php

function _themename_footer_message_uppercase( $message ) {
    $new_message =  strtoupper( $message );

    return $new_message;

}
add_filter( '_themename_footer_message' , '_themename_footer_message_uppercase' , 15 );




require_once( 'lib/theme-supports.php' );
require_once( 'lib/cleanup.php');
require_once( 'lib/enqueue-assets.php' );
require_once( 'lib/menu.php' );
require_once( 'lib/sidebar.php' );
require_once( 'lib/custom-admin-bar.php' );
require_once( 'lib/custom-post-type.php' );
require_once( 'lib/custom-taxonomy.php' );
require_once( 'lib/images.php' );
require_once( 'lib/acf.php' );
require_once( 'lib/users.php' );

// Login and Register
// require_once( 'lib/login-redirection.php' );
// require_once( 'lib/login-register.php' );

require_once( 'lib/login-custom.php' );


require_once( 'lib/configurationgeneral-hwk.php' );
require_once( 'lib/connexion-hwk.php' );
require_once( 'lib/inscription-hwk.php' );
require_once( 'lib/redirection-hwk.php' );

// https://gist.github.com/Rarst/1739714
require_once( 'lib/r-debug.php' );


?>
