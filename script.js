let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();


// anime.from(".text" , 5 , {opacity : 0});
// anime.to({opacity : 1});

timeline
.to(".rock", 3 , {y:-300})
.to(".girl", 3 , {y:-200} ,'-=3')
.to(".bg1", 3 , { y: -50 },{ y : 0}, "-=3")
.to(".content" , 3 , { top : "0%"}, "-=3")
.to(".content-images", 3 , {opacity : 1, duration : 3})
.to(".content-images", 1 , {scale : 0.9})
.to(".text", 3 , {x : 0 } , {opacity : 0})


let scene = new ScrollMagic.Scene({
    triggerElement  : "section",
    duration : "300%",
    triggerHook : 0,
})
.setTween(timeline)
.setPin("section")
.addTo(controller)