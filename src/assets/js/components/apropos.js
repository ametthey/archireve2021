// CLICK TO COLLAPSE A PROPOS
const aproposCollapseElements = document.querySelectorAll('.propos--collapse-container ');
aproposCollapseElements.forEach(element => {
    const collapseElements = element.querySelectorAll('.collapse--element');

    collapseElements.forEach( el => {
        const elementPara = el.querySelector('.collapse--element h3');
        const elementParaContainer = el.querySelector('.collapse--element-texte');
        el.addEventListener( 'click', () => {
            elementPara.classList.toggle('is-active');
            if( elementPara.style.maxHeight ) {
                elementPara.style.maxHeight = null;
                elementParaContainer.style.maxHeight = null;
            } else {
                elementPara.style.maxHeight = elementPara.scrollHeight + 'px';
                elementParaContainer.style.maxHeight = elementPara.scrollHeight + 'px';
            }
        });
    })

});


// CHANGE BACKGROUND COLOR A PROPOS

// Checker si le rightContainer a la place is-open
var elemToObserve = document.querySelector('.right--container-propos');

if ( elemToObserve ) {
    var prevClassState = elemToObserve.classList.contains('is-visible');
}

var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if(mutation.attributeName == "class"){
            var currentClassState = mutation.target.classList.contains('is-visible');
            if(prevClassState !== currentClassState)    {
                prevClassState = currentClassState;
                if(currentClassState) {


                console.log("class added!");


                // Intersection Observer ici
                let sections = [...document.querySelectorAll('.propos--section')];
                let options = {
                    rootMargin: "0px",
                    threshold: 0.5
                };

                let callback = (entries, observer) => {
                    entries.forEach(entry => {
                        let { target } = entry;

                        if (entry.intersectionRatio >= 0.5) {
                            target.classList.add("is-visible");

                            if ( target.classList.contains('is-visible')  ) {
                                console.log( target );
                            }

                        } else {
                            target.classList.remove("is-visible");
                        }
                    });
                };

                let observer = new IntersectionObserver(callback, options);

                sections.forEach((section, index) => {
                    observer.observe(section);
                });



                } else {
                    console.log("class removed!");
                }
            }
        }
    });
});
observer.observe(elemToObserve, {attributes: true});



//////////// CODE FROM COLLAPSE
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
