const slider1 = document.querySelector('.swiper-container1');
const slider2 = document.querySelector('.swiper-container2');
const slider3 = document.querySelector('.swiper-container3');
const slider4 = document.querySelector('.swiper-container4');

let mySwiper1 = new Swiper(slider1, {
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 3000,
      },
      effect: 'fade',
      speed: 2000,
    });


let mySwiper2 = new Swiper(slider2, {
      slidesPerView: 1,
      spaceBetween: 38,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
       pagination: {
        el: '.gallery__pag',
        type: 'fraction',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        500: {
          spaceBetween: 36,
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        1500: {
          spaceBetween: 50,
          slidesPerView: 3,
          slidesPerGroup: 3,
        }
      }
    });

    let mySwiper3 = new Swiper(slider3, {
      slidesPerView: 1,
      loop: true,
      spaceBetween: 34,
      pagination: {
        clickable: true,
        type: 'bullets',
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.event__next',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        500: {
          spaceBetween: 30,
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        900: {
          spaceBetween: 27,
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
        1200: {
          spaceBetween: 50,
          slidesPerView: 3,
          slidesPerGroup: 3,
        }
      }
    });

    let mySwiper4 = new Swiper(slider4, {
      slidesPerView: 1,
      navigation: {
        nextEl: '.project__next',
        prevEl: '.project__prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        600: {
          spaceBetween: 30,
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        900: {
          spaceBetween: 30,
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        1200: {
          spaceBetween: 30,
          slidesPerView: 3,
          slidesPerGroup: 3,
        }
      }
    });
