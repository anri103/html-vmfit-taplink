var form1 = feedbackForm();
form1.init({
	id: '#feedbackForm',
	isHideForm: true,
});

const swiper1 = new Swiper('.about-slider', {
	loop: false,
	slidesPerView: 1,
	autoplay: {
		delay: 4000,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: '#about-next',
		prevEl: '#about-prev',
	},
});

const swiper2 = new Swiper('.price-slider-01', {
	loop: false,
	slidesPerView: 1,
	spaceBetween: 10,
	navigation: {
		nextEl: '.price-01-next',
		prevEl: '.price-01-prev',
	},
	breakpoints: {
		768: {
			slidesPerView: 2,
			spaceBetween: 15,
		},
		1200: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
	},
});

const swiper4 = new Swiper('.testimonials-slider', {
	loop: false,
	slidesPerView: 1,
	spaceBetween: 10,
	navigation: {
		nextEl: '.testimonials-next',
		prevEl: '.testimonials-prev',
	},
	breakpoints: {
		768: {
			slidesPerView: 2,
			spaceBetween: 15,
		},
		992: {
			slidesPerView: 4,
			spaceBetween: 20,
		},
	},
});