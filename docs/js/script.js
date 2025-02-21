
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



// common animations 
const menuLinks = document.querySelectorAll('.menu-links');
const btns = document.querySelectorAll('.btn');

// button animation 
btns.forEach((btn) => {
    btn.addEventListener('mouseenter', () => {
        let tl = gsap.timeline();

        tl.to(btn, { letterSpacing: "5px", opacity: 0, duration: 0.2, ease: "bounce.out" })
            .to(btn, { letterSpacing: "0px", opacity: 1, duration: 0.1, ease: "bounce.out" });
    })
    btn.addEventListener('mouseenter', () => {
        cursor.textContent = 'click';
    })
    btn.addEventListener('mouseleave', () => {
        cursor.textContent = 'dotHP';
    })
})


// cursor animation
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        left: e.clientX,
        top: e.clientY,
        ease: 'power4.inout'
    })
})

menuLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
        cursor.classList.add("opacity-50");
        cursor.textContent = "menu"
        let element = link.querySelector('a');
        gsap.timeline()
            .to(element, { y: 20, opacity: 0, duration: 0.2 })
            .to(element, { y: 0, opacity: 1, duration: 0.2 })
    })
    link.addEventListener("mouseleave", () => {
        cursor.classList.remove("opacity-50");
        cursor.textContent = "dotHP"
    })
})