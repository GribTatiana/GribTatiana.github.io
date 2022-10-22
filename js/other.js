
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



// плавное появление элементов

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
