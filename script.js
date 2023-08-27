
const h1 = document.querySelector('h1');
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const resultado = document.querySelector('#resultado');
const form = document.querySelector('#form');
const btn = document.querySelector('#btnCalcular');


form.addEventListener('submit', btnOnClick);

function btnOnClick(event) {
   event.preventDefault();
   const sumaImputs = (input1.value + input2.value);
   resultado.innerHTML = "Resultado: " + sumaImputs

}