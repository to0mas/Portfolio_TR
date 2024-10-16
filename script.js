hamburger = document.querySelector(".hamburger");
hamburger.onclick = function(){
    navBar = document.querySelector(".navbar")
    navBar.classList.toggle("active");
}



const races = document.querySelector("body");
console.log(races.offsetWidth)

function getScrollAmount() {
	let racesWidth = races.scrollWidth;
	return -(racesWidth - window.innerWidth);
}

const tween = gsap.to(races, {
	
	duration: 3,
	ease: "none",
});


ScrollTrigger.create({
	trigger:".services",
	start:"top 20%",
	end: () => `+=${getScrollAmount() * -1}`,
	pin:true,
	animation:tween,
	scrub:1,
	invalidateOnRefresh:true,
	markers:false,
})
gsap.from(".predstaveni", {
    opacity: 0,
    scale: 0.5,
    duration: 1,
    ease: "power4.out"
  });
  gsap.from(".predstaveni span", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
    stagger: 0.1
  });

gsap.from(".nadpis-1", {
 
    scale: 2,
    duration: 2,
    ease: "power4.out"
  });
  gsap.from(".nadpis-1 span", {
 
    y: 50,
    duration: 2,
    ease: "power2.out",
    stagger: 0.1
  });

 
  gsap.from(".nadpis-about", {
    opacity: 0,
    y: 100,
    duration: 20,
    ease: "expo.out",

    scrollTrigger: {
        trigger: ".nadpis-about",  
        start: "top 80%",           
        end: "top 30%",             
        scrub: 1,                  
        markers: false              
    }
});
gsap.from(".about-paragraph", {
  opacity: 0,
  x: -100, 
  duration: 20,
  ease: "expo.out",

  scrollTrigger: {
      trigger: ".about-paragraph",  
      start: "top 80%",            
      end: "top 50%",            
      scrub: .5,                   
      markers: false, 
                   
  }
});
 



  