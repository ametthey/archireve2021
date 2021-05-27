<?php
/**
 * ACF Form Register: Register Form
 */
acf_register_form(array(
    'id'                    => 'hwk_ajax_acf_register',
    'post_id'               => 'hwk_ajax_acf_register',
    'form_attributes'       => array(
        'class' => 'acf-form acf-form-ajax',
    ),
    'field_groups'          => array(18), // ACF Fields Group ID
    'updated_message'       => '',
    'return'                => home_url('account'),
    'submit_value'          => __('Register'),
    'html_submit_button'    => '<input type="submit" class="acf-button button btn btn-secondary btn-lg" value="%s" />',
));
/**
* ACF Form Register: Input Hidden
*/
add_action('acf/input/form_data', 'hwk_ajax_acf_register_input');
function hwk_ajax_acf_register_input($args){
    if(is_admin() || !isset($args['post_id']) || $args['post_id'] != 'hwk_ajax_acf_register')
        return;

    echo '<input type="hidden" name="action" value="hwk_ajax_acf_register_ajax_submit" />';
}
/**
 * ACF Form Register: Ajax Validation
 */
add_action('acf/validate_save_post', 'hwk_ajax_acf_register_ajax_validation');
function hwk_ajax_acf_register_ajax_validation(){

    if(!isset($_POST['_acf_post_id']) || $_POST['_acf_post_id'] != 'hwk_ajax_acf_register')
        return;

    // Form data check
    if((!$form = hwk_acf_form_get_form()) || (!$data = hwk_acf_form_get_data()))
        wp_send_json_success(array(
            'valid' => 1,
            'data' 	=> array(
                'error' => __('An error occured. Please try again later.')
            )
        ));

    $input = $data['input'];
    $key = $data['key'];

    // Login
    $input['login'] = sanitize_user($input['login']);

    if(empty($input['login']) || username_exists($input['login']))
        acf_add_validation_error('acf['.$key['login'].']', __('Invalid username'));

    // Email
    $input['email'] = sanitize_email($input['email']);

    if(empty($input['email']) || email_exists($input['email']))
        acf_add_validation_error('acf['.$key['email'].']', __('Invalid e-mail'));

    // Password
    if(empty($input['password']) || sanitize_text_field($input['password']) !== sanitize_text_field($input['password_check'])){
        acf_add_validation_error('acf['.$key['password'].']', __('Passwords don\'t match'));
        acf_add_validation_error('acf['.$key['password_check'].']', __('Passwords don\'t match'));
    }

}
/**
 * ACF Form Register: Ajax Submit
 */
add_action('wp_ajax_hwk_ajax_acf_register_ajax_submit', 'hwk_ajax_acf_register_ajax_submit');
add_action('wp_ajax_nopriv_hwk_ajax_acf_register_ajax_submit', 'hwk_ajax_acf_register_ajax_submit');
function hwk_ajax_acf_register_ajax_submit(){
    if(!acf_verify_nonce('acf_form') || !isset($_POST['_acf_post_id']) || $_POST['_acf_post_id'] != 'hwk_ajax_acf_register')
        return;

    // Errors
    if(!acf_validate_save_post())
        wp_send_json_success(array(
            'valid' 	=> 0,
            'errors' 	=> acf_get_validation_errors(),
        ));

    // Form data check
    if((!$form = hwk_acf_form_get_form()) || (!$data = hwk_acf_form_get_data()))
        wp_send_json_success(array(
            'valid' => 1,
            'data' 	=> array(
                'error' => __('An error occured. Please try again later.')
            )
        ));

    $input = $data['input'];
    $key = $data['key'];

    // Create user
    $user = wp_insert_user(array(
        'user_login'    => $input['login'],
        'user_email'    => $input['email'],
        'user_pass'     => $input['password']
    ));

    if(is_wp_error($user))
        wp_send_json_success(array(
            'valid' 	=> 1,
            'data' 	=> array(
                'error' => $user
            )
        ));

    // Legacy ACF Form fields saving
    $proxy = $form;
    $proxy['post_id'] = 'user_' . $user;
    $proxy['return'] = '';

    acf()->form_front = new acf_form_front();
    acf()->form_front->submit_form($proxy);

    // Login user
    $user = wp_signon(array(
        'user_login'    => $input['login'],
        'user_password' => $input['password'],
        'remember'      => true,
    ), false);

    if(is_wp_error($user))
        wp_send_json_success(array(
            'valid' => 1,
            'data' 	=> array(
                'error' => $user
            )
        ));

    wp_send_json_success(array(
        'valid' => 1,
        'data' 	=> hwk_acf_form_get_return($form),
    ));
}
