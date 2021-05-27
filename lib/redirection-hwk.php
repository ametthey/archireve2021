<?php
add_action('template_redirect', 'hwk_acf_form_redirect');
function hwk_acf_form_redirect(){

    // Logged in
    if(is_user_logged_in() && (is_page('connexion') || is_page('mot-de-passe-oublie') || is_page('inscription')))
        wp_redirect(home_url('mon-compte'));

    // Not logged in
    if(!is_user_logged_in() && is_page('mon-compte'))
        wp_redirect(home_url());

}
add_filter('template_include', 'hwk_acf_form_lost_password_page');
function hwk_acf_form_lost_password_page($template){

    if(is_page('mot-de-passe-oublie') && $new_template = locate_template('page-connexion.php')){
        set_query_var('hwk_page_lost_password', true);
        return $new_template;
    }

    return $template;

}
add_filter('wp_nav_menu_objects', 'hwk_acf_form_menu_items', 10, 2);
function hwk_acf_form_menu_items($items, $args){

    foreach($items as $key => $item){
        if(get_field('logged_in', $item) && !is_user_logged_in())
            unset($items[$key]);

        if(get_field('logged_out', $item) && is_user_logged_in())
            unset($items[$key]);
    }

    return $items;
}

