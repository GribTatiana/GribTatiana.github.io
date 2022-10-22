
// скролл меню

$("a.menu-link").on("click", function (event) { 

  event.preventDefault(); 

  var id  = $(this).attr('href'), 

  top = $(id).offset().top; 

  $('body,html').animate({scrollTop: top}, 500); 
});

// Меню бургер

const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const menu = document.querySelector("#menu").cloneNode(1);
const ave = document.querySelector("#ave");
const body = document.body;
const header = document.querySelector("#header");
const other = document.querySelector("#section_visible");

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  ave.classList.toggle("close");
	body.classList.toggle("noscroll");
	header.classList.toggle("position");
  other.classList.toggle("visible");
  renderPopup();
}

function renderPopup() {
  popup.appendChild(menu);
}

const links = Array.from(menu.children);
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
	ave.classList.remove("close");
	body.classList.remove("noscroll");
	header.classList.remove("position");
	other.classList.remove("#section_visible");
}

// Кнопка вверх

$(function() {
	$(window).scroll(function() {
			if($(this).scrollTop() != 0) {
					$('#back_to_top').fadeIn();
			} else {
					$('#back_to_top').fadeOut();
					}
	});
	$('#back_to_top').click(function() {
			$('body,html').animate({scrollTop:0},800);
	});
});

// Слайдер

const swiper1 = new Swiper('.swiper', {
   
  pagination: {
    el: '.swiper-pagination',
		clickable: true,
		
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  slideToClickedSlide: true,

	autoplay: {
		delay: 5000,
		disableOnInteraction: true,
		speed: 1000,
	},

	effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
});


// Галерея сравнения

function imageComparison(selector) {

	let comparison = $(selector)
			.addClass("image-comparison")
			.prepend('<div class="image-comparison__before"></div>')
			.append('<button class="image-comparison__slider"></button>');

	let images = comparison
			.find("img")
			.addClass("image-comparison__image")
			.css("max-width", comparison.width());

	let before = comparison
			.find(".image-comparison__before")
			.append(images.eq(0));

	comparison
			.find(".image-comparison__slider")
			.on("dragstart", () => false) 
			.on("mousedown", function(e) {
					let slider = $(this);
					let doc = $(document).on("mousemove", (e) => {
							let offset = e.pageX - comparison.position().left;
							let width = comparison.width();

							if (offset < 0) offset = 0;
							if (offset > width) offset = width;

							slider.css("left", offset + "px");
							before.css("width", offset + "px");
					});

					doc.on("mouseup", () => doc.off("mousemove"));
			});
};

imageComparison("#image-comparison");


// плавное появление Галерея

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
for (let elm of elements) {
  observer.observe(elm);
}


// отложенная загрузка видео ч/з iframe

 document.addEventListener("DOMContentLoaded", function() {
  if ("IntersectionObserver" in window) {
   var iframesLazy = document.querySelectorAll("iframe.iframe-youtube-lazy-video");
   var iframeObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
     if (entry.isIntersecting && entry.target.src.length == 0) {
      entry.target.src = entry.target.dataset.src;
      iframeObserver.unobserve(entry.target);
     }
    });
   });
   iframesLazy.forEach(function (iframe) {
    iframeObserver.observe(iframe);
   });
  } else {
   var iframesLazy = document.querySelector('iframe.iframe-youtube-lazy-video');
   for (var i = 0; i < iframesLazy.length; i++) {
    if (lazyVids[i].getAttribute('data-src')) {
     lazyVids[i].setAttribute('src', lazyVids[i].getAttribute('data-src'));
    }
   }
  }
 });


//  кнопки плюс/минус 
const input1 = document.querySelector('#I1'); 
const btn_plus1 = document.querySelector('.BTN-P'); 
const btn_minus1 = document.querySelector('.BTN-M');

btn_minus1.addEventListener('click', () => {
  input1.stepDown(1); 
	total ()
});

btn_plus1.addEventListener('click', () => {
  input1.stepUp(1); 
	total ()
});

const input2 = document.querySelector('#I2'); 
const btn_plus2 = document.querySelector('.BTN-P2'); 
const btn_minus2 = document.querySelector('.BTN-M2'); 

btn_minus2.addEventListener('click', () => {
  input2.stepDown(1); 
	total ()
});

btn_plus2.addEventListener('click', () => {
  input2.stepUp(1); 
	total ()
});

function total (){
  document.getElementById('TOTAL').textContent = (input1.value*20) + (input2.value*10) ;
};