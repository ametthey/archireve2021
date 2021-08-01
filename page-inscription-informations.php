<?php acf_form_head(); ?>
<?php
    /*
     * Template Name: inscription information
     */

?>
<?php get_header(); ?>

<div class="container--inscription-informations">
    <h2 class="questionnaire-subtitle">bienvenue sur archireve.fr, merci de compléter votre profil en quelques étapes</h2>

    <h1>QUESTIONNAIRE</h1>

    <!-- Inscription Information -->
    <?php acfe_form('inscription-information'); ?>



    <div class="integration--inscription">
        <!-- AGE -->
        <?php  // get_template_part( 'template-parts/inscription-informations/inscription', 'age' ); ?>

        <!-- GENRE -->
        <?php  // get_template_part( 'template-parts/inscription-informations/inscription', 'genre' ); ?>

        <!-- LANGUES MATERNELLES -->
        <?php  // get_template_part( 'template-parts/inscription-informations/inscription', 'langue' ); ?>

        <!-- PAYS D'ENFANCE -->
        <?php  //get_template_part( 'template-parts/inscription-informations/inscription', 'pays' ); ?>

        <!-- MILIEUX -->
        <?php  //get_template_part( 'template-parts/inscription-informations/inscription', 'milieux' ); ?>

        <!-- RAPPORT AU TRAVAIL -->
        <?php  //get_template_part( 'template-parts/inscription-informations/inscription', 'travail' ); ?>

        <!-- RELATION À UN PAYSAGE -->
        <?php  //get_template_part( 'template-parts/inscription-informations/inscription', 'paysage' ); ?>

        <!-- FOI SPIRITUELLE -->
        <?php  //get_template_part( 'template-parts/inscription-informations/inscription', 'foi' ); ?>

        <!-- RELATION AU SOMMEIL -->
        <?php  //get_template_part( 'template-parts/inscription-informations/inscription', 'sommeil' ); ?>

        <!-- RELATION AUX RÊVES -->
        <?php  //get_template_part( 'template-parts/inscription-informations/inscription', 'reve' ); ?>
    </div>

    <!-- Phrase de remerciement de fin -->
</div>

<?php get_footer(); ?>
