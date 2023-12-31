const bind1 = document.querySelector.bind(document)
const bind2 = document.querySelectorAll.bind(document)

// utils
const activeClass = (activeClass, listClass, activeIndex) => {
    bind2(`.${listClass}`).forEach((item, index) => {
        if(index === activeIndex){
            item.classList.add(activeClass)
        }else {
            item.classList.remove(activeClass)
        }
    })
}

// mobile nav handler
const toggleNavMobile = () => {
    bind1('.soft-menu').classList.toggle('open')
    bind1('.soft-menu__list').classList.toggle('open')
}

bind2('.soft-menu__item').forEach((element) => {
    if(element.id !== 'contact-sub'){
        element.onclick = (e) => {
            toggleNavMobile()
            bind1('.soft-menu').click()
        }
    }
})

bind1('#contact-sub').onclick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    bind1('.soft-menu__item-sub-list').classList.toggle('open')
}


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

var swiperPromotion = new Swiper(".swiper-promotion", {
    slidesPerView: 1,
    // Set the index of the active slide to 1
    // activeIndex: 3,
    slideWidth: bind1('.swiper-promotion').offsetWidth*0.15,
    centeredSlides: true,
    spaceBetween: 30,
    // auto
    autoplay: false,
    slideActiveClass: 'swiper-slide-active',
    slideClass: 'swiper-slide',
    loopAdditionalSlides: 1,
    breakpoints: {
        // when window width is <= 480px
        480: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        768: {
            slidesPerView: 6,
            spaceBetween: 0
        }
    },
    loop: true,
    loopedSlides: 50,
    on: {
        slideChange: function () {
            resizeThePromotionSwiper()
        },
    },
});

bind2('.swiper-promotion .swiper-slide').forEach((element, index) => {
    element.onclick = () => {
        // console.log(element.dataset.swiperSlideIndex);
        console.log(index)
        swiperPromotion.slideTo(parseInt(index))
    }
})

bind1('.promotion-swiper-arrow-left').onclick = () => {
    swiperPromotion.slidePrev()
}

bind1('.promotion-swiper-arrow-right').onclick = () => {
    swiperPromotion.slideNext()
}

swiperPromotion.on('slideChange', function() {
  var activeIndex = swiperPromotion.realIndex;
  console.log("activeIndex", activeIndex)
  activeClass('active', 'promotion-tab-item', activeIndex)
});

// tab handler for Promotion Slider
bind2('.promotion-tab-item').forEach((item, index) => {
    item.onclick = () => {
        activeClass('active', 'promotion-tab-item', index)
        
        // swiperPromotion.slideTo(parseInt(index))
        var visibleSlides = swiperPromotion.slidesPerView;
        var activeIndex = swiperPromotion.realIndex;
        var slideCount = swiperPromotion.slides.length - 2 * swiperPromotion.loopedSlides;

        var targetIndex = index;
        while (targetIndex < activeIndex - visibleSlides / 2) {
            targetIndex += slideCount;
        }
        while (targetIndex > activeIndex + visibleSlides / 2) {
            targetIndex -= slideCount;
        }

        swiperPromotion.slideTo(targetIndex);
    }
})

// resize the swiper
function resizeThePromotionSwiper() {
    const totalWidth = bind1('.swiper-promotion').offsetWidth
    bind2('.swiper-promotion .swiper-slide').forEach((slide, index) => {
        if(slide.classList.contains('swiper-slide-active')){
            slide.style.width = `${totalWidth*0.4}px !important`
        }else{
            slide.style.width = `${totalWidth*0.15}px !important`
        }

        // console.log(slide.classList)
        // console.log(slide.offsetWidth)
    })
}

// swiperPromotion.on('init', function() {
  
// });

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
// bind1('#testing').click()

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

// deposit option handler
// bind2('.deposit-option').forEach((option) => {
//     option.addEventListener('click', () => {
//         $('#depositPopUp').modal('hide')
//     })
// })

bind2('.primary-form-header-close').forEach((closebtn) => {
    closebtn.onclick = () => {
        console.log(closebtn.parentNode.parentNode.parentNode.parentNode.parentNode)
        closebtn.parentNode.parentNode.parentNode.parentNode.parentNode.click()
    }
})