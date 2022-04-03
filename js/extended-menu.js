let openBtn = document.querySelector('#openMenu');
let close = document.querySelector('#closeMenu');
let menu = document.querySelector('#menu')

openBtn.addEventListener('click', function(){
    menu.classList.remove('extended-menu--hidden');
});

close.addEventListener('click', function(){
    menu.classList.add('extended-menu--hidden');
});