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
      // console.log(selectedFeatures[i].firstElementChild.nextElementSibling);
 
 
      featureTitleText.textContent = selectedFeatures[i].firstElementChild.nextElementSibling.textContent
      featureText.textContent = selectedFeatures[i].lastElementChild.textContent
      featureImage.src = selectedFeatures[i].firstElementChild.src
      // console.log(featureText[i])
    })
 })
}

selectFeature()

// console.log(selectedFeature);