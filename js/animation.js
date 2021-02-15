// get the element

const headerNav = document.querySelector('header');
const heroTitle = document.querySelector('.title');
const heroTitleJoin = document.querySelector('.title_pr')
const hero = document.querySelector('.hero')
const phoneMockup = document.querySelector('.phone')


// animating with gsap
const tl = gsap.timeline({
    defaults: {
        duration: 0.7,
        ease: Power1.inOut
    }
})

tl.from(headerNav, {y: -30, opacity: 0})
    .from(hero, {opacity: 0})
    .from(heroTitle, {y: -30, opacity: 0, stagger: '0.5'})
    .from(heroTitleJoin, {y: -30, opacity: 0, stagger: '0.5'})

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
gsap.from(phoneMockup, {
    scrollTrigger: {
        trigger: '.coming-soon',
        start: '25% 75%',
        toggleActions: "restart none none reverse" 
    },
    xPercent: -20,
    opacity: 0,
    delay: 0.4
})

// SERVICE PAGE

//animating features nav

gsap.from('.menu-tab p', {
    scrollTrigger: {
        trigger:'.features-nav',
        start: 'top 85%',
        toggleActions: "restart none none reverse" 
    },
    yPercent: -30,
    opacity: 0,
    stagger: 0.5,
    duration: 0.5
})

gsap.from('.tab-content h3', {
    scrollTrigger: {
        trigger:'.content',
        start: 'top 85%',
        toggleActions: "restart none none reverse" 
    },
    xPercent: -30,
    opacity: 0,
})
gsap.from('.feature-box', {
    scrollTrigger: {
        trigger:'.content',
        start: 'top 85%',
        toggleActions: "restart none none reverse" 
    },
    yPercent: -30,
    opacity: 0,
})
gsap.from('.feature-more', {
    scrollTrigger: {
        trigger:'.feature-more',
        start: 'top 85%',
        toggleActions: "restart none none reverse" 
    },
    yPercent: 30,
    opacity: 0,
})

// ABOUT US PAGE

gsap.from('.goal h3', {
    scrollTrigger: {
        trigger:'.goal',
        start: 'center bottom',
        toggleActions: "restart none none reverse" 
    },
    yPercent: -20,
    opacity: 0
})

gsap.from('.goal img', {
    scrollTrigger: {
        trigger:'.goal h3',
        start: 'top center',
        toggleActions: "restart none none reverse" 
    },
    yPercent: -30,
    opacity: 0,
})

gsap.from('.goal p', {
    scrollTrigger: {
        trigger:'.goal img',
        start: 'bottom center',
        toggleActions: "restart none none reverse" 
    },
    yPercent: -30,
    opacity: 0,
})

gsap.from('.who-we-are h3', {
    scrollTrigger: {
        trigger:'.who-we-are',
        toggleActions: "restart none none reverse" 
    },
    xPercent: -30,
    opacity: 0,
})


gsap.from('.who-we-are img', {
    scrollTrigger: {
        trigger:'.who-we-are h3',
        toggleActions: "restart none none reverse" 
    },
    xPercent: -30,
    opacity: 0,
})

gsap.from('.who-we-are p', {
    scrollTrigger: {
        trigger:'.who-we-are img',
        toggleActions: "restart none none reverse" 
    },
    xPercent: -30,
    opacity: 0,
})

gsap.from('.carousel-container', {
    scrollTrigger: {
        trigger:'.carousel-container',
        start: 'top center',
        toggleActions: "restart none none reverse" 
    },
    yPercent: -20,
    opacity: 0,
})

// JOIN US SUPPLIER PAGE

gsap.from('.bergabung h3', {
    scrollTrigger: {
        trigger:'.bergabung-cover',
        start: 'top 85%',
        toggleActions: "restart none none reverse" 
    },
    xPercent: -30,
    opacity: 0,
})

gsap.from('.bergabung p', {
    scrollTrigger: {
        trigger:'.bergabung-cover',
        start: 'top 85%',
        toggleActions: "restart none none reverse" 
    },
    xPercent: -30,
    opacity: 0,
})

gsap.from('.bergabung img', {
    scrollTrigger: {
        trigger:'.bergabung-cover',
        start: 'top 85%',
        toggleActions: "restart none none reverse" 
    },
    xPercent: -30,
    opacity: 0,
})


gsap.from('.jual h3', {
    scrollTrigger: {
        trigger:'.jual-cover',
        start: 'top 85%',
        toggleActions: "restart none none reverse" 
    },
    xPercent: 30,
    opacity: 0,
})

gsap.from('.jual p', {
    scrollTrigger: {
        trigger:'.jual-cover',
        start: 'top 85%',
        toggleActions: "restart none none reverse" 
    },
    xPercent: 30,
    opacity: 0,
})

gsap.from('.jual img', {
    scrollTrigger: {
        trigger:'.jual-cover',
        start: 'top 85%',
        toggleActions: "restart none none reverse" 
    },
    xPercent: 30,
    opacity: 0,
})

gsap.from('.keuangan h3', {
    scrollTrigger: {
        trigger:'.keuangan-cover',
        start: 'top 85%',
        toggleActions: "restart none none reverse" 
    },
    xPercent: -30,
    opacity: 0,
})

gsap.from('.keuangan p', {
    scrollTrigger: {
        trigger:'.keuangan-cover',
        start: 'top 85%',
        toggleActions: "restart none none reverse" 
    },
    xPercent: -30,
    opacity: 0,
})

gsap.from('.keuangan img', {
    scrollTrigger: {
        trigger:'.keuangan-cover',
        start: 'top 85%',
        toggleActions: "restart none none reverse" 
    },
    xPercent: -30,
    opacity: 0,
})