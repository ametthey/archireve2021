<?php // acf_form_head(); ?>
<?php
    /*
     * Template Name: inscription information
     */

?>
<?php get_header(); ?>

<div class="container--inscription-informations">
    <h2 class="questionnaire-subtitle">bienvenue sur archireve.fr, merci de compléter
votre profil en quelques étapes</h2>

    <h1>QUESTIONNAIRE</h1>

    <!-- AGE -->
    <h2 class="questionnaire-categorie">AGE</h2>
    <div class="container--range">
        <div class="bubble-start bubble-endpoints"></div>
        <div class="bubble-end bubble-endpoints"></div>
        <!-- <label for="age">Âge</label> -->
        <input class="range" type="range" id="age" name="age" min="0" max="100">
        <output class="bubble"></output>
    </div>

    <!-- GENRE -->
    <h2 class="questionnaire-categorie">GENRE</h2>
    <!-- Physiologie -->
    <div class="container--range physiologie range-genre">
        <div class="bubble-start bubble-endpoints"></div>
        <div class="bubble-end bubble-endpoints"></div>
        <label for="physiologie">Physiologie</label>
        <input class="range" type="range" id="physiologie" name="physiologie" min="0" max="100">
        <output class="bubble"></output>
    </div>
    <!-- Ressenti -->
    <div class="container--range ressenti range-genre">
        <div class="bubble-start bubble-endpoints"></div>
        <div class="bubble-end bubble-endpoints"></div>
        <label for="ressenti">Ressenti</label>
        <input class="range" type="range" id="ressenti" name="ressenti" min="0" max="100">
        <output class="bubble"></output>
    </div>
    <!-- Attirance -->
    <div class="container--range attirange range-genre">
        <div class="bubble-start bubble-endpoints"></div>
        <div class="bubble-end bubble-endpoints"></div>
        <label for="attirance">Attirance</label>
        <input class="range" type="range" id="attirance" name="ressenti" min="0" max="100">
        <output class="bubble"></output>
    </div>

    <!-- LANGUES MATERNELLES -->
    <div class="questionnaire-categorie-tooltip">
        <h2>LANGUES MATERNELLES</h2>
        <img class="tooltip-icon" src="<?php echo get_stylesheet_directory_uri(); ?>/dist/assets/images/info-bulle.svg">
        <span class="tooltip-text">Toutes ces informations permettent, tout en individualisant chaque archireveur·euse, de comprendre un instant de notre histoire commune et d’y voir l'altérité de nos alteregos, tous·tes en chœur.</span>
    </div>

    <form action="" class="questionnaire-langue">
        <input type="text" class="questionnaire-langue-input" placeholder="française" id="questionnaire-langue">
        <div id="ajouter-langue" class="questionnaire-langue-button">
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/assets/images/addItem.svg">
        </div>
    </form>
    <div class="questionnaire-langue-list"></div>

    <!-- PAYS D'ENFANCE -->
    <div class="questionnaire-categorie-tooltip">
        <h2>PAYS D'ENFANCE</h2>
        <img class="tooltip-icon" src="<?php echo get_stylesheet_directory_uri(); ?>/dist/assets/images/info-bulle.svg">
        <span class="tooltip-text">Toutes ces informations permettent, tout en individualisant chaque archireveur·euse, de comprendre un instant de notre histoire commune et d’y voir l'altérité de nos alteregos, tous·tes en chœur.</span>
    </div>
    <form action="" class="questionnaire-pays">
        <input type="text" class="questionnaire-pays-input" placeholder="" id="questionnaire-pays">
    </form>

    <!-- MILIEUX -->
    <div class="questionnaire-categorie-tooltip">
        <h2>MILIEUX</h2>
        <img class="tooltip-icon" src="<?php echo get_stylesheet_directory_uri(); ?>/dist/assets/images/info-bulle.svg">
        <span class="tooltip-text">Toutes ces informations permettent, tout en individualisant chaque archireveur·euse, de comprendre un instant de notre histoire commune et d’y voir l'altérité de nos alteregos, tous·tes en chœur.</span>
    </div>

    <!-- Origine -->
    <div class="container--range origine range-origine">
        <div class="bubble-start bubble-endpoints"></div>
        <div class="bubble-end bubble-endpoints"></div>
        <label for="origine">Origine</label>
        <input class="range" type="range" id="origine" name="origine" min="0" max="100">
        <output class="bubble"></output>
    </div>

    <!-- Actuel -->
    <div class="container--range actuel range-actuel">
        <div class="bubble-start bubble-endpoints"></div>
        <div class="bubble-end bubble-endpoints"></div>
        <label for="actuel">Actuel</label>
        <input class="range" type="range" id="actuel" name="actuel" min="0" max="100">
        <output class="bubble"></output>
    </div>

    <!-- RAPPORT AU TRAVAIL -->
    <div class="questionnaire-categorie-tooltip">
        <h2>RAPPORT AU TRAVAIL</h2>
        <img class="tooltip-icon" src="<?php echo get_stylesheet_directory_uri(); ?>/dist/assets/images/info-bulle.svg">
        <span class="tooltip-text">Toutes ces informations permettent, tout en individualisant chaque archireveur·euse, de comprendre un instant de notre histoire commune et d’y voir l'altérité de nos alteregos, tous·tes en chœur.</span>
    </div>

    <!-- rapport1 -->
    <div class="container--range rapport1 range-rapport1">
        <div class="bubble-start bubble-endpoints"></div>
        <div class="bubble-end bubble-endpoints"></div>
        <input class="range" type="range" id="rapport1" name="rapport1" min="0" max="100">
        <output class="bubble"></output>
    </div>

    <!-- rapport2 -->
    <div class="container--range rapport2 range-rapport2">
        <div class="bubble-start bubble-endpoints"></div>
        <div class="bubble-end bubble-endpoints"></div>
        <input class="range" type="range" id="rapport2" name="rapport2" min="0" max="100">
        <output class="bubble"></output>
    </div>

    <!-- Ne travaillant pas -->
    <div class="button--select button--select-rapport">
        <div class="button--round round--white"></div>
        <p>Ne travaille pas</p>
    </div>

</div>


<?php get_footer(); ?>
