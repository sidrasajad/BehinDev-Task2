let hamburger = document.getElementsByClassName('hamburger')[0];
let mobileNav = document.getElementsByClassName('nav-list')[0];

let isActive = false;

hamburger.addEventListener('click', function(){
    mobileNav.classList.toggle('open');

    if (!isActive) {
        hamburger.children[0].style.transform = 'rotate(45deg)';
        hamburger.children[1].style.opacity = '0';
        hamburger.children[2].style.transform = 'rotate(-45deg)';
        isActive = true;
    } else {
        hamburger.children[0].style.transform = 'rotate(0deg)';
        hamburger.children[1].style.opacity = '1';
        hamburger.children[2].style.transform = 'rotate(0deg)';
        isActive = false;
    }
});


