// hamburger menu slide
const navSlide = () => {
  const nav = document.querySelector("menu");
  const burger = document.querySelector(".burger");
  const heroMobile = document.querySelector('.hero')
  const heroSpMobile = document.querySelector('.hero_sp img')
  
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    heroMobile.classList.toggle('gone')
    // heroSpMobile.classList.toggle('gone')
    burger.classList.toggle("toggle");
    nav.classList.toggle('active')

  });
};
  
navSlide();


// service tab


const featuresNav = document.querySelectorAll('.menu-tab')
const tabsContent = document.querySelectorAll('.tab-content')
const featureTitleText = document.querySelector('.feature-more h3')
const selectedFeatures = document.querySelectorAll('.feature')
const featureText = document.querySelector('.feature-more p')
const featureImage = document.querySelector('.feature-more img')

const selectItem = () => {
    featuresNav.forEach((featureNav, i) => {
        featureNav.addEventListener('click', (e) => {
            if(!(e.currentTarget.classList.contains('feature-nav-active'))){
                removeActive()
                featureNav.classList.add('feature-nav-active')
            }
            tabsContent.forEach(() => {
                removeTabActive()
                tabsContent[i].classList.add('tab-active')
                featureTitleText[i].textContent = selectedFeatures[i].firstElementChild.nextElementSibling.textContent
                console.log(featureTitleText[i]);
            })
            
            
        })
    });
}

const removeActive = () => {
    featuresNav.forEach(featureNav => featureNav.classList.remove('feature-nav-active'))
}

const removeTabActive = () => {
    tabsContent.forEach(tabContent => tabContent.classList.remove('tab-active'))
}

selectItem()

const selectFeature = () => {
  selectedFeatures.forEach((selectedFeature, i) =>{
    selectedFeature.addEventListener('click', () => {
 
 
      featureTitleText.textContent = selectedFeatures[i].firstElementChild.nextElementSibling.textContent
      featureText.textContent = selectedFeatures[i].lastElementChild.textContent
      featureImage.src = selectedFeatures[i].firstElementChild.src
    })
 })
}

selectFeature()


// Contributors carousel

const carouselSlider = document.querySelector('.carousel-slider');
const carouselImages = document.querySelectorAll('.carousel-slider .person');
const prevBtn = document.querySelector('#prevBtn')
const nextBtn = document.querySelector('#nextBtn')

let counter = 1;
const size = carouselImages[0].clientWidth

console.log(carouselSlider);

carouselSlider.style.transform = `translateX(${-size*counter}px)`

nextBtn.addEventListener('click', () => {
  if(counter >= carouselImages.length - 1) return;
  carouselSlider.style.transition = 'transform 0.4s ease-in-out'
  counter++
  carouselSlider.style.transform = `translateX(${-size*counter}px)`
})


prevBtn.addEventListener('click', () => {
  if(counter <= 0) return;
  carouselSlider.style.transition = 'transform 0.4s ease-in-out'
  counter--
  carouselSlider.style.transform = `translateX(${-size*counter}px)`
})

carouselSlider.addEventListener('transitionend', () => {
  if(carouselImages[counter].id == "firstClone"){
    carouselSlider.style.transition = 'none';
    counter = carouselImages.length - 2;
    carouselSlider.style.transform = `translateX(${-size*counter}px)`
  } else if(carouselImages[counter].id == "lastClone"){
    carouselSlider.style.transition = 'none';
    counter = carouselImages.length - counter;
    carouselSlider.style.transform = `translateX(${-size*counter}px)`
  } 
})