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
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".container2",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + document.querySelector(".container2").offsetWidth
    }
});


// make menu disappear when scroll 

document.addEventListener('DOMContentLoaded', function () {
    let lastScrollTop = 0;
    const navbar = document.getElementById('menu');

    if (navbar) {
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop) {
                // Scroll down: hide the navbar using GSAP
                gsap.to(navbar, {y: '-300%', duration: 0.3, ease: 'power2.out'});
            } else {
                // Scroll up: show the navbar using GSAP
                gsap.to(navbar, {y: '0%', duration: 0.3, ease: 'power2.out'});
            }

            lastScrollTop = scrollTop;
        });
    }
});

