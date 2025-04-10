document.addEventListener("DOMContentLoaded", function () {

	// Custom JS

});


const widthScrollBar = () => {
	let div = document.createElement("div");
	div.style.overflowY = "scroll";
	div.style.width = "50px";
	div.style.height = "50px";
	document.body.append(div);
	let scrollWidth = div.offsetWidth - div.clientWidth;
	div.remove();
	return scrollWidth;
}

const fadeIn = (el, timeout, display) => {
	el.style.opacity = 0;
	el.style.display = display || "block";
	el.style.transition = `opacity ${timeout}ms`;
	setTimeout(() => {
		el.style.opacity = 1;
	}, 10);
}

const fadeOut = (el, timeout) => {
	el.style.opacity = 1;
	el.style.transition = `opacity ${timeout}ms`;
	el.style.opacity = 0;
	setTimeout(() => {
		el.style.display = "none";
	}, timeout);
}


const wrapTagInDiv = (el, wrapClass = 'wrapclass') => {
	let div = document.createElement("div");
	div.classList.add(wrapClass);
	el.parentNode.insertBefore(div, el);
	div.appendChild(el);
}

const wrapVideoInContent = () => {
	let contents = document.querySelectorAll('.content');
	if (!contents) return false;
	contents.forEach(el => {
		let videos = el.querySelectorAll('iframe, video');
		videos.forEach(video => {
			wrapTagInDiv(video, 'video');
		});
		let tables = el.querySelectorAll('table');
		tables.forEach(table => {
			wrapTagInDiv(table, 'table-adaptive');
		});
	})
}
document.addEventListener("DOMContentLoaded", wrapVideoInContent);


const header = document.querySelector('.header');

const togglemenu = document.querySelector("#toggle-menu");
const menu = document.querySelector(".menu");
const overlay = document.querySelector('.header__overlay');
const menuClose = document.querySelector('.menu__close');
if (togglemenu) {
	togglemenu.addEventListener("click", () => {
		togglemenu.classList.add("on");
		menu.classList.add("on");
		overlay.classList.add("active");
		document.body.classList.add("noscroll");
	});
}
if (menuClose) menuClose.addEventListener("click", closeMenu);
if (overlay) overlay.addEventListener("click", closeMenu);

function closeMenu() {
	togglemenu.classList.remove("on");
	menu.classList.remove("on");
	overlay.classList.remove("active");
	document.body.classList.remove("noscroll");
}

const openMenu = (e) => {
	console.log(e.currentTarget.closest('.menu__item').querySelector('.menu__sub'));
	if (e.currentTarget.closest('.menu__item').classList.contains("open")) {
		e.currentTarget.closest('.menu__item').querySelector('.menu__sub').style.maxHeight = "0";
		e.currentTarget.closest('.menu__item').classList.remove("open");
	} else {
		e.currentTarget.closest('.menu__item').querySelector('.menu__sub').style.maxHeight = 8 + e.currentTarget.closest('.menu__item').querySelector('.menu__sub').scrollHeight + "px";
		e.currentTarget.closest('.menu__item').classList.add("open");
	}
}
let menuSubBtns = document.querySelectorAll(".menu__item_sub .menu__item-svg-block");
menuSubBtns.forEach((el) => {
	el.addEventListener("click", openMenu);
});

window.addEventListener("resize", () => {
	if (window.outerWidth >= 768) {
		closeMenu();
	}
});


const videoReviewSlider = () => {
	let slider = new Swiper(".video-review", {
		slidesPerView: 3,
		spaceBetween: 20,
		pagination: {
			el: '.video-review-pagination',
			type: 'bullets',
		},
		navigation: {
			nextEl: '.video-review-next',
			prevEl: '.video-review-prev',
		},
		breakpoints: {
			0: {
				slidesPerView: 1.4,
				spaceBetween: 16,
				pagination: false,
			},
			576: {
				slidesPerView: 3,
			}
		}
	});
};
videoReviewSlider();

const commentSlider = () => {
	let slider = new Swiper(".comment-slider", {
		slidesPerView: 3,
		spaceBetween: 20,
		pagination: {
			el: '.comment-slider-pagination',
			type: 'bullets',
		},
		navigation: {
			nextEl: '.comment-slider-next',
			prevEl: '.comment-slider-prev',
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
				spaceBetween: 16,
				pagination: false,
			},
			768: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 3,
			}
		}
	});
};
commentSlider();

const newsSlider = () => {
	let slider = new Swiper(".news-slider", {
		slidesPerView: 3,
		spaceBetween: 0,
		pagination: {
			el: '.news-slider-pagination',
			type: 'bullets',
		},
		navigation: {
			nextEl: '.news-slider-next',
			prevEl: '.news-slider-prev',
		},
		breakpoints: {
			0: {
				slidesPerView: 1.4,
				// pagination: false,
			},
			576: {
				slidesPerView: 2.4,
			},
			768: {
				slidesPerView: 3,
			}
		}
	});
};
newsSlider();

const historySlider = () => {
	let years = [];
	document.querySelectorAll('.history-item').forEach(el => {
		years.push(el.dataset.historyYear);
	});

	let slider = new Swiper(".history-slider", {
		slidesPerView: 1,
		spaceBetween: 8,
		pagination: {
			el: '.history-slider-pagination',
			type: 'bullets',
			renderBullet: function (index, className) {
				return `<span class="${className}"><span class="swiper-pagination-bullet-year">${years[index]}</span></span>`;
			},
		},
		navigation: {
			nextEl: '.history-slider-next',
			prevEl: '.history-slider-prev',
		},
		// breakpoints: {
		// 	0: {
		// 		slidesPerView: 1.4,
		// 		pagination: false,
		// 	},
		// 	576: {
		// 		slidesPerView: 2.4,
		// 	},
		// 	768: {
		// 		slidesPerView: 3,
		// 	}
		// }
	});
};
historySlider();


const staffSlider = () => {
	let staffSliderOptions = {
		slidesPerView: 8,
		loop: true,
		autoplay: {
			delay: 0,
			reverseDirection: false,
			disableOnInteraction: false
		},
		spaceBetween: 16,
		speed: 20000,
		allowTouchMove: false,
		loopFillGroupWithBlank: true,
		breakpoints: {
			0: {
				slidesPerView: 1.6,
				autoplay: false,
				allowTouchMove: true,
				speed: 300,
				loop: true,
			},
			576: {
				slidesPerView: 4,
			},
			992: {
				slidesPerView: 6,
			},
			1200: {
				slidesPerView: 8,
			},
		}
	};

	let staffSliderOptionsReverse = JSON.parse(JSON.stringify(staffSliderOptions));
	staffSliderOptionsReverse.autoplay.reverseDirection = true;

	let sliderNoReverse = new Swiper('.staff-slider', staffSliderOptions);
	let sliderReverse = new Swiper('.staff-slider-reverse', staffSliderOptionsReverse);

};

staffSlider();


const reviewSlider = () => {
	let slider = new Swiper(".review-slider", {
		// slidesPerView: 3,
		spaceBetween: 0,
		// pagination: {
		// 	el: '.news-slider-pagination',
		// 	type: 'bullets',
		// },
		navigation: {
			nextEl: '.review-slider-next',
			prevEl: '.review-slider-prev',
		},
		breakpoints: {
			0: {
				slidesPerView: 1.4,
				pagination: false,
			},
			576: {
				slidesPerView: 2.4,
			},
			768: {
				slidesPerView: 4,
			}
		}
	});
};
reviewSlider();

const certificateSlider = () => {
	let slider = new Swiper(".certificate-slider", {
		// slidesPerView: 3,
		spaceBetween: 0,
		// pagination: {
		// 	el: '.news-slider-pagination',
		// 	type: 'bullets',
		// },
		navigation: {
			nextEl: '.certificate-slider-next',
			prevEl: '.certificate-slider-prev',
		},
		breakpoints: {
			0: {
				slidesPerView: 1.4,
				pagination: false,
			},
			576: {
				slidesPerView: 2.4,
			},
			768: {
				slidesPerView: 4,
			}
		}
	});
};
certificateSlider();

const partnersSlider = () => {
	let slider = new Swiper('.partners-slider', {
		slidesPerView: 6,
		pagination: {
			el: '.partners-slider-pagination',
			type: 'bullets',
		},
		breakpoints: {
			0: {
				slidesPerView: 1.6,
			},
			576: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 5,
			},
		}
	})
};

partnersSlider();

const stepsSlider = () => {
	new Swiper('.steps-slider', {
		slidesPerView: 4,
		navigation: {
			nextEl: '.steps-slider-next',
			prevEl: '.steps-slider-prev',
		},
		breakpoints: {
			0: {
				slidesPerView: 1.2,
			},
			576: {
				slidesPerView: 2.2,
			},
			992: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 4,
			}
		}
	})
};

stepsSlider();

const serviceSlider = () => {
	let slider = new Swiper(".service-slider", {
		slidesPerView: 1,
		spaceBetween: 10,
		pagination: {
			el: '.service-slider-pagination',
			type: 'bullets',
		},
		navigation: {
			nextEl: '.service-slider-next',
			prevEl: '.service-slider-prev',
		},
		breakpoints: {
			0: {
				// slidesPerView: 1.4,
				// pagination: false,
			},
			576: {
				// slidesPerView: 2.4,
			},
			768: {
				// slidesPerView: 4,
			}
		}
	});
};
serviceSlider();

const singleSimpleSlider = () => {
	let slider = new Swiper(".single-simple-slider", {
		slidesPerView: 1,
		spaceBetween: 10,
		autoHeight: true,
		pagination: {
			el: '.single-simple-slider-pagination',
			type: 'bullets',
		},
		navigation: {
			nextEl: '.single-simple-slider-next',
			prevEl: '.single-simple-slider-prev',
		},
		breakpoints: {
			0: {
				// slidesPerView: 1.4,
				// pagination: false,
			},
			576: {
				// slidesPerView: 2.4,
			},
			768: {
				// slidesPerView: 4,
			}
		}
	});
};
singleSimpleSlider();


const createProductSingleSlider = () => {

	let thumb = new Swiper(".single-thumbs-slider", {

		spaceBetween: 14,
		loop: false,
		autoHeight: false,
		slidesPerView: 3.5,
		// slidesPerColumnFill: 'row',
		breakpoints: {
			'576': {
				spaceBetween: 14,
			},
			'768': {
				direction: 'vertical',
				spaceBetween: 24,
			}
		},

	});
	let big = new Swiper(".single-big-slider", {
		spaceBetween: 8,
		autoHeight: false,
		loop: false,
		navigation: {
			nextEl: '.single-big-slider-next',
			prevEl: '.single-big-slider-prev',
		},
		// pagination: {
		// 	el: '.slider-pagination',
		// 	clickable: true,
		// },
		thumbs: {
			swiper: thumb,
		},
	});

}

createProductSingleSlider();


const horizontalProductSingleSlider = () => {

	let thumb = new Swiper(".product-thumb-slider", {
		spaceBetween: 16,
		loop: true,
		slidesPerView: 4,
		// slidesPerView: 'auto',
		freeMode: true,
		watchSlidesProgress: true,
	});
	let big = new Swiper(".product-big-slider", {
		spaceBetween: 16,
		autoHeight: true,
		loop: true,
		navigation: false,
		thumbs: {
			swiper: thumb,
		},
	});

}

horizontalProductSingleSlider();

const moreProductsSlider = () => {
	let slider = new Swiper(".more-products-slider", {
		slidesPerView: 3,
		spaceBetween: 20,

		pagination: {
			el: '.more-products-slider-pagination',
			type: 'bullets',
		},
		navigation: {
			nextEl: '.more-products-slider-next',
			prevEl: '.more-products-slider-prev',
		},
		breakpoints: {
			0: {
				slidesPerView: 1.4,
				spaceBetween: 16,
				// pagination: false,
			},
			576: {
				slidesPerView: 2.4,
			},
			768: {
				slidesPerView: 3,
			}
		}
	});
};
moreProductsSlider();


const firstSlider = () => {
	let slider = new Swiper(".first-slider", {
		slidesPerView: 1,
		spaceBetween: 0,
		autoplay: {
			delay: 5000,
		},
		pagination: {
			el: '.first-slider-pagination',
			type: 'bullets',
		},
		loop: true,
		navigation: {
			nextEl: '.first-slider-next',
			prevEl: '.first-slider-prev',
		},
		breakpoints: {
			0: {
				// slidesPerView: 1.4,
				// pagination: false,
			},
			576: {
				// slidesPerView: 2.4,
			},
			768: {
				// slidesPerView: 4,
			}
		}
	});
};
firstSlider();

let structureTabs = document.querySelectorAll('.structure__title');
if (structureTabs) {
	structureTabs.forEach(el => {
		el.addEventListener('click', function (e) {
			document.querySelector('.structure__title.active').classList.remove('active');
			document.querySelector('.structure__item.active').classList.remove('active');
			let trg = e.target;
			trg.classList.add('active');
			document.querySelector(`.structure__item[data-tab-content="${trg.dataset.tab}"]`).classList.add('active');
		});
	});
}

function getCoords(elem) {
	let box = elem.getBoundingClientRect();

	return {
		top: box.top + window.pageYOffset,
		right: box.right + window.pageXOffset,
		bottom: box.bottom + window.pageYOffset,
		left: box.left + window.pageXOffset
	};
}

const openWork = (e) => {

	let trg = e.currentTarget;

	let map = trg.closest('.map');

	let trgItem = trg.dataset.flagItem;
	let mapItem = document.querySelector(`.map__item[data-map-item="${trgItem}"`);
	if (mapItem.classList.contains('active')) {
		fadeOut(document.querySelector('.map__item.active'), 300);
		document.querySelector('.map__item.active').classList.remove('active');
		return;
	}
	if (document.querySelector('.map__item.active')) {
		fadeOut(document.querySelector('.map__item.active'), 300);
		document.querySelector('.map__item.active').classList.remove('active');
	}
	// fadeOut(mapItem, document.querySelector('.map__item .active'));
	mapItem.classList.add('active');
	trg.classList.add('active');


	let x = e.clientX - trg.getBoundingClientRect().left;
	let y = e.clientY - trg.getBoundingClientRect().top;


	fadeIn(mapItem, 300, 'block');
	if (Number(trg.style.top.replace(/[^+\d]/g, '')) <= 39) {
		mapItem.style.top = `calc(${trg.style.top} + 50px)`;
	} else {
		mapItem.style.top = `calc(${trg.style.top} - ${mapItem.offsetHeight}px)`;
	}
	if (Number(trg.style.left.replace(/[^+\d]/g, '')) <= 5) {
		mapItem.style.left = 0 + 'px';
	} else if (Number(trg.style.left.replace(/[^+\d]/g, '')) >= 90) {
		mapItem.style.left = '84%';
	} else {
		mapItem.style.left = `calc(${trg.style.left} - 6%)`;
	}
	// console.log(mapItem.offsetHeight);
	return false
	mapItem.style.top = trg.offsetTop + mapItem.getBoundingClientRect().height - 30 + 'px';
	mapItem.style.left = trg.offsetLeft + (mapItem.getBoundingClientRect().width / 2) + 22 + 'px';
	console.log(mapItem);
	console.log(e.pageX);
	console.log(e.pageY);
}
let flags = document.querySelectorAll('.map__flag');

flags.forEach(el => {
	el.addEventListener('click', openWork);
});


var lgVideo = document.querySelectorAll('.lg-video');
for (let i = 0; i < lgVideo.length; i++) {
	lightGallery(lgVideo[i], {
		thumbnail: true,
		selector: '.lg-item',
		download: false
	})
}
var lg = document.querySelectorAll('.lg');
for (let i = 0; i < lg.length; i++) {
	lightGallery(lg[i], {
		thumbnail: true,
		selector: '.lg-item',
		download: false
	})
}

document.querySelectorAll('.select').forEach(el => {
	NiceSelect.bind(el, {
		// searchable: true,
		selectedtext: 'выбрано',
		placeholder: 'Все'
	});
})

const openQa = (e) => {
	if (e.target.closest('.qa-item__title-block').parentElement.classList.contains("open")) {
		e.target.closest('.qa-item__title-block').nextElementSibling.style.maxHeight = "0";
		e.target.closest('.qa-item__title-block').parentElement.classList.remove("open");
	} else {
		e.target.closest('.qa-item__title-block').nextElementSibling.style.maxHeight = e.target.closest('.qa-item__title-block').nextElementSibling.scrollHeight + "px";
		e.target.closest('.qa-item__title-block').parentElement.classList.add("open");
	}
}

let qa = document.querySelectorAll('.qa-item');
if (qa) {
	qa.forEach((el, i) => {
		el.addEventListener('click', openQa);
	});
}

const openTab = (e) => {
	document.querySelector(".favorite-btn.active").classList.remove("active");
	document.querySelector(".favorite-content.active").classList.remove("active");
	let trg = e.currentTarget;
	trg.classList.add("active");
	document.querySelector(`.favorite-content[data-tab-content="${trg.dataset.tab}"]`).classList.add("active");
}

let favoriteTabs = document.querySelectorAll(".favorite-btn");
if (favoriteTabs) {
	favoriteTabs.forEach((el) => {
		el.addEventListener("click", openTab);
	});
}

const openMedia = (e) => {
	document.querySelector(".media-btn.active").classList.remove("active");
	document.querySelector(".media-content.active").classList.remove("active");
	let trg = e.currentTarget;
	trg.classList.add("active");
	document.querySelector(`.media-content[data-tab-content="${trg.dataset.tab}"]`).classList.add("active");
}

let mediaTabs = document.querySelectorAll(".media-btn");
if (mediaTabs) {
	mediaTabs.forEach((el) => {
		el.addEventListener("click", openMedia);
	});
}


let modalVideo = document.querySelector('#modal-video');
const openYoutubeVideo = (e) => {
	let target = e.currentTarget;
	let wsb = widthScrollBar();
	let src = target.dataset.src;
	// let iframeSrc = `https://www.youtube.com/embed/${youtube_parser(src)}`;
	let iframeSrc = src;
	if (target.classList.contains('video-rutube')) iframeSrc = src;
	if (target.classList.contains('video-local')) iframeSrc = src;
	if (target.classList.contains('video-vk')) iframeSrc = src;

	if (modalVideo !== null && !modalVideo.classList.contains("active")) {
		if (target.classList.contains('video-local')) {
			// let video = modalVideo.querySelector('video');
			let video = document.createElement('video');
			video.setAttribute('controls', '');
			let source = document.createElement('source');
			source.setAttribute('src', iframeSrc);
			source.setAttribute('type', 'video/mp4');
			video.appendChild(source);
			modalVideo.querySelector('.video').appendChild(video);
			video.play();
			// modalVideo.querySelector('video source').src = iframeSrc;
		} else if (target.classList.contains('video-vk')) {
			modalVideo.querySelector('.video').insertAdjacentHTML('beforeend', iframeSrc);
			// modalVideo.querySelector('.video').appendChild(src);
		} else if (target.classList.contains('video-rutube')) {
			modalVideo.querySelector('.video').insertAdjacentHTML('beforeend', iframeSrc);
		} else {
			modalVideo.querySelector('iframe.iframe-youtube').src = iframeSrc;
		}
		fadeIn(modalVideo, 300, "flex");
		document.body.classList.add("noscroll");
		document.querySelector(".header").style.paddingRight = wsb + "px";
		document.querySelector(".footer").style.paddingRight = wsb + "px";
		document.querySelector(".main").style.paddingRight = wsb + "px";
		setTimeout(() => {
			modalVideo.classList.add("active");
		}, 300);
	}
}
let videos = document.querySelectorAll('.video-item');
videos.forEach(el => {
	el.addEventListener("click", openYoutubeVideo);
});


const closeYoutubeVideo = (e) => {
	if (e.target.closest('.modal__close') || e.target.classList.contains('modal')) {
		if (modalVideo.querySelector('video')) {
			modalVideo.querySelector('video').remove();
		} else if (modalVideo.querySelector('iframe:not(.iframe-youtube)')) {
			modalVideo.querySelector('iframe:not(.iframe-youtube)').remove();
		} else {
			modalVideo.querySelector('iframe').src = '';
		}
		fadeOut(modalVideo, 300);
		setTimeout(() => {
			modalVideo.classList.remove("active");
			document.body.classList.remove("noscroll");
			document.querySelector(".header").style.paddingRight = "0px";
			document.querySelector(".footer").style.paddingRight = "0px";
			document.querySelector(".main").style.paddingRight = "0px";
		}, 300);
	}
}
if (modalVideo) modalVideo.addEventListener('click', closeYoutubeVideo);


document.querySelectorAll('.tel').forEach(el => {
	IMask(
		el, {
			mask: '+{7}(000)-000-00-00'
		}
	);
});


function openModal(e) {
	e.preventDefault();
	let modal = e.currentTarget.dataset.idModal ? document.getElementById(e.currentTarget.dataset.idModal) : document.getElementById("modal-callback");
	let objectTitle = e.currentTarget.dataset.objectTitle;
	if (objectTitle) modal.querySelector('input[name="modal-object-title"]').value = objectTitle;
	let wsb = widthScrollBar();
	fadeIn(modal, 300, "flex");
	document.body.classList.add("noscroll");
	document.querySelector(".header").style.paddingRight = wsb + "px";
	document.querySelector(".footer").style.paddingRight = wsb + "px";
	document.querySelector(".main").style.paddingRight = wsb + "px";
}

let btnModals = document.querySelectorAll(".btn-modal");
btnModals.forEach((el) => {
	el.addEventListener("click", (e) => {
		openModal(e);
	});
});

function closeModal(e) {
	if (e.target.closest('.modal__close') || e.target.classList.contains('modal')) {
		fadeOut(e.currentTarget, 300);
		setTimeout(() => {
			document.body.classList.remove("noscroll");
			document.querySelector(".header").style.paddingRight = "0px";
			document.querySelector(".footer").style.paddingRight = "0px";
			document.querySelector(".main").style.paddingRight = "0px";
		}, 300);
		if (e.currentTarget.querySelector('.modal__success-block')) fadeOut(e.currentTarget.querySelector('.modal__success-block'), 300);
	}
}
let modals = document.querySelectorAll('.modal');
modals.forEach(el => {
	el.addEventListener('click', closeModal);
});

function openSuccess() {
	let wsb = widthScrollBar();
	fadeIn(document.querySelector('#modal-success'), 300, "flex");
	document.body.classList.add("noscroll");
	document.querySelector(".header").style.paddingRight = wsb + "px";
	document.querySelector(".footer").style.paddingRight = wsb + "px";
	document.querySelector(".main").style.paddingRight = wsb + "px";
}


function openSearch(e) {
	e.preventDefault();
	let modal = document.querySelector('#modal-search');
	let wsb = widthScrollBar();
	fadeIn(modal, 300, "flex");
	document.body.classList.add("noscroll");
	document.querySelector(".header").style.paddingRight = wsb + "px";
	document.querySelector(".footer").style.paddingRight = wsb + "px";
	document.querySelector(".main").style.paddingRight = wsb + "px";
}

let openSearchBtn = document.querySelectorAll(".open-search");
openSearchBtn.forEach((el) => {
	el.addEventListener("click", (e) => {
		openSearch(e);
	});
});