
// common animations 
const btns = document.querySelectorAll('.btn');
const menuLinks = document.querySelectorAll('.menu-links'); // for menu animation 
const menuImage = document.querySelector('.menu-left img'); // for menuImage animation 



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
let isShowingMenu;

if (menu.classList.contains("showing")) {
    isShowingMenu = true
} else {
    isShowingMenu = false
}
const showingMenu = () => {
    if (!isShowingMenu) {
        let tl = gsap.timeline();
        tl
            .to(menuIcon, {
                scale: 2,
                opacity: 0,
                duration: 0.125,
            })
            .to(menu, {
                y: "0%",
                duration: 0.25,
                ease: "power2.out"
            })
            .from(crossIcon, {
                opacity: 0,
                rotate: 360,
                duration: 0.25,
                ease: "power2.in"
            })
            .from(menuImage, {
                opacity: 0,
                x: "-100%",
                duration: 0.25,
            })
            .from(".menu-links a", {
                y: "100%",
                duration: 0.25,
                ease: "power1.out"
            })

        isShowingMenu = true;
        menu.classList.toggle("showing");
    } else {
        let tl = gsap.timeline();

        tl
            .to(menu, {
                y: "-100%",
                duration: 0.25,
            })
            .to(menuIcon, {
                scale: 1,
                opacity: 1,
                duration: 0.25,
            })

        isShowingMenu = false;
        menu.classList.toggle("showing");
    }


}


menuIcon.addEventListener('click', showingMenu);
crossIcon.addEventListener('click', showingMenu);

// cursor animation on menu and cross icon from 110 to 133
menuIcon.addEventListener("mouseenter", () => {
    cursor.textContent = "menu";
    gsap.to(cursor, {
        scale: 0.8,
    })
})
menuIcon.addEventListener("mouseleave", () => {
    cursor.textContent = "dotHP";
    gsap.to(cursor, {
        scale: 1,
    })
})
crossIcon.addEventListener("mouseenter", () => {
    cursor.textContent = "close";
    gsap.to(cursor, {
        scale: 0.8,
    })
})
crossIcon.addEventListener("mouseleave", () => {
    cursor.textContent = "dotHP";
    gsap.to(cursor, {
        scale: 1,
    })
})
// cursor animation on menu and cross icon from 110 to 133


// menulink animation --------------------------------------------------------------------------------------------------------
menuLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
        cursor.textContent = "go to ";
        gsap.to(cursor, {
            scale: 0.8,
        })
    })
    link.addEventListener("mouseleave", () => {
        cursor.textContent = "dotHP";
        gsap.to(cursor, {
            scale: 1,
        })
    })
})



