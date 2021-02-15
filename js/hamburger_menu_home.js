// hamburger menu slide
const navSlide = () => {
    const nav = document.querySelector("menu");
    const burger = document.querySelector(".burger");
    const heroMobile = document.querySelector('.hero')
    const video = document.querySelector('video')
    
    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
      heroMobile.classList.toggle('gone')
      video.classList.toggle('gone')
      burger.classList.toggle("toggle");
      nav.classList.toggle('active')
  
    });
  };
    
  navSlide();