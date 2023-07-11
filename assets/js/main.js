const bind1 = document.querySelector.bind(document)
const bind2 = document.querySelectorAll.bind(document)

// mobile nav handler
const toggleNavMobile = () => {
    bind1('.soft-menu').classList.toggle('open')
    bind1('.soft-menu__list').classList.toggle('open')
}

bind2('.soft-menu__item').forEach((element) => {
  element.onclick = () => {
    toggleNavMobile()
    bind1('.soft-menu').click()
  }
})


// scoll to top
bind1('.scroll-to-top').onclick = () => {
    window.scrollTo({
        top: 0,
        left: 100,
        behavior: 'smooth'
    });
}

// handle animate number
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

// SLIDERS
var swiper = new Swiper(".swiper-l-banner", {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 0,
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
    // auto
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    loop: true,
    loopedSlides: 50,
});

// nav animate
const activeNav = (elementActive, activeLine, indexActive) => {
    let left = 0
    bind2('.header-nav-item').forEach((element, index) => {
        if(index < indexActive){
            console.log(element.offsetWidth)
            left = left + element.offsetWidth
        }
    })

    activeLine.style.width = `${elementActive.offsetWidth}px`
    activeLine.style.left = `${left}px`
}

const onLeave = (activeLine) => {
    bind2('.header-nav-item').forEach(element => {
        element.classList.contains('active') && activeNav(element, activeLine)
    })
}

const navHeaderHandler = () => {
    const activeLine = bind1('.header-nav-line');

    bind2('.header-nav-item').forEach((element, index) => {
        element.addEventListener('mouseover', function() {
            activeNav(element, activeLine, index)
        });

        element.addEventListener('mouseout', function() {
            onLeave(activeLine)
        });
    })
}

// for the first time when the window have been loaded
onLeave(bind1('.header-nav-line'))

// active handler
navHeaderHandler()

// popop handler
bind2('.show-password').forEach(icon => {
    icon.onclick = () => {
        console.log()
        if(icon.childNodes[0].classList[1] === 'fa-eye'){
            icon.childNodes[0].classList.remove('fa-eye')
            icon.childNodes[0].classList.add('fa-eye-slash')
            icon.parentNode.querySelector('input').type = 'text'
        }else{
            icon.childNodes[0].classList.remove('fa-eye-slash')
            icon.childNodes[0].classList.add('fa-eye')
            icon.parentNode.querySelector('input').type = 'password'
        }
    }
})