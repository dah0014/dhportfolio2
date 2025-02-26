/* --------class photo---------- */
var main1 = new Swiper("#main1 .mySwiper", {
  slidesPerView: 3,
  grid: {
    rows: 2,
  },
  spaceBetween: 30,
  pagination: {
    el: "#main1 .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: "#main1 .swiper-button-next",
    prevEl: "#main1 .swiper-button-prev",
  },
  breakpoints: {
    100: {
      slidesPerView: 1,
      grid: {rows: 2}
    },
    700: {
      slidesPerView: 1,  
      grid: {rows: 2}
    },  
    800: {
      slidesPerView: 2,  
      grid: {rows: 2}
    },
    1100: {
      slidesPerView: 2,  
      grid: {rows: 2}
    },
    1500: {
      slidesPerView: 3,
      grid: {rows: 2}
    }
  }
});

/* ------------curriculum----------------- */
var main2 = new Swiper("#main2 .mySwiper", {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: "#main2 .swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: "#main2 .swiper-button-next",
    prevEl: "#main2 .swiper-button-prev",
  },
  breakpoints: {
    100: {
      slidesPerView: 1,
    },
    700 : {
      slidesPerView: 1,
    },
    1200 : {
      slidesPerView: 2,
    }, 
  }
});

/* ----------------notification------------- */
var main3 = new Swiper("#main3 .mySwiper", {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: "#main3 .swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: "#main3 .swiper-button-next",
    prevEl: "#main3 .swiper-button-prev",
  },
  breakpoints: {
    100: {
      slidesPerView: 1,
    }, 
    1200 : {
      slidesPerView: 2,
    }
  }
});
