let productCost = 10;
let sellPrice = 25;
let totalCost = productCost * 1.2;
let profit = sellPrice - totalCost;

if (productCost >= 0 && sellPrice >= 0){
    let totalProfit = profit * 1000;
    console.log(totalProfit);
} else {
    console.log("Erro! Os valores de entrada são menores que 0")
}
