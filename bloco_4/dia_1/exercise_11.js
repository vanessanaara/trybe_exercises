let grossPay = 3000;
let inssDiscount;
let irDiscount;


if (grossPay <= 1556.94){
    inssDiscount = grossPay * 0.08;
} else if (grossPay >= 1556.95 && grossPay <= 2594.92){
    inssDiscount = grossPay * 0.09;
} else if (grossPay >= 2594.93 && grossPay <= 5189.82){
    inssDiscount = grossPay * 0.11;
} else {
    inssDiscount = 570.88;
}

let inssDiscountedPay = grossPay - inssDiscount;


if (inssDiscountedPay <= 1903.98){
    irDiscount = 0;
} else if (inssDiscountedPay >= 1903.99 && inssDiscountedPay <= 2826.65){
    irDiscount = (inssDiscountedPay * 0.075) - 142.80;
} else if (inssDiscountedPay >= 2826.66 && inssDiscountedPay <= 3751.05){
    irDiscount = (inssDiscountedPay * 0.15) - 354.80;
} else if (inssDiscountedPay >= 3751.06 && inssDiscountedPay <= 4664.68){
    irDiscount = (inssDiscountedPay * 0.225) - 636.13;
} else {
    irDiscount = (inssDiscountedPay * 0.275) - 869.36;
}

let netPay = inssDiscountedPay - irDiscount;

console.log(`Salário líquido: ${netPay}`);
