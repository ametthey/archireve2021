<?php
    // CHANGE VALUE SOURCE
    $user_id = get_current_user_id();
    $user_data = get_user_meta( $user_id );

    $bernard = 100;
    $bernard_data = get_user_meta( $bernard );

    if ( is_user_logged_in() ) {
        echo '<div class="user--data">L\'ID de l\'utilisateur est ' . $bernard . '<br>';
        echo 'Les infos de l\'utilisateur sonts ' . print_r( $bernard_data ) . '</div>';
    } else {
        // Silence is golden;
    }
?>
<label class="switch">
  <input type="checkbox">
  <span class="slider round"></span>
</label>
