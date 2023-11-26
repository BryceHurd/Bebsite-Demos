var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
 

function smoothScrollTo(targetElement) {
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth"
    });
  }
}

const aboutBtn = document.querySelector('.abtBtn');
aboutBtn.addEventListener('click', function(event) {
  event.preventDefault(); // prevent default anchor click behavior

  const targetElement = document.querySelector('.about');
  smoothScrollTo(targetElement);
});

const reviewBtn = document.querySelector('.revBtn');
reviewBtn.addEventListener('click', function(event) {
  event.preventDefault(); // prevent default anchor click behavior

  const targetElement = document.querySelector('.container' );
  smoothScrollTo(targetElement);
});

const servicesBtn = document.querySelector('.servBtn');
servicesBtn.addEventListener('click', function(event) {
  event.preventDefault(); // prevent default anchor click behavior

  const targetElement = document.querySelector('.middle' );
  smoothScrollTo(targetElement);
});




