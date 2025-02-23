/* works */
var main1 = new Swiper(".main1 .mySwiper", {
  slidesPerView: 4,
  centeredSlides: true,
  spaceBetween: 30,

  pagination: {
    el: ".main1 .swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".main1 .swiper-button-next",
    prevEl: ".main1 .swiper-button-prev",
  },
  breakpoints: {
    600 : {
      slidesPerView: 2,
    },  
    768: {
      slidesPerView: 2,  //브라우저가 768보다 클 때
    },
    1024: {
      slidesPerView: 3,  //브라우저가 1024보다 클 때
    },
    1500: {
      slidesPerView: 4,
    }
  }
});


/* exhibition */
var main2 = new Swiper(".main2 .mySwiper", {
  slidesPerView: 3,
  grid: {
    rows: 2,
  },
  spaceBetween: 30,
  pagination: {
    el: ".main2 .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".main2 .swiper-button-next",
    prevEl: ".main2 .swiper-button-prev",
  },
  // breakpoints: {
  //   600: {
  //     slidesPerView: 2,
  //     grid: {rows: 3}
  //   },  
  //   768: {
  //     slidesPerView: 2,  //브라우저가 768보다 클 때
  //     grid: {rows: 3}
  //   },
  //   1024: {
  //     slidesPerView: 2,  //브라우저가 1024보다 클 때
  //   },
  //   1500: {
  //     slidesPerView: 3,
  //   }
  // }
});
