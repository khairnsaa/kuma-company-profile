const navSlide = () => {
    const nav = document.querySelector("menu");
    const burger = document.querySelector(".burger");
    const heroMobile = document.querySelector('.hero')
  
    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
      heroMobile.classList.toggle('gone')
      burger.classList.toggle("toggle");
    });
  };
  
  navSlide();
  
// const dropdownNav = document.querySelector('.dropdown-content')
// const dropdown =document.querySelector('.dropdown')

// dropdown.addEventListener('mouseover', () => {
//   dropdownNav.classList.toggle('active')
// })
