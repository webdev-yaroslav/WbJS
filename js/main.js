const mySwiper = new Swiper('.swiper-container', {
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '.slider-button-next',
		prevEl: '.slider-button-prev',
	},
});

const buttonCart = document.querySelector('.button-cart');
const modalCart = document.querySelector('#modal-cart');
const modalClose = document.querySelector('.modal-close');

const openModal = function() {
	modalCart.classList.add('show');
};

const closeModal = function() {
	modalCart.classList.remove('show');
}

buttonCart.addEventListener('click', openModal);
modalClose.addEventListener('click', closeModal);


// scroll smooth

{
	const scrollLinks = document.querySelectorAll('a.scroll-link');

	for (const scrollLink of scrollLinks) {
		scrollLink.addEventListener('click', event => {
			event.preventDefault();
			const id = scrollLink.getAttribute('href');
	
			document.querySelector(id).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		});
	}
};