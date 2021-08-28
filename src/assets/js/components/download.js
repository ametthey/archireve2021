
/*
 * Export table to csv
 * https://jsfiddle.net/gengns/j1jm2tjx/
 */
function download_csv(csv, filename) {
    var csvFile;
    var downloadLink;

    // CSV FILE
    csvFile = new Blob([csv], {type: "text/csv"});

    // Download link
    downloadLink = document.createElement("a");

    // File name
    downloadLink.download = filename;

    // We have to create a link to the file
    downloadLink.href = window.URL.createObjectURL(csvFile);

    // Make sure that the link is not displayed
    downloadLink.style.display = "none";

    // Add the link to your DOM
    document.body.appendChild(downloadLink);

    // Lanzamos
    downloadLink.click();
}

function export_table_to_csv(html, filename) {
    var csv = [];
    var rows = document.querySelectorAll("table tr");

    for (var i = 0; i < rows.length; i++) {
        var row = [], cols = rows[i].querySelectorAll("td, th");

        for (var j = 0; j < cols.length; j++)
            row.push(cols[j].innerText);

        csv.push(row.join(","));
    }

    // Download CSV
    download_csv(csv.join("\n"), filename);
}
const tables = document.querySelectorAll('.table--print');
let tableMatchingID;
const reveSelected = [];

if ( tables ) {
    tables.forEach( table => {
        const reveTitle = table.querySelector('.table--print-title').textContent;

        // TÉLÉCHARGER TOUT LES RÊVES
        const buttonDownload = document.querySelector('.button--download');
        buttonDownload.addEventListener("click", function () {
            if ( buttonSelectAll.classList.contains('-is-selected') ) {
                var html = table.outerHTML;
                export_table_to_csv(html, `${reveTitle}.csv`);
                console.log(`
                Tout les rêves ont été sélectionnés.
                rêve sélectioné: ${reveTitle}
                `);

            // SELECTION DE CERTAINS REVES
            } else if ( reallyButton ) {

                // Modifying the table name
                const tableFullName = table.closest('.reve--to-print').getAttribute('id');
                tableMatchingID = tableFullName.replace( 'print', '');

                const reveSelectedGood = JSON.stringify(reveSelected);

                // Filter the selected reves
                const reveFiltering = reveSelected.filter( reveMatched );

                function reveMatched(reve) {
                    if ( reve === tableMatchingID ) {
                        const html = table.outerHTML;
                        export_table_to_csv(html, `${reveTitle}.csv`);

                        console.log(`${reveTitle}`);
                    } else {
                        // Silence is golden
                    }
                }

            } else {
                // Silence is golden
            }
        });
    });
}

// Selection de tout les rêves
const buttonSelecteds = document.querySelectorAll('.article-reve');
const buttonSelectAll = document.querySelector('.button--select');
if ( buttonSelectAll ){
    buttonSelectAll.addEventListener('click', function() {
        buttonSelectAll.classList.toggle('-is-selected')
        console.log(`Tout les rêves ont été sélectionnés.`);
        if ( buttonSelecteds ){
            buttonSelecteds.forEach( selected => {
                reallyButton = selected.querySelector('.button--select-to-download');
                reallyButton.classList.toggle('-is-selected');
            });
        }
    });
}

// Selection custom des rêves
let reallybutton;
if ( buttonSelecteds ){
    buttonSelecteds.forEach( selected => {
        reallyButton = selected.querySelector('.button--select-to-download');
        reallyButtonTitle = selected.querySelector('.article-reve--header h1').innerHTML;
        const selectedID = selected.getAttribute('id');
        reallyButton.addEventListener('click', function(e) {
            const buttonDownloadReve = e.target;
            const buttonDownloadReveContainer = buttonDownloadReve.closest('.article-reve--download');
            const articleReveHeaderContainer = buttonDownloadReveContainer.closest('.article-reve--header');
            const articleReveTitle = articleReveHeaderContainer.querySelector('h1').innerHTML;
            const selectedDreamsContainer = document.querySelector('.selected-dreams');
            const selectedDreamsText = `<p class="selected-dreams-item">- ${articleReveTitle}</p>`;
            buttonDownloadReve.classList.toggle('-is-selected');
            reveSelected.push(selectedID);

            if ( buttonDownloadReve.classList.contains('-is-selected') ) {
                selectedDreamsContainer.classList.remove('is-hidden');
                selectedDreamsContainer.insertAdjacentHTML('beforeend', selectedDreamsText);
                console.log(`Le rêve sélectionné est ${articleReveTitle}`);
            } else {
                console.log('button is uncheck');
                if ( selectedDreamsContainer.hasChildNodes() ) {
                    const selectedDreamsTextItems = document.querySelectorAll('.selected-dreams-item');
                    // selectedDreamsTextItems.forEach( item => {
                    //     if( item.innerHTML = articleReveTitle ) {
                    //         console.log('on doit supprimer' + articleReveTitle)
                    //         item.remove();
                    //     }
                    // });
                    const ArraySelectedDreamsTextItems = Array.from( selectedDreamsTextItems );
                    console.log( typeof ArraySelectedDreamsTextItems );
                    ArraySelectedDreamsTextItems.find( item => removeItem(item) )

                    function removeItem(item) {
                        if( item.innerHTML = articleReveTitle ) {
                            console.log('on doit supprimer' + articleReveTitle)
                            item.remove();
                        }
                    }
                } else {
                    // Silence is golden.
                }
            }


        });
    });
}

