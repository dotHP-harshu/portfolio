const elementLine = document.querySelector('.link-element div svg');
const elementLinks = document.querySelectorAll('.link-element div a');
const navbar = document.querySelector('nav');


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
gsap.from(navbar, {
    y: -520,
    duration: 1,
    stagger: true
})


// Project card animation
const projects = document.querySelectorAll('.project');
projects.forEach((project)=>{
    gsap.from(project, {
        y: 200, // Move to normal position
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: project,
            start: "top 70%",
            toggleActions: "play reverse play reverse",
        }
    });
})
