// Utilizando o let, o escopo passa a ser local
function checkScope() {
  'use strict';
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}

checkScope();

// O const é uma declaração de variável que permanece constante, porém podemos modificar o índices do array

const s = [5, 7, 2];
function editInPlace() {
  'use strict';
  // Only change code below this line

  s[0] = 2;
  s[1] = 5;
  s[2] = 7;

  console.log(s);

  // Only change code above this line
}
editInPlace();