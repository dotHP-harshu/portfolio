const elementLine = document.querySelector('.link-element div svg');
const elementLinks = document.querySelectorAll('.link-element div a');
const navbar = document.querySelector('nav');
const quotePara = document.querySelector('.quote>p')
const quoteAuthor = document.querySelector('.quote-author>p');
const sectionHeads = document.querySelectorAll('.section-head')









// section head animation --------------------------------------------------------------------------------------------------------
sectionHeads.forEach((sectionHead) => {
    gsap.from(sectionHead, {
        opacity: 0,
        x: "-100%",
        duration: 1,
        scrollTrigger: {
            trigger: sectionHead,
            start: "50% 100%",
            toggleActions: "play reverse play reverse"
        }
    })
})

// hero animation --------------------------------------------------------------------------------------------------------
function playHeroAnimation() {
    let tl = gsap.timeline();
    // link element animation

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

    tl
        .from(".right-hero-img img", {
            scale: 0,
            opacity: 0,
            rotate: 180,
            duration: 1,
        })

        .from(".hero-left h1", {
            stagger: 0.5,
            opacity: 0,
            y: 50,
            duration: 1
        })
        .from(".hero-para", {
            text: '',
            duration: 0.5,
        })
        .from('.right-hero-para', {
            x: -100,
            duration: 1,
            opacity: 0,
        });

    return tl;
}

ScrollTrigger.create({
    trigger: ".hero",
    start: "top center", // When the top of the hero reaches the top of the viewport
    onEnter: () => playHeroAnimation().restart(),
    onEnterBack: () => playHeroAnimation().restart(), // Play when scrolling back up
});

// Quote section animation --------------------------------------------------------------------------------------------------------
gsap.from(quotePara, {
    y: 40,
    opacity: 0,
    scrollTrigger: {
        trigger: quotePara,
        start: "top 80%",
        end: "bottom 50%",
        scrub: 1
    }
})
gsap.from(quoteAuthor, {
    x: 40,
    opacity: 0,
    scrollTrigger: {
        trigger: quoteAuthor,
        start: "top 80%",
        end: "bottom 50%",
        scrub: 1
    }
})


// Project card animation --------------------------------------------------------------------------------------------------------
gsap.from(".projects", {
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".projects",
        start: "top 70%", // When top of container hits 70% of viewport
        toggleActions: "play reverse play reverse",
    }
});

const projects = document.querySelectorAll('.project');
projects.forEach((project) => {

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


// skill animation --------------------------------------------------------------------------------------------------------
gsap.from(".skill-title", {
    y: -200,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".skill-title",
        start: "top 70%",
        end: "top -10%",
        toggleActions: "play reverse play reverse",

    }
})

gsap.from('.skill-names>span', {
    text: '',
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: '.skill-names>span',
        start: "top 70%",
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

// about animation--------------------------------------------------------------------------------------------------------
gsap.from('.about-left>p', {
    text: "",
    opacity: 0,
    duration: 2,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".about-left>p",
        start: "top 100%",
        toggleActions: 'play reverse play reverse'
    }
})

gsap.from(".about-right>img", {
    y: 500,
    duration: 2,
    ease: "steps(12)",
    scrollTrigger: {
        trigger: ".about-right>img",
        start: "top 90%",
        toggleActions: 'play reverse play reverse'
    }
})