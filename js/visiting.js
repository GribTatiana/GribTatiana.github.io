

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


// плавное появление элементов

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}
let options = { threshold: [0.3] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
for (let elm of elements) {
  observer.observe(elm);
}


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


