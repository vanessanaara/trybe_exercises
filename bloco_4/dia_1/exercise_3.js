let num1 = 4;
let num2 = 3;
let num3 = 22;

if (num1 > num2 && num1 > num3){
    console.log(num1 + " é maior que " + num2 + " e " + num3);
}else if (num2 > num1 && num2 > num3){
    console.log(num2 + " é maior que " + num1 + " e " + num3);
}else {
    console.log(num3 + " é maior que " + num1 + " e " + num2);
}