$('#slider-banner').slick({
	prevArrow: '<a href="#" class="banner-slide-control banner-slide-control-left"><i class="fas fa-angle-left"></i></a>',
	nextArrow: '<a href="#" class="banner-slide-control banner-slide-control-right"><i class="fas fa-angle-right"></i></a>',
	dots: true,
	dotsClass: 'banner-slide-nav',
	fade: true,
	autoplay: true,
	autoplaySpeed: 2000,
});

$('#slider-clients').slick({
	centerMode: true,
	centerPadding: '60px',
	slidesToShow: 3,
	prevArrow: '<a href="#" class="client-slide-control client-slide-control-left"><i class="fas fa-arrow-left"></i></a>',
	nextArrow: '<a href="#" class="client-slide-control client-slide-control-right"><i class="fas fa-arrow-right"></i></a>',
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
			},
		},
	],
});

$('#slider-testimonials').slick({
	slidesToShow: 2,
	prevArrow: '<a href="#" class="testimonials-slide-control testimonials-slide-control-left"><i class="fas fa-arrow-left"></i></a>',
	nextArrow: '<a href="#" class="testimonials-slide-control testimonials-slide-control-right"><i class="fas fa-arrow-right"></i></a>',
	dots: true,
	dotsClass: 'testimonials-slide-nav',
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
			},
		},
	],
});

const tabTriggers = document.querySelectorAll('[href^="#tab-"]');
tabTriggers.forEach((trigger) => {
	trigger.addEventListener('click', (event) => {
		event.preventDefault();

		const tabNavElem = trigger.parentElement.parentElement;
		const tabsElem = tabNavElem.parentElement;

		const tabsBodyElem = tabsElem.querySelector('.tabs-body');
		const tabsContentElems = tabsElem.querySelectorAll('.tabs-content');
		const tabsNavLinkElems = tabNavElem.querySelectorAll('.tabs-nav-link');

		tabsContentElems.forEach((contentElem) => {
			contentElem.classList.remove('tabs-content-active');
		});

		const targetTabContentElemId = trigger.getAttribute('href');
		const targetTabContentElem = tabsBodyElem.querySelector(targetTabContentElemId);
		targetTabContentElem.classList.add('tabs-content-active');

		tabsNavLinkElems.forEach((linkElem) => {
			linkElem.classList.remove('tabs-nav-link-active');
		});

		trigger.classList.add('tabs-nav-link-active');
	});
})