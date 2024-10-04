hamburger = document.querySelector(".hamburger");
hamburger.onclick = function(){
    navBar = document.querySelector(".navbar")
    navBar.classList.toggle("active");
}





  const splitText = new SplitType('.nadpis-1', { types: 'chars' });

    
    gsap.from(splitText.chars, {
      opacity: 0,
      y: 50,
      stagger: 0.05,
      duration: 1,
      ease: 'back.out(1.7)',
    });

    