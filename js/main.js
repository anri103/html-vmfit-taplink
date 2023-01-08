
jQuery(document).ready(function ($) {

	'use strict';

	var siteMenuClone = function () {

		$('.js-clone-nav').each(function () {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.js-clone-body');
		});


		setTimeout(function () {

			var counter = 0;
			$('.site-mobile-menu .has-children').each(function () {
				var $this = $(this);

				$this.prepend('<span class="arrow-collapse collapsed">');

				$this.find('.arrow-collapse').attr({
					'data-toggle': 'collapse',
					'data-target': '#collapseItem' + counter,
				});

				$this.find('> ul').attr({
					'class': 'collapse',
					'id': 'collapseItem' + counter,
				});

				counter++;

			});

		}, 1000);

		$('body').on('click', '.arrow-collapse', function (e) {
			var $this = $(this);
			if ($this.closest('li').find('.collapse').hasClass('show')) {
				$this.removeClass('active');
			} else {
				$this.addClass('active');
			}
			e.preventDefault();

		});

		$(window).resize(function () {
			var $this = $(this),
				w = $this.width();

			if (w > 768) {
				if ($('body').hasClass('offcanvas-menu')) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function (e) {
			var $this = $(this);
			e.preventDefault();

			if ($('body').hasClass('offcanvas-menu')) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		})

		// click outisde offcanvas
		$(document).mouseup(function (e) {
			var container = $('.site-mobile-menu');
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				if ($('body').hasClass('offcanvas-menu')) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		});
	};
	siteMenuClone();


	var siteScroll = function () {
		$(window).scroll(function () {

			var st = $(this).scrollTop();

			if (st > 100) {
				$('.site-navbar').addClass('nav-fixed');
			} else {
				$('.site-navbar').removeClass('nav-fixed');
			}

			if ($('body').hasClass('offcanvas-menu')) {
				$('body').removeClass('offcanvas-menu');
			}

		})
	};
	siteScroll();


	// инициация формы
	// itchief.ru/php/popup-feedback-form
	$(function () {
		var form1 = feedbackForm();
		form1.init({
			id: '#feedbackForm',
			isHideForm: true,
		});
	});


	// Swiper
	$(function () {
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
					slidesPerView: 3,
					spaceBetween: 20,
				},
			},
		});
	});

});