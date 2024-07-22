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
	navigation: {
		nextEl: '#swiperAbout-next',
		prevEl: '#swiperAbout-prev',
	},
	pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
});

// swiperPrice
const swiperPrice = new Swiper('.swiperPrice', {
	slidesPerView: 1,
	grabCursor: true,
	navigation: {
		nextEl: '#swiperPrice-next',
		prevEl: '#swiperPrice-prev',
	},
	pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
	breakpoints: {
		768: {
			slidesPerView: 2,
		},
		1200: {
			slidesPerView: 3,
		},
	},
});

// swiperTestimonial
const swiperTestimonial = new Swiper('.swiperTestimonial', {
	slidesPerView: 1,
	loop: true,
	grabCursor: true,
	navigation: {
		nextEl: '#swiperTestimonial-next',
		prevEl: '#swiperTestimonial-prev',
	},
	pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
	breakpoints: {
		768: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 4,
		},
	},
});

// fancybox
Fancybox.bind("[data-fancybox]", {});