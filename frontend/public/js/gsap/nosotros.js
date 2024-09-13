// Btn ScrollTo:
const heroBtn = document.querySelector('#section__hero .btn');
heroBtn.addEventListener('click', () => {
    gsap.to(window, { duration: 0.5, scrollTo: "#section__intro", ease: "power4.out"});
});


gsapSoloAnimations();

// GSAP:
function gsapSoloAnimations() {

    // Hero animación:
    var tl = gsap.timeline();

    tl.from("h1", {
        opacity: 0,
        x: -50,
        duration: 0.5,
        delay: 1,
        ease: "power1.out"
    })
    .from("h2", {
        opacity: 0,
        x: -50,
        duration: 0.5,
        ease: "power1.out"
    }, "-=0.2")
    .from("p", {
        opacity: 0,
        x: -50,
        duration: 0.5,
        ease: "power1.out"
    }, "-=0.2")
    .from("#section__hero .btn", {
        opacity: 0,
        x: -50,
        duration: 0.5,
        ease: "power1.out"
    }, "-=0.2")
    .from("#section__hero picture", {
        opacity: 0,
        y: -50,
        duration: 0.8,
        ease: "power1.out"
    }, "-=0.8")



    // Animacion granos:

    gsap.to(".grano1", {
        rotate: 180,
        scrollTrigger: {
            trigger: "#section__intro",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
        },
    })

    gsap.to(".grano2", {
        rotate: -180,
        scrollTrigger: {
            trigger: "#section__intro",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
        },
    })

}