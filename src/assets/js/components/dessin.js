// import canvas2svg from 'canvas2svg';

// https://getbutterfly.com/how-to-draw-on-canvas-and-save-the-result-using-vanilla-javascript/
const container = document.querySelector('.dessin--container');

if ( container  ){
const canvas = document.getElementById('dessin--canvas');
const ctx = canvas.getContext('2d');

const widthContainer = container.offsetWidth;
const heightContainer =  container.offsetHeight;

    canvas.style.width = `${widthContainer}px`;
    canvas.style.height= `${heightContainer}px`;

    canvas.width = widthContainer;
    canvas.height = heightContainer;

    ctx.fillStyle = "#FFF";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if ( container ) {

        //////////////////////////////////////////////////////////////////////////
        // Drawing
        //////////////////////////////////////////////////////////////////////////
        function getMousePos(canvas, evt) {
            let rect = canvas.getBoundingClientRect();
            return {
                x: evt.clientX - rect.left,
                y: evt.clientY - rect.top
            };
        }

        function mouseMove(evt) {
            let mousePos = getMousePos(canvas, evt);

            ctx.lineTo(mousePos.x, mousePos.y);
            ctx.stroke();
        }

        canvas.addEventListener('mousedown', (evt) => {
            let mousePos = getMousePos(canvas, evt);

            ctx.beginPath();
            ctx.moveTo(mousePos.x, mousePos.y);
            evt.preventDefault();
            canvas.addEventListener('mousemove', mouseMove, false);
        });

        canvas.addEventListener('mouseup', () => {
            canvas.removeEventListener('mousemove', mouseMove, false);
        }, false);


        //////////////////////////////////////////////////////////////////////////
        // Clear drawing
        //////////////////////////////////////////////////////////////////////////

        document.getElementById('reset').addEventListener('click', () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }, false);

        //////////////////////////////////////////////////////////////////////////
        // Colors
        //////////////////////////////////////////////////////////////////////////
        const cauchemar =  '#6755AA';
        const concomitant =  '#2CAF38';
        const creatif =  '#F79D65';
        const actualite =  '#99BA22';
        const recurrent =  '#DB5931';
        const sexuel =  '#D67083';
        const premonitoire =  '#4CA58E';
        const lucide =  '#c12b2b';

        const colors = [ 'cauchemar', 'concomitant', 'creatif', 'actualite', 'recurrent', 'sexuel', 'premonitoire', 'lucide' ];

        function listener(i) {
            document.getElementById(colors[i]).addEventListener('click', function(){
                ctx.strokeStyle = colors[i];
                this.classList.toggle('selected');
            }, false);
        }

        for (let i = 0; i < colors.length; i++) {
            listener(i);
        }

        //////////////////////////////////////////////////////////////////////////
        // Download
        //////////////////////////////////////////////////////////////////////////
        let dessinTermine = document.querySelector('.dessin--termine');
        const wrapperDessin = document.querySelector('.dessin--wrapper');
        const contenuTexte = document.querySelector('.acf-field-610161fcb8f44');


        document.getElementById('upload-button').addEventListener('click', () => {
            let image = canvas.toDataURL("image/png");
            let imageDownloaded = this.href = image;

            // let imageSVG = ctx.getSVG();

            // console.log( imageSVG );

            dessinHTML = `
                    <div class="acf-field acf-field-dessin">
                        <div class="image-container">
                        </div>
                    </div>
                `;
            contenuTexte.insertAdjacentHTML('afterend', dessinHTML);


            if ( imageDownloaded ) {
                console.log('le dessin à bien été téléchargé');

                // Creation de la zone du dessin
                var imageTag = document.createElement("img");
                imageTag.classList.add('dessin--termine');
                imageTag.setAttribute('id', 'dessin--termine');
                imageTag.setAttribute('src', image);
                document.querySelector(".acf-field-dessin .image-container").appendChild(imageTag);
                console.log( imageTag );

            }







            if ( wrapperDessin.classList.contains('-is-active') ) {
                wrapperDessin.classList.remove('-is-active');
            }

            contenuTexte.classList.add('as-drawing');
        });


        //////////////////////////////////////////////////////////////////////////
        // Range for size
        //////////////////////////////////////////////////////////////////////////
        const taille = document.querySelector('#taille');
        const tailleAffiche = document.querySelector(".taille--affiche");
        ctx.lineWidth = taille.value;

        taille.addEventListener("change", () => {
            setBubble(taille, tailleAffiche);
            ctx.lineWidth = taille.value;
        });
        setBubble(taille, tailleAffiche);

        let finalValue;

        function setBubble(taille, tailleAffiche) {
            const val = taille.value;
            const min = taille.min ? taille.min : 0;
            const max = taille.max ? taille.max : 100;
            const newVal = Number(((val - min) * 100) / (max - min));
            finalValue = tailleAffiche.innerHTML = val;

            // Sorta magic numbers based on size of the native UI thumb
            tailleAffiche.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
        }
    }
}
