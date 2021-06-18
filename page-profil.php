<?php
/*
 * Template Name: profil
 */

get_header(); ?>

<div class="content--home content--profil">

    <div class="profil--header">
        <h1>Nom Utilisateur</h1>
        <h3 class="button--rounded rounded--big">Modifier le profil</h3>
    </div>

    <div class="profil--no-reve">
        <h2>UN RÊVE À PARTAGER ?</h2>
        <h2><a href="#">PUBLIE TON PREMIER RÊVE!</a></h2>
    </div>

    <div class="profil--reve">

        <div class="profil--reve-new">
            <h2><a href="#">PUBLIER UN NOUVEAU RÊVE</a></h2>
        </div>

        <div class="profil--reve-published"></div>

    </div>

    <div class="profil--empty"></div>

</div>

<?php get_footer(); ?>
