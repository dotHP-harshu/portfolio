
// common animations 
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



const preloader = document.getElementById('preloader');

document.addEventListener('DOMContentLoaded', () => {
    gsap.to(preloader, {
        zIndex: -1,
        opacity: 0,
        duration: 1,
        x: "100%"
    })
})