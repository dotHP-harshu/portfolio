const elementLine = document.querySelector('.link-element div svg');
const elementLinks = document.querySelectorAll('.link-element div a');


gsap.from(elementLine, {
    height: 0,
    duration: 1,
})

gsap.from(elementLinks, {
    opacity: 0,
    y: 100,
    duration: 2,
    stagger: 1
})


// skill animation 
gsap.from(".skill-title", {
    y: -200,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".skill-title",
        start: "0% 70%",
    }
})

gsap.from('.skill-names>span', {
    text: '',
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: '.skill-names>span',
        start: "top 80%",
        end: "bottom -50%",
        toggleActions: "play reverse play reverse"
    }
})

gsap.from(".skill-left>img", {
    scale: 0,
    y: 100,
    x: 200,
    rotate: 360,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".skill-left>img",
        start: "top 100%",
        toggleActions: 'play reverse play reverse',
    }
})

// about animation

gsap.from('.about-left>p', {
    text: "",
    opacity: 0,
    duration: 2,
    stagger: 0.5,
})

gsap.from(".about-right>img", {
    y: 500,
    duration: 2,
    ease: "steps(12)",
})