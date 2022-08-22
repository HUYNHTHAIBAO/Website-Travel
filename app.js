// menu
const menuBtn = document.querySelector(".menu-btn");
const navigations = document.querySelector(".navigations");
menuBtn.addEventListener("click", function (e) {
  menuBtn.classList.toggle("active");
  navigations.classList.toggle("active");
});
// slider
const btns = document.querySelectorAll(".btn-slider");
const sliders = document.querySelectorAll(".video-slider");
const bannerContent = document.querySelectorAll(".banner-content");
let sliderNav = function (e) {
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });

  sliders.forEach((slider) => {
    slider.classList.remove("active");
  });
  bannerContent.forEach((content) => {
    content.classList.remove("active");
  });

  btns[e].classList.add("active");
  sliders[e].classList.add("active");
  bannerContent[e].classList.add("active");
};
btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    sliderNav(index);
  });
});
// scrool menu
window.addEventListener("scroll", function (e) {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
// tab
const tabTitle = document.querySelectorAll(".tour-header__title");
const tourBody = document.querySelectorAll(".tour-body__tab");
console.log(tabTitle);
tabTitle.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tourBody.forEach((content) => {
      content.classList.remove("active");
    });
    tabTitle.forEach((tab) => {
      tab.classList.remove("active");
    });
    tourBody[index].classList.add("active");
    tabTitle[index].classList.add("active");
  });
});
// slider
$(document).ready(function () {
  $(".place-love__wrapper").slick({
    slidesToShow: 4,
    infinite: true,
    slidesToScroll: 4,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow:
      '<div class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
    nextArrow:
      '<div class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          infinite: true,
          slidesToScroll: 4,
          dots: true,
          autoplay: true,
          autoplaySpeed: 2000,
          arrows: true,
        },
      },
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 3,
          infinite: true,
          slidesToScroll: 3,
          dots: true,
          autoplay: true,
          autoplaySpeed: 2000,
          arrows: true,
        },
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
          infinite: true,
          slidesToScroll: 2,
          dots: true,
          autoplay: true,
          autoplaySpeed: 2000,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          infinite: true,
          slidesToScroll: 1,
          dots: false,
          autoplay: true,
          autoplaySpeed: 2000,
          arrows: true,
        },
      },
      {
        breakpoint: 321,
        settings: {
          slidesToShow: 1,
          infinite: true,
          slidesToScroll: 1,
          dots: false,
          autoplay: true,
          autoplaySpeed: 2000,
          arrows: false,
        },
      },
    ],
  });
});
// Toggle darlMode
const toggle = document.querySelector("#toggleMode");
toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  console.log("dáhdkasg");
});
// checkin
const image = document.querySelectorAll(".image img");
const gallery = document.querySelector(".gallery");
const iconClose = document.querySelector(".icon-close");
const btnPre = document.querySelector(".btn-pre");
const btnNext = document.querySelector(".btn-next");
const galleryImage = document.querySelector(".gallery-image img");

var curentIndex = 0;

image.forEach((item, index) => {
  item.addEventListener("click", function () {
    curentIndex = index;
    // galleryImage.src = image[curentIndex].src;
    // gallery.classList.add("show");
    Show();
  });
});

iconClose.addEventListener("click", function (e) {
  gallery.classList.remove("show");
});

document.addEventListener("keydown", function (e) {
  if (e.keyCode === 27) {
    gallery.classList.remove("show");
  }
});

btnPre.addEventListener("click", function (e) {
  console.log(e.target);
  if (curentIndex > 0) {
    curentIndex--;
    // galleryImage.src = image[curentIndex].src;
    // gallery.classList.add("show");
    Show();
  }
});

btnNext.addEventListener("click", function (e) {
  if (curentIndex < image.length - 1) {
    curentIndex++;
    // galleryImage.src = image[curentIndex].src;
    // gallery.classList.add("show");
    Show();
  }
});

function Show() {
  galleryImage.src = image[curentIndex].src;
  gallery.classList.add("show");

  if (curentIndex == 0) {
    btnPre.classList.add("hide");
  } else {
    btnPre.classList.remove("hide");
  }
  if (curentIndex == image.length - 1) {
    btnNext.classList.add("hide");
  } else {
    btnNext.classList.remove("hide");
  }
}
// wowjs
new WOW().init();
