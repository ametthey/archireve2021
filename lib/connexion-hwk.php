<?php
/**
* ACF Form Login: Register Form
*/
acf_register_form(array(
    'id'                    => 'hwk_ajax_acf_login',
    'post_id'               => 'hwk_ajax_acf_login',
    'form_attributes'       => array(
        'class' => 'acf-form acf-form-ajax',
    ),
    'field_groups'          => array(14), // ACF Fields Group ID
    'updated_message'       => __('Logged in!'),
    'return'                => home_url('account'),
    'submit_value'          => __('Login'),
    'html_submit_button'    => '<input type="submit" class="acf-button button btn btn-primary btn-lg" value="%s" /> &nbsp; <a href="/connexion/mot-de-passe-oublie">' . __('Lost password') . '</a>',
));
/**
* ACF Form Login: Input Hidden
*/
add_action('acf/input/form_data', 'hwk_ajax_acf_login_input');
function hwk_ajax_acf_login_input($args){
    if(is_admin() || (isset($args['post_id']) && $args['post_id'] != 'hwk_ajax_acf_login'))
        return;

    echo '<input type="hidden" name="action" value="hwk_ajax_acf_login_ajax_submit" />';

    if(isset($_GET['redirect']) && ($redirect = esc_url(urldecode($_GET['redirect']))))
        echo '<input type="hidden" name="redirect" value="' . $redirect . '" />';
}
/**
* ACF Form Login: Ajax Validation
*/
add_action('acf/validate_save_post', 'hwk_ajax_acf_login_ajax_validation');
function hwk_ajax_acf_login_ajax_validation(){
    if(!isset($_POST['_acf_post_id']) || $_POST['_acf_post_id'] != 'hwk_ajax_acf_login')
        return;

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

    if(empty($input['login']) || !username_exists($input['login']))
        acf_add_validation_error('acf['.$key['login'].']', __('Invalid username'));

    // Password
    $input['password'] = sanitize_text_field($input['password']);
    $user = get_user_by('login', $input['login']);

    if(empty($input['password']) || !$user || !wp_check_password($input['password'], $user->data->user_pass, $user->ID))
        acf_add_validation_error('acf['.$key['password'].']', __('Invalid password'));
}
/**
 * ACF Form Login: Ajax Submit
 */
add_action('wp_ajax_hwk_ajax_acf_login_ajax_submit', 'hwk_ajax_acf_login_ajax_submit');
add_action('wp_ajax_nopriv_hwk_ajax_acf_login_ajax_submit', 'hwk_ajax_acf_login_ajax_submit');
function hwk_ajax_acf_login_ajax_submit(){
    if(!acf_verify_nonce('acf_form') || !isset($_POST['_acf_post_id']) || $_POST['_acf_post_id'] != 'hwk_ajax_acf_login')
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

    // Login user
    $user = wp_signon(array(
        'user_login'    => $input['login'],
        'user_password' => $input['password'],
        'remember'      => (($input['remember_me']) ? true : false),
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
