//DOM
const arrow = document.querySelector('.arrow');
const items = document.querySelector('.menuItemsNone');
const socialMedia = document.querySelectorAll('.js-menuItem')
const activeMedia = document.querySelector('.displayActiveMedia')
 

let active;


function arrowStatus() {
  let up = arrow.classList.contains('arrowDomUp');
  if(!up) {
    arrow.classList.remove('arrowDomDown');
    arrow.classList.add('arrowDomUp');
    items.classList.remove('menuItemsNone');
    items.classList.add('menuItemsVisible');
  } else {
    arrow.classList.remove('arrowDomUp');
    arrow.classList.add('arrowDomDown');
    items.classList.remove('menuItemsVisible');
    items.classList.add('menuItemsNone');
  }
}


arrow.addEventListener('click', () => {
  
arrowStatus()


});


socialMedia.forEach((media, index
) => {
  media.addEventListener('mouseenter', (e) => {
      media.classList.add('mediaHover');

    
  })
})

socialMedia.forEach((media, index
) => {
  media.addEventListener('mouseleave', (e) => {
      media.classList.remove('mediaHover');

    
  })
})

socialMedia.forEach((media) => {
  media.addEventListener('click', () => {
    activeMedia.innerHTML = media.innerHTML
    arrowStatus()
    
  })
})
