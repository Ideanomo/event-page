// Where el is the DOM element being tested for visibility
function isHidden(el) {
    var style = window.getComputedStyle(el);
    return (style.display === 'none')
}

// Menu block
var
    menu = document.getElementById('drop-down'),
    el = document.getElementById('to-nav') // stores reference to location of node in DOM tree
;

el.addEventListener('click', menuToggle);

function menuToggle(e) {
    if (isHidden(menu)) {
        menu.className = 'secondary-nav';
    }
}

var x = document.getElementById('close-menu');
x.addEventListener('click', menuHide);

function menuHide (e) {
   menu.className = 'menu-hidden';
}

