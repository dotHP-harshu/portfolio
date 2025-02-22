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
