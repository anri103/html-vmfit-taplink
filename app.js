// Закрывает мобильное меню после перехода по ссылке в нем
const navbarToggler = document.body.querySelector('.navbar-toggler');
const responsiveNavItems = [].slice.call( document.querySelectorAll('#navbarNav .nav-link'));
responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener('click', () => {
        if (window.getComputedStyle(navbarToggler).display !== 'none') {
            navbarToggler.click();
        }
    });
});

// swiperAbout
const swiperAbout = new Swiper('.swiperAbout', {
	spaceBetween: 32,
	loop: true,
	grabCursor: true,
	autoplay: {
		delay: 3500,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
});

// swiperPrice
const swiperPrice = new Swiper('.swiperPrice', {
	slidesPerView: 'auto',
	spaceBetween: 32,
	loop: false,
	grabCursor: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
});

// swiperTestimonial
const swiperTestimonial = new Swiper('.swiperTestimonial', {
	slidesPerView: 'auto',
	spaceBetween: 32,
	loop: true,
	grabCursor: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
});

// fancybox
Fancybox.bind("[data-fancybox]", {});