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

// swiperTestimonial
const swiperTestimonial = new Swiper('.swiperTestimonial', {
	slidesPerView: 1,
	spaceBetween: 16,
	loop: true,
	grabCursor: true,
	pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
});

// fancybox
Fancybox.bind("[data-fancybox]", {});