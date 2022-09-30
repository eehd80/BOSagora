$(document).ready(function(){

  // swiper-intro
  var swiper = new Swiper(".slide-intro", {
    // spaceBetween: 30,
    effect: "fade",
    centeredSlides: true,
    loop: true,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // slide-banner1
  var swiper = new Swiper(".slide-bnr1", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  });

  // slide-bnr2
  var swiper = new Swiper(".slide-bnr2", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    centeredSlides: false,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    navigation: {
      nextEl: ".swiper-button-next-out",
      prevEl: ".swiper-button-prev-out",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
        // centeredSlides: false,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
        // centeredSlides: false,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 20,        
        centeredSlides: true,
      },
    },
  });









    

});