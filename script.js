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
    duration: 1,
    ease: "power4.out"
  });
  gsap.from(".nadpis-1 span", {
 
    y: 50,
    duration: 10,
    ease: "power2.out",
    stagger: 0.1
  });

 



  