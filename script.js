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

 
  gsap.from(".nadpis-about ", {
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
 
gsap.from(".skills-title", {
  opacity: 0,
  x: -100,
  duration: 20,
  ease: "expo.out",

  scrollTrigger: {
      trigger: ".skills-title",
      start: "left 50%",
      end: "top 30%",
      scrub: 1,
      markers: false
  }
});

// kurzor

  const cursorDot = document.querySelector("[data-cursor-dot]");
  const cursorOutline = document.querySelector("[data-cursor-outline]");

  window.addEventListener("mousemove",function (e){
const posX = e.clientX;
const posY = e.clientY;

cursorDot.style.left = `${posX}px`;
cursorDot.style.top = `${posY}px`;

cursorOutline.style.left = `${posX}px`;
cursorOutline.style.top = `${posY}px`;

cursorOutline.animate({
left: `${posX}px`,
right:`${posY}px`,
},{duration: 500, fill: "forwards"});
  });

  gsap.fromTo(".skills-box", 
    { opacity: 0, y: -50 }, 
    { 
        opacity: 1, 
        y: 0, 
        duration: 1,
        ease: "bounce.out",
        stagger: 0.25,
        scrollTrigger: {
            trigger: "#skills",
            start: "top 90%", // Trigger slightly earlier as you approach the section
            end: "top 10%",   // End trigger as you start to scroll away
            toggleActions: "play none none reverse", // Play on enter, reverse on leave
        }
    }
);