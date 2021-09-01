<!-- SECTION 5 - CONTACT -->
<div data-scroll-section class="propos--section propos--section-5 propos--section-texte">
    <h1 class="bigger">contact</h1>
    <div class="propos-links">
        <h1><a href="mailto:<?php the_field( 'contact__mail', 'option' ); ?>"><?php the_field( 'contact__mail', 'option' ); ?></a></h1>
        <h1><a href="<?php the_field( 'contact_instagram', 'option' ); ?>" target="_blank">@archireve</a></h1>
        <h1><a href="<?php the_field( 'contact_newsletter', 'option' ); ?>" target="_blank">Newsletter</a></h1>
    </div>
    <h2><?php the_field( 'contact', 'option' ); ?></h2>
</div>
