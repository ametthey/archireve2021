    <div class="article-taxonomies--tag">
        <?php

            $tagString = get_field( 'tag' );
            $tagArray = explode(",", str_replace(" ","",$tagString));

            foreach( $tagArray as $tag ) :
                echo '<div class="button--squared"><p>' . esc_html( $tag ) . '</p></div>';
            endforeach;

        ?>
    </div>
