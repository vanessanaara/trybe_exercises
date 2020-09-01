// let n = 5;
// let starKey = "*";

// for (let i = 0; i <= n; i += 1){
//     console.log(starKey.repeat(n));
// }

let n = 5;
let starKey = "*";
let line = "";

//loop para preencher 1 linha com a quantidade n de asteriscos
for (let i = 1; i <= n; i +=1){
    line += starKey;
}

//loop para fazer n linhas que foram feitas no loop anterior
for (let j = 1; j <= n; j += 1){
    console.log(line);
}