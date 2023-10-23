function mobileNav() {
  const navBtnOpen = document.querySelector('#mobileOpen');
  const navBtnClose = document.querySelector('#mobileClose');
  const navOverlay = document.querySelector('#mobileOverlay');
  const nav = document.querySelector('#mobileNav');

  function toggleMobileNav() {
    navOverlay.classList.toggle('mobile-nav-overlay--show');
    nav.classList.toggle('mobile-nav--show');
    document.body.classList.toggle('noscroll');
  };

  navBtnOpen.onclick = toggleMobileNav;
  navBtnClose.onclick = toggleMobileNav;
  navOverlay.onclick = toggleMobileNav;
};

function loader() {
  const loader = document.querySelector('#loader');

  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('preloader-hidden');
    }, 1000)
  });
};

loader();
mobileNav();

const swiper = new Swiper('.swiper', {
  // Optional parameters
  parallax: true,
  loop: true,
  speed: 1000,

  keyboard: {
    enabled: true,
  },

  // If we need pagination
  pagination: {
    el: '.slider-controls-slide',
    type: 'fraction',
  },

  // Navigation arrows
  navigation: {
    nextEl: '#slideNext',
    prevEl: '#slidePrev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});