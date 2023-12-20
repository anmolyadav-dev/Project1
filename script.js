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
    xloc = dets.x;
    yloc = dets.y;

    minicircle.style.left = `${xloc}px`;
    minicircle.style.top = `${yloc}px`;


    // circle compress during movement
    this.clearTimeout(timeout);
    xscale = gsap.utils.clamp(0.8 , 1.2 , xloc - xprev);
    yscale = gsap.utils.clamp(0.8 , 1.2 , yloc - yprev);
    xprev = xloc;
    yprev = yloc;
    minicircle.style.transform = `translate(-50%,-50%) scale(${xscale} , ${yscale})`;

    // after stopping the cursor getting circle again

    timeout = setTimeout(() => {
      minicircle.style.transform = `translate(-50%,-50%) scale(1)`;
    }, 100);

   
     

  }
  circleMouseFollower();


})


firstPageAnimation();
