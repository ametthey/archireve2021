<?php
/*
 * Template Name: nouveau rêve
 */

// if ( is_user_logged_in() || current_user_can('publish_posts') ) { // Execute code if user is logged in
//     acf_form_head();
//     wp_deregister_style( 'wp-admin' );
// }

if ( ! ( is_user_logged_in() || current_user_can('publish_posts') ) ) {
    echo '<p>You must be a registered author to post.</p>';
} else {
     acf_form(array(
         'post_id' => 'new_post',
         'field_groups' => array(216,19), // Used ID of the field groups here.
         'post_title' => true, // This will show the title filed
         'post_content' => true, // This will show the content field
         'form' => true,
         'new_post' => array(
             'post_type' => 'reve',
             'post_status' => 'publish' // You may use other post statuses like draft, private etc.
         ),
         'return' => '%post_url%',
         'submit_value' => 'Submit Book',
     ));
}
?>



<?php get_footer(); ?>
