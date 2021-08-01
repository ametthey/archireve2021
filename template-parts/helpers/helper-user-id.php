<?php
    // CHANGE VALUE SOURCE
    $user_id_1 = get_current_user_id();
    $user = wp_get_current_user();
    $user_id_2 = $user->ID;
    $post_id = get_the_ID();

    if ( is_user_logged_in() ) {
        // echo '<div class="user--id">L\'ID de l\'utilisateur est ' . $user_id_1 . '';
        echo '<div class="user--id">L\'ID de l\'utilisateur est ' . $user_id_2 . '</div>';
        echo '<br>L\'ID de la page est ' . $page_id . '</div>';
    } else {
        // Silence is golden;
    }
?>
