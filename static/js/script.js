var open = document.querySelector("#open");
var close = document.querySelector("#close");
var tl = gsap.timeline()

open.addEventListener("click", () => {
    tl.play()
})

close.addEventListener("click", () => {
    tl.reverse()
})














tl.to("#d-menu", {
    top: 0,
    duration: 1,
})

tl.from("#stag li a", {
    y: 20,
    stagger: 0.25,
    opacity: 0,
    duration: 0.8,
})

tl.from("#close", {
    opacity: 0,

})

tl.pause()

// scroll animation

gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
    yPercent: -100 * (sections.length - 1), // Move sections vertically instead of horizontally
    ease: "none",
    scrollTrigger: {
        trigger: ".container2",
        pin: true,
        scrub: true,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + document.querySelector(".container2").offsetHeight,
        passive:true,
    },
      force3D: true,
      willChange: "transform"
});







