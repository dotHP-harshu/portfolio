const navbar = document.querySelector('nav');

gsap.from(navbar, {
    y: '-100%',
    duration: 1,
    stagger: true
})

// link element animation
const elementLine = document.querySelector('.link-element div svg');
const elementLinks = document.querySelectorAll('.link-element div a');

gsap.from(elementLine, {
    height:0,
    duration:1,
})

gsap.from(elementLinks, {
    opacity: 0,
    y: 100,
    duration: 2,
    stagger: 1
})

// hero animation 
gsap.from(".hero-left h1", {
    stagger:0.5,
    opacity:0,
    y:50,
    duration:1
})

gsap.from(".hero-para", {
    text: '',
    duration:1,
})

