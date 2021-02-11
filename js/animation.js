// get the element

const headerNav = document.querySelector('header');
const heroTitle = document.querySelector('.title');
const heroImgDesktop = document.querySelector('.hero_desktop');


// animating with gsap
const tl = gsap.timeline({
    defaults: {
        duration: 0.7,
        ease: Power1.inOut
    }
})

tl.from(headerNav, {y: -30, opacity: 0})
    .from(heroTitle, {x: -30, opacity: 0})
    .from(heroImgDesktop, {xPercent: 100}, 1)

// animating why us section

gsap.from('.why-us', {y: -50, opacity: 0, scrollTrigger:{
    trigger: '.why-us',
    toggleActions: "restart none none reverse",
    start: '25% 75%'
}})


// animating benefit section

gsap.from('.benefit', {scrollTrigger: {
    trigger: '.benefit',
    toggleActions: "restart none none reverse"
}, y: -40, opacity: 0, stagger: '0.3'})

gsap.from(".card", {
    scrollTrigger: {
        trigger: '.benefit-cards',
        toggleActions: "restart none none reverse" 
    },
    yPercent: -30,
    opacity: 0,
    stagger: '0.5', duration: 0.6
});

// animating comingsoon section'
const comingsoonTl = gsap.timeline({
    defaults: {
        duration: 0.7,
        ease: Power1.inOut,
    }
})

gsap.from('.phone',{xPercent: -20, opacity: 0, duration: 0.5,
    scrollTrigger:{
        trigger: '.coming-soon',
        start: '25% 75%',
        toggleActions: "restart none none reverse" 
    }
})
gsap.from('.coming-soon-txt', {
    scrollTrigger: {
        trigger: '.coming-soon',
        start: '25% 75%',
        toggleActions: "restart none none reverse" 
    },
    xPercent: 20,
    opacity: 0,
    delay: 0.4
})

// gsap.from('.phone', {x: -100, 
//     opacity: 0, 
//     duration: 0.5,
//     scrollTrigger: {
//     trigger: '.coming-soon-cover',
//     toggleActions: "restart none none reverse",
//     start: '25% 75%'
// }})

// gsap.from('.coming-soon-txt', {x: 100, 
//     opacity: 0, 
//     duration: 0.5,
//     scrollTrigger: {
//     trigger: '.coming-soon-txt',
//     toggleActions: "restart none none reverse",
//     start: '25% 75%'
// }})