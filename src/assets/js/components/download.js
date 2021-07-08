import XLSX from 'xlsx';

const reves = document.querySelectorAll('.article-reve');
let revesOBJECT;
reves.forEach( reve => {
    // Create json
    const author = reve.querySelector('.article-header-author').innerHTML;
    const date = reve.querySelector('.article-header-date').innerHTML;
    const typologie = reve.querySelector('.article-taxonomies--typologie').classList[1].replace('border-right-','');
    const tags = reve.querySelectorAll('.article-taxonomies--tag .button--squared');
    let tagList = [];
    tags.forEach( tag => {
        const tagItem = tag.querySelector('p').innerHTML;
        tagList.push(tagItem);
    });
    const lucidite = reve.querySelector('.article-taxonomies--lucidite p').innerHTML;
    const titre = reve.querySelector('.article-reve--header h1').innerHTML;
    const texte = reve.querySelector('.article-reve--text p').innerHTML;

    revesOBJECT = {
        "reve": {
            "auteur": {},
            "tag": {},
            "niveauxdelucidite": {},
            "titre": {},
            "contenu": {}
        }
    }

    console.log( author );
    console.log( date );
    console.log( typologie );
    console.table( tagList );
    console.log( lucidite );
    console.log( titre );
    console.log( texte );

    revesOBJECT.reve.auteur = author;
    revesOBJECT.reve.date = date;
    revesOBJECT.reve.typologie = typologie;
    revesOBJECT.reve.tag = tagList;
    revesOBJECT.reve.lucidite = lucidite;
    revesOBJECT.reve.titre = titre;
    revesOBJECT.reve.texte = texte;


    const year = date.substring(6,9);
    const month = date.substring(4,5);
    const day = date.substring(0,1);



    // Selection
    const buttonForDownload = reve.querySelector('.button--select-to-download');
    const selection = [];

    buttonForDownload.addEventListener( 'click', (e) => {
        e.preventDefault();
        buttonForDownload.classList.toggle('is-active');

        if ( buttonForDownload.classList.contains('is-active') ) {
            const reveSelected = reve;
        }
    });


});

const revesJSON = JSON.stringify(revesOBJECT);
console.log( revesJSON );

// sheetjs
// Creating a Workbook
var wb = XLSX.utils.book_new();
wb.Props = {
    Title: 'Les rêves',
    Subject: "Test",
    Author: 'Archireve',
    CreatedDate: new Date(2017,12,19)
    // CreatedDate: new Date(year,month,day);
};
wb.SheetNames.push("Reves");
// var ws = XLSX.utils.json_to_sheet(revesJSON);
var ws = XLSX.utils.sheet_add_json(revesOBJECT);
wb.Sheets["Reves"] = ws;

console.log( wb );

// Exporting Workbook for Download
// var wbout = XLSX.write(wb, {bookType:'xlsx',  type: 'binary'});
// function s2ab(s) {
//     var buf = new ArrayBuffer(s.length); //convert s to arrayBuffer
//     var view = new Uint8Array(buf);  //create uint8array as viewer
//     for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF; //convert to octet
//     return buf;
// }

// const buttonDownload = document.querySelector('.button--download');
// buttonDownload.addEventListener('click', (e) =>  {
//     saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), 'reves.xlsx');
// })

// console.log( wb.Props );
