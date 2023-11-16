/*=============== SHOW MENU ===============*/
const navMenu = document.querySelector('#nav-menu'),
      navToggle = document.querySelector('#nav-toggle'),
      navClose = document.querySelector('#nav-close')

/* =========== Menu Show ============= */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('dynamic-style')
    })
}

/* =========== Menu Hide ============= */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('dynamic-style')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('#nav-menu ul li a')

function linkAction(){
    navMenu.classList.remove('dynamic-style')
}

navLink.forEach((element) => {
    element.addEventListener('click', linkAction)
})

/*=============== SHOW CART ===============*/
const cart = document.getElementById('cart'),
      cartShop = document.getElementById('cart-shop'),
      cartClose = document.getElementById('cart-close')
// Show Cart
if(cartShop){
    cartShop.addEventListener('click', () => {
        cart.classList.add('dynamic-style')
    })
}
// Close Cart
if(cartClose){
    cartClose.addEventListener('click', () => {
        cart.classList.remove('dynamic-style')
    })
}
/*=============== CHANGE BACKGROUND HEADER ===============*/
// function scrollHeader(){
//     const header = document.querySelector('#header')
//     if(this.scrollY >= 80){
//         header.classList.add('scrolled-header')
//     }else{
//         header.classList.remove('scrolled-header')
//     }
// }
// window.addEventListener('scroll', scrollHeader)
/*=============== TESTIMONIAL SWIPER ===============*/
// let testimonialSwiper = new Swiper('.testimonial-swiper', {
//     spaceBetween : 30,
//     loop : true,
//     navigation: {
//         nextEl : '.swiper-button-next',
//         prevEl : '.swiper-button-prev',
//     },
// })

/*=============== NEW SWIPER ===============*/
// let newSwiper = new Swiper('.new-swiper', {
//     spaceBetween : 24,
//     loop : true,
//     breakpoints: {
//         576 : {
//             slidesPerView : 2,
//         },
//         768 : {
//             slidesPerView : 3,
//         },
//         1024 : {
//             slidesPerView : 4
//         }
//     }
// })

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// const sections = document.querySelectorAll('section[id]')
// function scrollActive(){
//     const scrollY = window.pageYOffset
//     sections.forEach((current) => {
//         const sectionHeight = current.offsetHeight,
//               sectionTop = current.offsetTop - 58,
//               sectionId = current.getAttribute('id'),
//               scrolledTo = document.querySelector(`.nav__menu a[href*= ${sectionId}]`)
//         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//             scrolledTo.classList.add('active-link')
//         }else{
//             scrolledTo.classList.remove('active-link')
//         }
//     })
// }
// window.addEventListener('scroll', scrollActive)
/*=============== SHOW SCROLL UP ===============*/ 
// function scrollUp(){
//     const scrollUp = document.querySelector('#scroll-up')
//     if(this.scrollY >= 400){
//         scrollUp.classList.add('show-scroll')
//     }else{
//         scrollUp.classList.remove('show-scroll')
//     }
// }
// window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/ 
// const themeButton = document.getElementById('theme-button')
// const darkTheme = 'dark-theme'
// const iconTheme = 'bx-sun'
// Previously Selected (If user selected)
// const selectedTheme = localStorage.getItem('selected-theme')
// const selectedIcon = localStorage.getItem('selected-icon')
// We obtain the current theme that the interface has by validating the dark theme class
// const getCurrentTheme = () => {
//     document.body.classList.contains(darkTheme) ? 'dark' : 'light'
// }
// const getCurrentIcon = () => {
//     themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-moon'
// }
// Activate / Deactivate the theme menually by clicking the theme button
// themeButton.addEventListener('click', () => {
    // Add or Remove the dark / Icon theme
    // document.body.classList.toggle(darkTheme)
    // themeButton.classList.toggle(iconTheme)
    // We save the current theme and the current icon that the user have chose
//     localStorage.setItem('selected-theme', getCurrentTheme())
//     localStorage.setItem('selected-icon', getCurrentIcon())
// })
