function sum(a,b){
    return a + b;
}

function minus(a,b){
    return a - b;
}

function times(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}

function module(a,b){
    return a % b;
}


console.log (sum(15,39));
console.log (minus(42,27));
console.log (times(22,9));
console.log (divide(155,5));
console.log (module(97,2));


function greater(num1, num2){
    if (num1 > num2){
        return num1 + " é maior que " + num2;
    } else {
        return num2 + " é maior que " + num1;
    }
}


console.log(greater(34,22));