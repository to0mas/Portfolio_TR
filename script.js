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
        duration: .5,
        ease: "bounce.out",
        stagger: 0.25,
        scrollTrigger: {
            trigger: "#skills",
            start: "top 90%", 
            end: "top 10%",  
            toggleActions: "play none none reverse",
        }
    }
);

gsap.fromTo(".skill", 
  { scale: 0.5, opacity: 0 },
  { 
    scale: 1, 
    opacity: 1, 
    duration: 3, 
    ease: "elastic.out(1, 0.5)",
    scrollTrigger: {
      trigger: ".skill",
      start: "top 90%", 
      toggleActions: "play none none reverse",
      opacity: 0, 
      duration:2,
    }
  }
);

var content1 = document.getElementById("content1");
var content2 = document.getElementById("content2");

var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");

function openWEB(){
  content1.style.transform = "translateX(0)"
   content2.style.transform = "translateX(100%)"
   btn1.style.background = "#b85050"
   btn1.style.color = "#000000"
   btn1.style.borderRadius = " 5px 20px"
  
   content1.style.transitionDelay="0.3s";
  content2.style.transitionDelay="0s";

   btn2.style.background = "#000000"
   btn2.style.color = "#fff"
   btn1.style.borderRadius = " 5px 20px"
  
}
function openGRAP(){
  content1.style.transform = "translateX(100%)"
   content2.style.transform = "translateX(0)"
   btn2.style.background = "#b85050"
   btn2.style.color = "#000000"
   btn2.style.borderRadius = "20px 5px"

   content2.style.transitionDelay="0.3s";
   content1.style.transitionDelay="0s";
   
   btn1.style.background = "#0000"
   btn1.style.color = "#fff"
   btn1.style.borderRadius = " 5px 20px"
}
gsap.from(".contact ", {
  opacity: 0,
  y: 100,
  duration: 20,
  ease: "expo.out",

  scrollTrigger: {
      trigger: ".contact",  
      start: "top 80%",           
      end: "top 30%",             
      scrub: 1,                  
      markers: false              
  }
});;



let filterItem = document.querySelector('.items-links');
let filterImages = document.querySelectorAll('.gallery img');

window.addEventListener('load', () => {
  filterItem.addEventListener('click', (selectedItem) => {
    if (selectedItem.target.classList.contains('item-link')) {
      document.querySelector('.menu-active').classList.remove('menu-active');
      selectedItem.target.classList.add('menu-active');

      let filterName = selectedItem.target.getAttribute('data-name');

      filterImages.forEach((image) => {
        let imageCategory = image.getAttribute('data-name');
        if (imageCategory === filterName) {
          image.style.display = 'block';
        } else {
          image.style.display = 'none';
        }
      });
    }
  });
});