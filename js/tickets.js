
// получение данных из input и select

document.querySelector('.D-1').addEventListener('input', () => {
	let data = document.querySelector('.D-1').value;
	document.querySelector('.day').innerHTML = data;
});

document.querySelector('.T-1').addEventListener('input', () => {
	let data = document.querySelector('.T-1').value;
	document.querySelector('.period').innerHTML = data;
});

document.querySelector('.E-1').addEventListener('input', () => {
	let data = document.querySelector('.E-1').value;
	document.querySelector('.exhibition').innerHTML = data;
});


// id="I1"

const input1 = document.querySelector('#I1'); 
const btn_plus1 = document.querySelector('.BTN-P'); 
const btn_minus1 = document.querySelector('.BTN-M');
const span1 = document.querySelector('#B1');

btn_minus1.addEventListener('click', () => {
  input1.stepDown(1); 
	span1.textContent = input1.value;
	document.getElementById('sum1').textContent = (input1.value*20)+'€';
	total ()
});

btn_plus1.addEventListener('click', () => {
  input1.stepUp(1); 
  span1.textContent = input1.value;
	document.getElementById('sum1').textContent = (input1.value*20)+'€';
	total ()
});

// id="I2"

const input2 = document.querySelector('#I2'); 
const btn_plus2 = document.querySelector('.BTN-P2'); 
const btn_minus2 = document.querySelector('.BTN-M2'); 
const span2 = document.querySelector('#S1');

btn_minus2.addEventListener('click', () => {
  input2.stepDown(1); 
	span2.textContent = input2.value;
	document.getElementById('sum2').textContent = (input2.value*10) +'€';
	total ()
});

btn_plus2.addEventListener('click', () => {
  input2.stepUp(1); 
  span2.textContent = input2.value;
	document.getElementById('sum2').textContent = (input2.value*10) +'€';
	total ()
});

function total (){
  document.getElementById('TOTAL').textContent = (input1.value*20) + (input2.value*10) +'€';
};