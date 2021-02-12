// getting the element

const header = document.querySelector('header')
const title = document.querySelector('.title h1')
const subtitle = document.querySelector('.title h3')
const heroImg = document.querySelector('.hero img')
const whyTitle = document.querySelector('.why-us h2')
const whySection = document.querySelector('.why-us-box')
const benefitTitle = document.querySelector('.benefit h2')
const benefitCard = document.querySelectorAll('.benefit-box .box')

const dropdownMenuCover = document.querySelector('.dropdown-hamburger-cover');
const dropdownMenu = document.querySelector('.dropdown-hamburger-content');
const hamburgerMenu = document.querySelector('.hamburger-menu');

const menuLine1 = document.querySelector('.line1')
const menuLine2 = document.querySelector('.line2')
const menuLine3 = document.querySelector('.line3')

// hamburgerMenu.addEventListener('click', () => {
//     dropdownMenu.classList.toggle('active')
//     console.log('oiii')

//     menuLine1.classList.toggle('.animate-line1')
//     menuLine2.classList.toggle('.animate-line2')
//     menuLine3.classList.toggle('.animate-line3')
// })

const navSlide = () => {
    const nav = document.querySelector("menu");
    const burger = document.querySelector(".burger");
    const navLinks = document.querySelectorAll(".link");
  
    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.3s ease-in forwards ${
            index / 5 + 0.3
          }s`;
          // link.style.opacity = "1";
        }
      });
      burger.classList.toggle("toggle");
    });
  };
  
  navSlide();
  












/***
 * Animating GSAP
 */

// navLink.addEventListener('mouseover', el => {
//     console.log(el);
// })



//creating timeline animation
const tl = gsap.timeline({
    defaults: {
        duration: 0.7,
        ease: Power2.inOut
    }
})

tl.from(header, {y: -30, opacity: 0})
    .from(title, {x: 50, duration: 0.7, opacity:0, delay: 0.7})
    .from(subtitle, {x: 50, duration: 0.7, opacity:0})
    .from(heroImg, {xPercent: -100}, 1)

gsap.from(whyTitle, {scrollTrigger: {
    trigger: '.why-us h2',
    start: "top 70%",
    toggleActions: "restart pause none reverse"
    
}, y: -50, opacity: 0})

gsap.from(whySection, {scrollTrigger: {
    trigger: whySection,
    start: "top 70%",
    toggleActions: "restart pause none reverse"
    
}, y: -100, opacity: 0})

gsap.from(benefitTitle, {scrollTrigger: {
    trigger: benefitTitle,
    toggleActions: "restart pause none reverse",
    start: "top 75%"
}, y: -30, opacity: 0})

gsap.from(benefitCard, {scrollTrigger: {
    trigger: benefitCard,
    markers: true,
    toggleActions: "restart none none reverse",
    start: "top 75%"
}, y: -30, opacity: 0, stagger: '0.3'})


