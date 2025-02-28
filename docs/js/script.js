
// common animations 
const btns = document.querySelectorAll('.btn');
const menuLinks = document.querySelectorAll('.menu-links'); // for menu animation 


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



const preloader = document.getElementById('preloader');

document.addEventListener('DOMContentLoaded', () => {
    gsap.to(preloader, {
        zIndex: -1,
        opacity: 0,
        duration: 1,
        x: "100%"
    })
})

// Showing menu --------------------------------------------------------------------------------------------------------
const menuIcon = document.querySelector('.menu-icon');
const crossIcon = document.querySelector('.cross-icon');
const menu = document.querySelector('#menu');
let isShowingmenu = true;
const showingmenu = () => {
    const menuImage = document.querySelector('.menu-left img');
    if (isShowingmenu) {
        isShowingmenu = false;

        let tl = gsap.timeline();

        tl
            .to(menuIcon, {
                scale: 2,
                opacity: 0,
                duration: 0.5
            })
            .to(menu, {
                y: "0%",
                duration: 1
            })
            .from(crossIcon, {
                opacity: 0,
                rotate: 360,
                duration: 0.5
            })
            .from(menuImage, {
                opacity: 0,
                x: "-100%",
                duration: 0.5
            })
            .from(".menu-links a", {
                y: "100%",
                duration: 1
            })

    } else {
        isShowingmenu = true;

        let tl = gsap.timeline();

        tl
            .to(menu, {
                y: "-100%",
                duration: 1
            })
            .to(menuIcon, {
                scale: 1,
                opacity: 1,
                duration: 0.5
            })

    }
}
menuIcon.addEventListener('click', showingmenu);
crossIcon.addEventListener('click', showingmenu);

// menulink animation --------------------------------------------------------------------------------------------------------
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