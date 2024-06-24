
let body = document.querySelector('body')

/*=============== SHOW MENU ===============*/
const navMenu = document.querySelector('#nav-menu'),
      navToggle = document.querySelector('#nav-toggle'),
      navClose = document.querySelector('#nav-close')

/* =========== Menu Show ============= */
if(navToggle){
    navToggle.addEventListener('click', () => {
        body.classList.add('dynamic-style')
        navMenu.classList.add('dynamic-style')
    })
}

/* =========== Menu Hide ============= */
if(navClose){
    navClose.addEventListener('click', () => {
        body.classList.remove('dynamic-style')
        navMenu.classList.remove('dynamic-style')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('#nav-menu ul li a')

function linkAction(){
    body.classList.remove('dynamic-style')
    navMenu.classList.remove('dynamic-style')
}

navLink.forEach((element) => {
    element.addEventListener('click', linkAction)
})

/*=============== SHOW CART ===============*/
const cart = document.getElementById('cart'),
      cartOverlay = document.getElementById('cart-overlay'),
      cartBtn = document.getElementById('cart-btn'),
      cartClose = document.getElementById('cart-close')

// Cart Open
cartBtn.addEventListener('click', () => {
    body.classList.add('dynamic-style')
    cartOverlay.classList.add('dynamic-style')
    cart.classList.add('dynamic-style')
})

// Cart Close
let cartCloseEls = [cartOverlay,cartClose]
cartCloseEls.forEach(closeEl => {
    closeEl.addEventListener('click', function() {
        body.classList.remove('dynamic-style')
        cartOverlay.classList.remove('dynamic-style')
        cart.classList.remove('dynamic-style')
    })
})

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.querySelector('#header')
    if(this.scrollY >= 80){
        header.classList.add('dynamic-style')
    }else{
        header.classList.remove('dynamic-style')
    }
}
window.addEventListener('scroll', scrollHeader)

/*=============== TESTIMONIAL SWIPER ===============*/
let testimonialSwiper = new Swiper('.testimonial-swiper', {
    spaceBetween : 30,
    loop : true,
    navigation: {
        nextEl : '.swiper-button-next',
        prevEl : '.swiper-button-prev',
    },
})

/*=============== NEW SWIPER ===============*/
let newSwiper = new Swiper('.new-swiper', {
    spaceBetween : 24,
    loop : true,
    breakpoints: {
        576 : {
            slidesPerView : 2,
        },
        768 : {
            slidesPerView : 3,
        },
        1024 : {
            slidesPerView : 4
        }
    }
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset
    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              scrolledTo = document.querySelector(`#nav-menu a[href*= ${sectionId}]`)
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            scrolledTo.classList.add('dynamic-style')
        }else{
            scrolledTo.classList.remove('dynamic-style')
        }
    })
}

window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.querySelector('#scroll-up')
    if(this.scrollY >= 400){
        scrollUp.classList.add('dynamic-style')
    }else{
        scrollUp.classList.remove('dynamic-style')
    }
}

window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const themeButtonIcon = document.querySelector('#theme-button i')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButtonIcon.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButtonIcon.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButtonIcon.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
