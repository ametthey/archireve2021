const postsBackOffice = document.querySelectorAll('.profil--reve .profil--reve-new');

if ( postsBackOffice ) {
    if ( postsBackOffice.length === 1 ) {
        console.log('Il y a 1 seul element');
        // postsBackOffice.classList.add('-is-hidden');
        postsBackOffice.forEach( post => post.classList.add('-is-hidden') );
    } else {
        // Silence is golden.
    }
}

