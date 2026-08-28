
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
const themeToggleBtn = document.getElementById('theme-toggle');

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const savedTheme = localStorage.getItem('color-theme');
const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);

document.documentElement.classList.toggle('dark', isDark);

if (themeToggleDarkIcon && themeToggleLightIcon) {
  themeToggleDarkIcon.classList.toggle('hidden', isDark);
  themeToggleLightIcon.classList.toggle('hidden', !isDark);
}

if (themeToggleBtn && themeToggleDarkIcon && themeToggleLightIcon) {
  themeToggleBtn.addEventListener('click', () => {
    const darkModeEnabled = document.documentElement.classList.toggle('dark');
    localStorage.setItem('color-theme', darkModeEnabled ? 'dark' : 'light');
    themeToggleDarkIcon.classList.toggle('hidden', darkModeEnabled);
    themeToggleLightIcon.classList.toggle('hidden', !darkModeEnabled);
  });
}


if (typeof ScrollReveal !== 'undefined') {
  const reveal = ScrollReveal({
    duration: 800,
    distance: '50px',
    easing: 'ease-in-out',
    reset: false
  });

  reveal.reveal('.hero-info', { delay: 200, origin: 'right' });
  reveal.reveal('.hero-img', { delay: 300, origin: 'left' });
  reveal.reveal('.boxes', { delay: 250, origin: 'bottom' });
  reveal.reveal('.category', { delay: 250, origin: 'bottom' });
}


const swiperElement = document.querySelector('.swiper');

if (swiperElement && typeof Swiper !== 'undefined') {
  new Swiper(swiperElement, {
    direction: 'horizontal',
    loop: true,
    grabCursor: true,
    watchOverflow: true,
    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev'
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 16
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 24
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 24
      }
    }
  });
} else if (swiperElement) {
  console.warn('تعذر تشغيل Swiper لأن مكتبة Swiper لم تُحمّل.');
}
