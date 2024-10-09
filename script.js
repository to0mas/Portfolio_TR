hamburger = document.querySelector(".hamburger");
hamburger.onclick = function(){
    navBar = document.querySelector(".navbar")
    navBar.classList.toggle("active");
}



gsap.to('.horizontal-content', {
    xPercent: -100 * (document.querySelectorAll('.box').length - 1),
    ease: 'none',
    scrollTrigger: {
        trigger: '.horizontal-scroll',
        start: 'top top',
        end: '+=2000',
        pin: true,
        scrub: true,
    }
});

// 4. Draggovatelný box
Draggable.create(".draggable-box", {
    type: "x,y",
    edgeResistance: 0.65,
    bounds: ".horizontal-scroll",
    inertia: true
});

// 5. Návrat k vertikálnímu scrollování po 300vh
gsap.fromTo('.resume-text',
    { opacity: 0, y: 50 },
    {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
            trigger: '.vertical-resume',
            start: 'top center',
            end: 'top 100px',
            scrub: true,
        }
    }
);





    