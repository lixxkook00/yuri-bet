const bind1 = document.querySelector.bind(document)
const bind2 = document.querySelectorAll.bind(document)

const toggleNavMobile = () => {
    bind1('.soft-menu').classList.toggle('open')
    bind1('.soft-menu__list').classList.toggle('open')
}

bind2('.soft-menu__item').forEach((element) => {
  element.onclick = () => {
    toggleNavMobile()
  }
})

bind1('.scroll-to-top').onclick = () => {
    window.scrollTo({
        top: 0,
        left: 100,
        behavior: 'smooth'
    });
}

// handle animation number
function animateNumber(finalNumber, duration = 5000, startNumber = 0, callback) {
    let currentNumber = startNumber
    const interval = window.setInterval(updateNumber, 17)

    function updateNumber() {
        if (currentNumber >= finalNumber) {
            clearInterval(interval)
        } else {
            let inc = Math.ceil(finalNumber / (duration / 17))
            if (currentNumber + inc > finalNumber) {
                currentNumber = finalNumber
                clearInterval(interval)
            } else {
                currentNumber += inc
            }
            callback(currentNumber)
        }
    }
}

// loading animation
window.addEventListener('load', (event) => {
  bind1('.loading').style.display = "none"

});


// SLIDER
var swiper = new Swiper(".swiper-l-banner", {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 0,
    // effect: 'fade',
    // auto
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    loop: true,
    loopedSlides: 50,
});


var swiper = new Swiper(".swiper-footer", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 0,
    // effect: 'fade',
    // auto
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    loop: true,
    loopedSlides: 50,
});
