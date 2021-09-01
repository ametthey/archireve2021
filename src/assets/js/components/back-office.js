const postsBackOffice = document.querySelectorAll('.profil--reve .profil--reve-new');
const postsPublishedStatus = document.querySelectorAll('.profil--reve-published');

if ( postsBackOffice ) {
    if ( postsBackOffice.length === 1 ) {
        console.log('Il y a 1 seul element');
        // postsBackOffice.classList.add('-is-hidden');
        postsBackOffice.forEach( post => post.classList.add('-is-hidden') );
    } else {
        // Silence is golden.
    }
}


if ( postsPublishedStatus ) {
    postsPublishedStatus.forEach( post => {
        const postMessage = post.querySelector('.message--status-pending');

        if ( post.classList.contains('status-publish') ) {
            postMessage.classList.add('is-hidden');
        }
    });
}
