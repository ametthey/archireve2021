<?php
// add_filter('acfe/form/load/user_id', 'my_form_user_values_source', 10, 3);
// add_filter('acfe/form/load/user_id/form=inscription-information', 'my_form_user_values_source', 10, 3);
// add_filter('acfe/form/load/user_id/action=my-user-action', 'my_form_user_values_source', 10, 3);
//
// /*
//  * @int     $user_id  User ID used as source
//  * @array   $form     The form settings
//  * @string  $action   The action alias name
//  */
// add_filter('acfe/form/load/user_id/form=inscription-information', 'my_form_user_values_source', 10, 3);
// function my_form_user_values_source($user_id, $form, $action){
//
//     /*
//      * Retrieve Form Setting
//      */
//     if($form['custom_key'] === 'custom_value'){
//
//         // Force to load values from the User ID 12
//         $user_id = 12;
//
//     }
//
//     return $user_id;
//
// }


