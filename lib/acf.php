<?php

// Enable the option show in rest
add_filter( 'acf/rest_api/field_settings/show_in_rest', '__return_true' );

// Enable the option edit in rest
add_filter( 'acf/rest_api/field_settings/edit_in_rest', '__return_true' );

// Add values to taxonomy tag
function my_acf_update_value( $value, $post_id, $field, $original ) {
    if( is_string($value) ) {
        $tagString = $value;
        $tagArray = explode(",", str_replace(" ","",$tagString));

        foreach( $tagArray as $tag ) :

            // https://wp-kama.com/function/wp_insert_term
            $parent_term = term_exists( 'customtag', 'niveaudelucidite' ); // returns an array if the taxonomy exists
            $parent_term_id = $parent_term['term_id'];         // get the numerical value of the term

            $insert_data = wp_insert_term(
                $tag,   // new term
                'customtag', // taxonomy
                array(
                    'description' => '',
                    'slug'        => strtolower( $tag ),
                    'parent'      => $parent_term_id
                )
            );

            if( ! is_wp_error($insert_data) )
                $term_id = $insert_data['term_id'];
        endforeach;
    }
    return $value;
}
add_filter('acf/update_value/key=field_60ec18ce6f727', 'my_acf_update_value', 10, 4);

// Upload image from webpage
// https://support.advancedcustomfields.com/forums/topic/programmatically-inserting-photos-into-acf-gallery-field-but-only-the-first-pho/
// $uploads_dir = $_SERVER['DOCUMENT_ROOT'] . "2016.website.com/trunk/www/wp-content/uploads/condos" . "/" . $photo["photo"];
// $url = "http://www.website.com/images/custom/condos/{$photo["photo"]}";
// //$uploads_dir = $uploads_dir . "/" . $photo["photo"];
// file_put_contents($uploads_dir, file_get_contents($url));
//
// //attach the photos to the post
// // Check the type of file. We'll use this as the 'post_mime_type'.
// $filetype = wp_check_filetype( basename( $uploads_dir ), null );
//
// // Get the path to the upload directory.
// $wp_upload_dir = wp_upload_dir();
//
// // Prepare an array of post data for the attachment.
// $attachment = array(
//     'guid'           => $wp_upload_dir['url'] . '/' . basename( $uploads_dir ),
//     'post_mime_type' => $filetype['type'],
//     'post_title'     => preg_replace( '/\.[^.]+$/', '', basename( $uploads_dir ) ),
//     'post_content'   => '',
//     'post_status'    => 'inherit'
// );
//
// $attach_id = wp_insert_attachment( $attachment, $uploads_dir, $post[0]->ID );
// require_once( ABSPATH . 'wp-admin/includes/image.php' );
// $attach_data = wp_generate_attachment_metadata( $attach_id, $uploads_dir );
// wp_update_attachment_metadata( $attach_id, $attach_data );
//
// //insert the ACF magic bits
// update_field("field_5693402ab8561", $attach_id, $post[0]->ID );

// Create Profile Page
function my_acf_user_form_func( $atts ) {

    $a = shortcode_atts( array(
        'field_group' => '454'
    ), $atts );

    $uid = get_current_user_id();

    if ( ! empty ( $a['field_group'] ) && ! empty ( $uid ) ) {
        $options = array(
            'post_id' => 'user_'.$uid,
            'field_groups' => array( intval( $a['field_group'] ) ),
            'return' => add_query_arg( 'updated', 'true', get_permalink() )
        );

        ob_start();

        acf_form( $options );
        $form = ob_get_contents();

        ob_end_clean();
    }

    return $form;
}
add_shortcode( 'my_acf_user_form', 'my_acf_user_form_func' );

//adding AFC form head
function add_acf_form_head(){
    global $post;

    if ( !empty($post) && has_shortcode( $post->post_content, 'my_acf_user_form' ) ) {
        acf_form_head();
    }
}
add_action( 'wp_head', 'add_acf_form_head', 7 );

?>
