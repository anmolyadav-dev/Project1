const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

// gsap ----------------------have to learn------
function firstPageAnimation(){
  var tl = gsap.timeline();

  tl.from("#nav" , {
    y: '-10',
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut
  })
  tl.to(".boundingElem" , {
    y: '0',
    
    duration: 2,
    ease: Expo.easeInOut,
    stagger: .2,
    delay:-1.5
  })
  tl.from("#herofooter" , {
    y:-10,
    opacity:0,
    duration: 1.5,
    delay : -1.25,
    ease: Expo.easeInOut
    
  })

}

//selecting minicircle
const minicircle = document.getElementById("minicircle");
// checking when mouse leaves 
document.addEventListener('mouseleave',()=>{
  
  minicircle.style.opacity = "0";
});

// .......................................................................................
let xprev = 0;
let yprev = 0;
let timeout;
let xscale =1 , yscale =1 ;

window.addEventListener("mousemove",function(dets){

  
  let circleMouseFollower = ()=>{
  if(minicircle.style.transform===0 )  minicircle.style.transform = `scale(1)`;
    minicircle.style.opacity = "1";

    setTimeout(() => {
      minicircle.style.left = `${dets.clientX}px`;
    minicircle.style.top = `${dets.clientY}px`;
    }, 100);

    


    // circle compress during movement
    this.clearTimeout(timeout);
    xscale = gsap.utils.clamp(0.8 , 1.2 , dets.clientX - xprev);
    yscale = gsap.utils.clamp(0.8 , 1.2 , dets.clientY - yprev);
    xprev = dets.clientX;
    yprev = dets.clientY;
    minicircle.style.transform = `translate(-50%,-50%) scale(${xscale} , ${yscale})`;

    // after stopping the cursor getting circle again

    timeout = setTimeout(() => {
      minicircle.style.transform = `translate(-50%,-50%) scale(1)`;
    }, 200);

   
     

  }
  circleMouseFollower();


})


firstPageAnimation();

// .............................. hover photo followere effect
 
document.querySelectorAll(".elem").forEach(elem =>{
  let rotate=0,diff=0;

  elem.addEventListener("mouseleave",()=>{
    gsap.to(elem.querySelector("img"),{
      opacity:0,
      ease : Power3,
      duration:0.5,
    })
  })

  elem.addEventListener("mousemove" , (dets)=> {

    //elem animation


    //photo tracking animation
    diff= dets.clientX - rotate;
    console.log(diff);
    rotate = dets.clientX;

    gsap.to(elem.querySelector("img"),{
      opacity: 1,
      ease: Power3,

      top: dets.clientY - elem.getBoundingClientRect().top ,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20,20,diff*0.6),
      duration:0.5
      
      
    })

  })
  
})

