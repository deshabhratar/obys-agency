function loadingAnimation(){
    
var tl= gsap.timeline()
tl.from(".line h1",{

    y:150,
    stagger:0.25,
    duration:0.6,
    delay:0.5,
})
tl.from("#line1-part1",{
    opacity:0,
    onStart:function(){
        var h5timer = document.querySelector("#line1-part1 h5");
var count=0;
setInterval(function(){
    if(count<100){
        h5timer.innerHTML = count++;
    }
    else{
        h5timer.innerHTML = count;
    }
},30)
    }
})
tl.to(".line h2",{

    animationName:"anime",
    opacity:1,
})
tl.to("#loader",{
    opacity:0,
    duraton:0.2,
    delay:4,
})

tl.from("#page1",{
    y: 1600,
    delay:0.3,

    duration:0.5,
    ease: Power4,

})
tl.to("#loader",{
    display:"none",
});
tl.from("#navbar",{
    opacity:0,
})
tl.from(".hero h1, .hero h2, .hero h3",{
    y:120,
    delay:0.2,
    duration:0.4,
    stagger:0.2, 
})

}


function cursorAnimation(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#crsr",{
            left:dets.x,
            top:dets.y,
        })
    
    })
    Shery.makeMagnet("#navbar2 h4", {
         
      });
}
loadingAnimation()
cursorAnimation()