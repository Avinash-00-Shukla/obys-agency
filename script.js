var h5timer = document.querySelector("#line1-part1 h5"); 

var tl = gsap.timeline();
tl.from(".line h1", {
    y: 150,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.5
});
tl.from("#line1-part1", {
    opacity: 0, 
    onStart: function() {
        var grow = 0;
        var counter = setInterval(() => {
            if(grow == 100) clearInterval(counter); 
            h5timer.innerHTML = grow++;
        }, 20);
    }
});
tl.to(".line h2",{ 
   animationName : "anime",
   opacity: 1
});
tl.to("#loader", {
    opacity: 0,
    delay: 2,
    duration: 0.2,
    display: "none",
})
tl.from("#page1", {
    delay: 0.2,
    y:1600,
    opacity: 0,
    duration: 0.5,
    ease:Power4
});