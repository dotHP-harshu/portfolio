
// Showing menu
const menuIcon = document.querySelectorAll('.menu-icon>img')[0];
const crossIcon = document.querySelectorAll('.menu-icon>img')[1];
const menu = document.querySelector('.menu');
let isShowingmenu = true;
const showingmenu = ()=>{
    if(isShowingmenu) {
        crossIcon.classList.add('max-mobile:scale-100');
        crossIcon.classList.remove('max-mobile:scale-0');
        menuIcon.classList.add('max-mobile:scale-0');
        menuIcon.classList.remove('max-mobile:scale-100');
        menu.classList.remove('max-mobile:right-[-60vw]');
        menu.classList.add('max-mobile:right-0');
        isShowingmenu = false;
    }else{
        crossIcon.classList.add('max-mobile:scale-0');
        crossIcon.classList.remove('max-mobile:scale-100');
        menuIcon.classList.add('max-mobile:scale-100');
        menuIcon.classList.remove('max-mobile:scale-0');
        menu.classList.add('max-mobile:right-[-60vw]');
        menu.classList.remove('max-mobile:right-0');
        isShowingmenu = true;
    }
}
menuIcon.addEventListener('click', showingmenu);
crossIcon.addEventListener('click', showingmenu);