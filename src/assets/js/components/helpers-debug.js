const userData = document.querySelector('.user--data');
let switchButton= document.querySelector('.switch input');

if ( userData ){
    let switchChecked= switchButton.checked;
    let switchFocus= switchButton.focus;
    let slider= document.querySelector('.slider');
    switchButton.addEventListener('change', (e) => {
        var isChecked = switchButton.checked;
        if ( isChecked ) {
            console.log( 'check true' );
            userData.classList.remove('off');
        } else {
            console.log( 'check false' );
            userData.classList.add('off');
        }
    });
}
