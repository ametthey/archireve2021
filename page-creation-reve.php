<?php

ob_get_clean();
acf_form_head();
/*
 * Template Name: modification reve
 */
get_header();
?>

<div class="content--home content--creation-reve">

    <?php

    $pseudo = $current_user->user_nicename;

    if ( is_user_logged_in() ) {
        if(current_user_can('administrator')) {
            echo 'Je suis administrator';
        } else if ( current_user_can('author') ){
            global $current_user;
            // get_currentuserinfo();
            wp_get_current_user();

    ?>

    <div class="profil--header">
        <h1><?php echo $pseudo; ?></h1>

        <div class="profil--header-links">
            <a href="<?php echo esc_url( get_permalink( 199 ) ); ?>">
                <h3 class="button--rounded rounded--big">Modifier le profil</h3>
            </a>
            <a href="<?php echo esc_url( get_permalink( 182 ) ); ?>">
                <h3 class="button--rounded rounded--big">Voir mes rêves</h3>
            </a>
            <a href="<?php echo wp_logout_url( home_url( '/home/' ) ); ?>">
                <h3 class="button--rounded rounded--big">Se déconnecter</h3>
            </a>
        </div>
    </div>

    <?php
        }
    } else if ( ! is_user_logged_in() ) {
        echo 'Vous n\'êtes pas autorisés à être ici !';
    }


    ?>

	<?php

	acf_form(array(
        'id' => 'form--creation-reve',
		'post_id'		=> 'new_post',
        'fields' => array(
            'field_60ec18ce6f70f',
            'field_61015e94be047', // Date du rêve
            'field_610161fcb8f44', // Contenu du rêve
            'field_6104fb96d7330', // Contenu du rêve (dessin)
            'field_6101620bb8f45',
            'field_60ec18ce6f717', // Typologie de rêve
            'field_60ec18ce6f727', // Tag
            'field_60ec18ce6f71f', // Niveau de lucidité
            'field_60ec18ce6f737', // Modalité du sommeil
            'field_6101cb13a88d4', // Humeur
            'field_6101cc6fc7157', // Sens
            'field_6101cf1188fbe',
            'field_6101cf2cc0b64', // Lieu
            'field_6101d0f126bbf', // Quand
            'field_6101d12d26bc0', // Ou
            'field_6101d13426bc1', // Comment
            'field_6101b366df9c6'
        ),
		'post_title'	=> true,
		'new_post'		=> array(
			'post_type'		=> 'reve',
			'post_status'	=> 'pending'
        ),
        'submit_value' => __("Publier", 'acf'),
        'html_submit_button'  => '<input type="submit" class="acf-button-inscription-information" value="%s" />',
        'updated_message' => __("MERCI ton RêVE est en cours de validation,
il sera bientôt en ligne ! ", 'acf'),
        'html_updated_message'  => '<div id="message" class="updated"><p>%s</p></div>',
        'return' => '/back-office/',
	));


	?>



</div>


<!-- ATTENTION C'EST SPECIFIQUE A CE TEMPLATE ET AU FOOTER -->
</div><!-- #page -->

<div class="dessin--wrapper">
    <div class="dessin--container">
        <canvas id="dessin--canvas"></canvas>
        <div id="buttons">

            <div class="color--container">
                <div class="color--texte">
                    <h4>Couleur</h4>
                </div>
                <div class="color--choice">
                    <div id="noir" class="color"></div>
                    <div id="cauchemar" class="color"></div>
                    <div id="concomitant" class="color"></div>
                    <div id="creatif" class="color"></div>
                    <div id="actualite" class="color"></div>
                    <div id="recurrent" class="color"></div>
                    <div id="sexuel" class="color"></div>
                    <div id="premonitoire" class="color"></div>
                    <div id="lucide" class="color"></div>
                </div>
            </div>

            <div class="size--container">
                <div class="size--texte"><h4>Taille</h4></div>
                <div class="size--choice">
                    <input class="range" type="range" id="taille" name="taille" min="0" max="50" value="6">
                    <output class="taille--affiche"></output>
                </div>
            </div>

            <div class="eraser--container color--container">
                <div class="color--texte">
                    <h4>Gomme</h4>
                </div>
                <div class="color--choice">
                    <div id="eraser" class="eraser"></div>
                </div>
            </div>

        </div>
        <div id="buttons-commandes">
            <div class="button--rounded" id="reset"><h4>Recommencer</h4></div>
            <input class="button--rounded" href="#" download="illustration.png" type="button" name="upload-button" id="upload-button" value="Valider son dessin">
            <input type="hidden" name="image-url" id="image-url" value="">

        </div>
    </div>
</div>

<?php get_footer( 'creation-reve' ); ?>

