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
	loop: true,
	grabCursor: true,
	autoplay: {
		delay: 3500,
		disableOnInteraction: false,
	},
	effect: 'fade',
});

// swiperPrice
const swiperPrice = new Swiper('.swiperPrice', {
	slidesPerView: 'auto',
	spaceBetween: 16,
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
	breakpoints: {
		992: {
			spaceBetween: 32,
		}
	},
});

// swiperTestimonial
const swiperTestimonial = new Swiper('.swiperTestimonial', {
	slidesPerView: 1,
	spaceBetween: 16,
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
	breakpoints: {
		992: {
			slidesPerView: 4,
			spaceBetween: 32,
		}
	},
});

// fancybox
Fancybox.bind("[data-fancybox]", {});