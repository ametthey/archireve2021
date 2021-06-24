<?php

// // Taxonomy Key: niveaudelucidite
// // Register Taxonomy Niveau de lucidité
// function create_niveaudelucidit_tax() {
//
// 	$labels = array(
// 		'name'              => _x( 'Niveaux de lucidité', 'taxonomy general name', '_themename' ),
// 		'singular_name'     => _x( 'Niveau de lucidité', 'taxonomy singular name', '_themename' ),
// 		'search_items'      => __( 'Search Niveaux de lucidité', '_themename' ),
// 		'all_items'         => __( 'All Niveaux de lucidité', '_themename' ),
// 		'parent_item'       => __( 'Parent Niveau de lucidité', '_themename' ),
// 		'parent_item_colon' => __( 'Parent Niveau de lucidité:', '_themename' ),
// 		'edit_item'         => __( 'Edit Niveau de lucidité', '_themename' ),
// 		'update_item'       => __( 'Update Niveau de lucidité', '_themename' ),
// 		'add_new_item'      => __( 'Add New Niveau de lucidité', '_themename' ),
// 		'new_item_name'     => __( 'New Niveau de lucidité Name', '_themename' ),
// 		'menu_name'         => __( 'Niveau de lucidité', '_themename' ),
// 	);
// 	$args = array(
// 		'labels' => $labels,
// 		'description' => __( 'Niveau de lucidite', '_themename' ),
// 		'hierarchical' => true,
// 		'public' => true,
// 		'publicly_queryable' => true,
// 		'show_ui' => true,
// 		'show_in_menu' => true,
// 		'show_in_nav_menus' => true,
// 		'show_tagcloud' => true,
// 		'show_in_quick_edit' => false,
// 		'show_admin_column' => true,
// 		'show_in_rest' => true,
//         // User can't add taxonomies
//         'capabilities' => array(
//             // 'manage_terms' => '',
//             // SO WE CAN NOT EDIT TERMS
//             // 'edit_terms' => '',
//             // 'delete_terms' => '',
//             'assign_terms' => 'edit_posts'
//         ),
//
// 	);
// 	register_taxonomy( 'niveaudelucidite', array('reve'), $args );
//
// }
// add_action( 'init', 'create_niveaudelucidit_tax' );

// Register Taxonomy Typologie de rêve
// Taxonomy Key: typologiedereve
function create_typologiedereve_tax() {

	$labels = array(
		'name'              => _x( 'Typologies de rêve', 'taxonomy general name', '_themename' ),
		'singular_name'     => _x( 'Typologie de rêve', 'taxonomy singular name', '_themename' ),
		'search_items'      => __( 'Search Typologies de rêve', '_themename' ),
		'all_items'         => __( 'All Typologies de rêve', '_themename' ),
		'parent_item'       => __( 'Parent Typologie de rêve', '_themename' ),
		'parent_item_colon' => __( 'Parent Typologie de rêve:', '_themename' ),
		'edit_item'         => __( 'Edit Typologie de rêve', '_themename' ),
		'update_item'       => __( 'Update Typologie de rêve', '_themename' ),
		'add_new_item'      => __( 'Add New Typologie de rêve', '_themename' ),
		'new_item_name'     => __( 'New Typologie de rêve Name', '_themename' ),
		'menu_name'         => __( 'Typologie de rêve', '_themename' ),
	);
	$args = array(
		'labels' => $labels,
		'description' => __( 'Typologie de rêve', '_themename' ),
		'hierarchical' => true,
		'public' => true,
		'publicly_queryable' => true,
        // Cacher de l'admin
		'show_ui' => true,
		'show_in_menu' => true,
		'show_in_nav_menus' => true,
		'show_tagcloud' => true,
		'show_in_quick_edit' => false,
		'show_admin_column' => true,
		'show_in_rest' => true,
        // User can't add taxonomies
        'capabilities' => array(
            // 'manage_terms' => '',
            // SO WE CAN NOT EDIT TERMS
            // 'edit_terms' => '',
            // 'delete_terms' => '',
        ),
	);
	register_taxonomy( 'typologiedereve', array('reve'), $args );

}
add_action( 'init', 'create_typologiedereve_tax' );

// Register Taxonomy Tag
// Taxonomy Key: customtag
function create_customtag_tax() {

	$labels = array(
		'name'              => _x( 'Tag', 'taxonomy general name', '_themename' ),
		'singular_name'     => _x( 'Custom Tag', 'taxonomy singular name', '_themename' ),
		'search_items'      => __( 'Chercher les tags', '_themename' ),
		'all_items'         => __( 'Tout les tags', '_themename' ),
		// 'parent_item'       => __( 'Parent Niveau de lucidité', '_themename' ),
		// 'parent_item_colon' => __( 'Parent Niveau de lucidité:', '_themename' ),
		'edit_item'         => __( 'Editer le tag', '_themename' ),
		'update_item'       => __( 'Mettre à jour le tag', '_themename' ),
		'add_new_item'      => __( 'Ajouter un nouveau tag', '_themename' ),
		'new_item_name'     => __( 'Ajouter un nouveau nom de tag', '_themename' ),
		'menu_name'         => __( 'Tag', '_themename' ),
	);
	$args = array(
		'labels' => $labels,
		'description' => __( 'Tag', '_themename' ),
		'hierarchical' => false,
		'public' => true,
		'publicly_queryable' => true,
		'show_ui' => false,
		'show_in_menu' => true,
		'show_in_nav_menus' => true,
		'show_tagcloud' => true,
		'show_in_quick_edit' => false,
		'show_admin_column' => true,
		'show_in_rest' => true,
        // User can't add taxonomies
        'capabilities' => array(
            // 'manage_terms' => '',
            'edit_terms' => '',
            // 'delete_terms' => '',
            'assign_terms' => 'edit_posts'
        ),

	);
	register_taxonomy( 'customtag', array('reve'), $args );

}
add_action( 'init', 'create_customtag_tax' );



// Register Taxonomy Modalite du sommeil
// Taxonomy Key: aliments
function create_modalite_aliment_tax() {

	$labels = array(
		'name'              => _x( 'Aliment', 'taxonomy general name', '_themename' ),
		'singular_name'     => _x( 'Aliment', 'taxonomy singular name', '_themename' ),
		// 'search_items'      => __( 'Chercher les tags', '_themename' ),
		// 'all_items'         => __( 'Tout les tags', '_themename' ),
		// 'parent_item'       => __( 'Parent Niveau de lucidité', '_themename' ),
		// 'parent_item_colon' => __( 'Parent Niveau de lucidité:', '_themename' ),
		'edit_item'         => __( 'Aliment', '_themename' ),
		'update_item'       => __( 'Aliment', '_themename' ),
		'add_new_item'      => __( 'Aliment', '_themename' ),
		'new_item_name'     => __( 'Aliment', '_themename' ),
		'menu_name'         => __( 'Aliment', '_themename' ),
	);
	$args = array(
		'labels' => $labels,
		'description' => __( 'Tag', '_themename' ),
		'hierarchical' => false,
		'public' => true,
		'publicly_queryable' => true,
		'show_ui' => false,
		'show_in_menu' => true,
		'show_in_nav_menus' => true,
		'show_tagcloud' => true,
		'show_in_quick_edit' => false,
		'show_admin_column' => true,
		'show_in_rest' => true,
        // User can't add taxonomies
        'capabilities' => array(
            // 'manage_terms' => '',
            // 'edit_terms' => '',
            // 'delete_terms' => '',
            'assign_terms' => 'edit_posts'
        ),

	);
	register_taxonomy( 'modalite_aliment', array('reve'), $args );

}
add_action( 'init', 'create_modalite_aliment_tax' );

?>
