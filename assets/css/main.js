// main.js

const headers = document.querySelectorAll(".header-bottom");
const toggleClass = "is-sticky";

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  headers.forEach((header) => {
    if (currentScroll > 150 && !header.classList.contains(toggleClass)) {
      header.classList.add(toggleClass);
    } else if (currentScroll <= 150 && header.classList.contains(toggleClass)) {
      header.classList.remove(toggleClass);
    }
  });
});

new Swiper(".mySwiper", {
  loop: true,
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 0,
  slideToClickedSlide: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

new Swiper(".blog-slider", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 16,
  slideToClickedSlide: true,
  breakpoints: {
    1920: {
      slidesPerView: 3,
    },
    1199: {
      slidesPerView: 2,
    },
    667: {
      slidesPerView: 1,
    },
  },
});

new Swiper(".blog-slider-3", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 16,
  slideToClickedSlide: true,
  observer: true,
  observeParents: true,
  breakpoints: {
    1920: {
      slidesPerView: 3,
    },
    1199: {
      slidesPerView: 2,
    },
    667: {
      slidesPerView: 1,
    },
  },
});

new Swiper(".logo-slider", {
  loop: true,
  slidesPerView: 7,
  paginationClickable: true,
  spaceBetween: 62,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 2000,
  breakpoints: {
    1920: {
      slidesPerView: 7,
      spaceBetween: 62,
    },
    1199: {
      slidesPerView: 5,
      spaceBetween: 22,
    },
    667: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});

const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content-hr");

tabBtns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault(); // chặn nhảy trang

    // toggle active button
    tabBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    // toggle active content
    const targetId = btn.getAttribute("href").substring(1); // bỏ dấu #
    tabContents.forEach(c => c.classList.remove("active"));
    document.getElementById(targetId).classList.add("active");
  });
});


const params = new URLSearchParams(window.location.search);
const keyword = params.get('q');

if (keyword) {
  // Show keyword in result line
  document.getElementById('searchKeyword').textContent = keyword;

  // Optional: prefill the search bar if it also exists on this page
  const input = document.getElementById('searchInput');
  if (input) input.value = keyword;

  // Optional: filter results by keyword here
} else {
  document.getElementById('searchKeyword').textContent = "Không có từ khóa";
}
