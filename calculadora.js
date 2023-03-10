// Crear los elementos del DOM

const input = document.createElement('input');

// Container
const container = document.createElement('div');
container.setAttribute('class', 'container d-flex justify-content-center');

// Row
const row = document.createElement('div');
row.setAttribute('class', 'row justify-content-center text-center');
row.setAttribute('style', 'width: 60%');

// Div 1
const div1 = document.createElement('div');
div1.setAttribute('class', 'text-center justify-content-center mt-5');

// Div 2
const div2 = document.createElement('div');
div2.setAttribute('class', 'text-center mt-5 d-flex justify-content-around');

// Div 3
const div3 = document.createElement('div');
div3.setAttribute('class', 'text-center mt-3 d-flex justify-content-around');
//Div 4
const div4 = document.createElement('div');
div4.setAttribute('class', 'text-center mt-3 d-flex justify-content-around');
//Div 5
const div5 = document.createElement('div');
div5.setAttribute('class', 'text-center mb-5 mt-3 d-flex justify-content-around');
//variabñes
const btn1 = document.createElement('button');
const btn2 = document.createElement('button');
const btn3 = document.createElement('button');
const btn4 = document.createElement('button');
const btn5 = document.createElement('button');
const btn6 = document.createElement('button');
const btn7 = document.createElement('button');
const btn8 = document.createElement('button');
const btn9 = document.createElement('button');
const btn0 = document.createElement('button');
const btnAdd = document.createElement('button');
const btnSub = document.createElement('button');
const btnMul = document.createElement('button');
const btnDiv = document.createElement('button');
const btnEqual = document.createElement('button');
const btnErase = document.createElement('button');
// Agregar elementos al DOM
document.body.appendChild(container);
container.appendChild(row);
row.appendChild(div1);
row.appendChild(div2);
row.appendChild(div3);
row.appendChild(div4);
row.appendChild(div5);
div1.appendChild(input);
div2.appendChild(btn1);
div2.appendChild(btn2);
div2.appendChild(btn3);
div2.appendChild(btnAdd);
div3.appendChild(btn4);
div3.appendChild(btn5);
div3.appendChild(btn6);
div3.appendChild(btnSub);
div4.appendChild(btn7);
div4.appendChild(btn8);
div4.appendChild(btn9);
div4.appendChild(btnMul);
div5.appendChild(btn0);
div5.appendChild(btnDiv);
div5.appendChild(btnErase);
div5.appendChild(btnEqual);
btn1.innerText = '1';
btn2.innerText = '2';
btn3.innerText = '3';
btn4.innerText = '4';
btn5.innerText = '5';
btn6.innerText = '6';
btn7.innerText = '7';
btn8.innerText = '8';
btn9.innerText = '9';
btn0.innerText = '0';
btnErase.innerText = 'C';
btnAdd.innerText = '+';
btnSub.innerText = '-';
btnMul.innerText = '*';
btnDiv.innerText = '/';
btnEqual.innerText = '='

// Eventos de los botones
btn1.addEventListener('click', () => {
  input.value += '1';
});

btn2.addEventListener('click', () => {
  input.value += '2';
});

btn3.addEventListener('click', () => {
  input.value += '3';
});

btn4.addEventListener('click', () => {
  input.value += '4';
});

btn5.addEventListener('click', () => {
  input.value += '5';
});

btn6.addEventListener('click', () => {
  input.value += '6';
});

btn7.addEventListener('click', () => {
  input.value += '7';
});

btn8.addEventListener('click', () => {
  input.value += '8';
});

btn9.addEventListener('click', () => {
  input.value += '9';
});

btn0.addEventListener('click', () => {
  input.value += '0';
});

btnErase.addEventListener('click', () => {
    input.value = '';
    btnAdd.classList.add('active');
    showOperationAnimation();
  });

  //animacion para aumentar el tamaño del resultado
  function showOperationAnimation() {
    input.classList.add('operation-animation');
    setTimeout(() => {
      input.classList.remove('operation-animation');
    }, 1000);
  }

  //Dependiendo de la operacion añade a la variable el valor del input actual
btnAdd.addEventListener('click', () => {
  operator = '+';
  num1 = parseFloat(input.value);
  input.value = '';
  showOperationAnimation();
});

btnSub.addEventListener('click', () => {
  operator = '-';
  num1 = parseFloat(input.value);
  input.value = '';
  showOperationAnimation();
});
btnMul.addEventListener('click', () => {
    operator = '*';
    num1 = parseFloat(input.value);
    input.value = '';
    showOperationAnimation();
  });

btnDiv.addEventListener('click', () => {
    operator = '/';
    num1 = parseFloat(input.value);
    input.value = '';
    showOperationAnimation();
});

//Operaciones
btnEqual.addEventListener('click', () => {
    btnEqual.classList.add('active');
    showOperationAnimation();
    let num2 = parseFloat(input.value);
    let result;
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        result = 0;
    }
    input.value = result;
  });



