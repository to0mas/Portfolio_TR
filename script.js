hamburger = document.querySelector(".hamburger");
hamburger.onclick = function(){
    navBar = document.querySelector(".navbar")
    navBar.classList.toggle("active");
}


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });
  
  const hiddenElements = document.querySelectorAll('.about');
  hiddenElements.forEach((el) => observer.observe(el));


  const myText = new SplitType('#nadpis')

  gsap.to('.char',{
    y:0,
    stagger: 0.05,
    delay: 0.2,
    duration: .1,
  })