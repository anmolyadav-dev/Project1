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


//jab mouse move ho to hum log circle compress kar paye ormaximum compression and minimum comporession define kar paay.................jab mouse move ho to top n bottom compress ho jaye and left right inc and jab mouse chalna band kar jaye to mouse vapus wesa hi hojaye

function circleCompress(){
  var xscale = 1 , yscale = 1;
  var xprev =0;
  var yprev = 0;
  var timeout;
  window.addEventListener('mousemove',function(dets){
    clearTimeout(timeout);
    xscale = gsap.utils.clamp(0.85,1.15, dets.clientX - xprev/10);
    yscale = gsap.utils.clamp(0.85,1.15,dets.clientY- yprev/10);

      xprev = dets.clientX;
      yprev = dets.clientY;

      circleMouseFollower(xscale,yscale);
     
      timeout = setTimeout(() => {
        document.querySelector("#minicircle").style.transform = `translate(-50%,-50%) scale(1,1)`
      }, 100);

  })
}

circleCompress();

function circleMouseFollower (xscale,yscale){
  const minicircle = this.document.querySelector("#minicircle");
  

    
    window.addEventListener('mousemove',function(dets){
      minicircle.style.opacity = '1';
      
        minicircle.style.left = `${dets.clientX}px `;
        minicircle.style.top =  `${dets.clientY}px`;
        minicircle.style.transform = `translate(-50%,-50%) scale(${xscale} , ${yscale})`;
    })
    // translate(${dets.clientX}px , ${dets.clientY }px)
}

firstPageAnimation();
circleMouseFollower(); 
