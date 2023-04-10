


 /*HamburgerMenu */
/*********************/
const nav = document.querySelector('nav')
const cross = document.querySelector('.cross')
const menuLines = document.querySelector('.menuLines')


cross.addEventListener('click',slide)
menuLines.addEventListener('click',slide)


function slide(){nav.classList.toggle('slide')}

/*Image Slider */
/*************************************** */
const sliderImg = document.querySelector('.sliderImg')
const mobileImg = document.querySelector('.mobileImg')
const prevArrow = document.querySelector('.prev')
const nextArrow = document.querySelector('.next')

const title = document.querySelector('.title')
const text = document.querySelector('.text')



prevArrow.addEventListener('click',prevArrowFunc)
nextArrow.addEventListener('click',nextArrowFunc)


 let SliderCount = 1
/*Prev */
function prevArrowFunc(){
    if(SliderCount > 1){
        --SliderCount
        sliderImg.src = `./images/desktop-image-hero-${SliderCount}.jpg`
        mobileImg.srcset = `./images/mobile-image-hero-${SliderCount}.jpg`
        changetext()
    }

}
/*Next */
function nextArrowFunc(){
    if(SliderCount < 3){
        ++SliderCount
        sliderImg.src = `./images/desktop-image-hero-${SliderCount}.jpg`
        mobileImg.srcset = `./images/mobile-image-hero-${SliderCount}.jpg`
        changetext()
    }
}

/* Change Text */
/******************/
function changetext (){

    if(SliderCount === 1){
        title.textContent = 'Discover innovative ways to decorate'
        text.textContent  = `We provide unmatched quality, comfort, and style for property owners across the country.
        Our experts combine form and function in bringing your vision to life. Create a room in your
        own style with our collection and make your property a reflection of you and what you love.`
    }
    if(SliderCount === 2){
        title.textContent = 'We are available all across the globe'
        text.textContent  = `With stores all over the world, it's easy for you to find furniture for your home or place of business.
        Locally, we’re in most major cities throughout the country. Find the branch nearest you using our
        store locator. Any questions? Don't hesitate to contact us today.`
    }
    if(SliderCount === 3){
        title.textContent = 'Manufactured with the best materials'
        text.textContent = `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology
        to ensure that every product is made as perfect and as consistent as possible. With three decades of
        experience in this industry, we understand what customers want for their home and office.`
    }
}