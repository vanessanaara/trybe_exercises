// 1. Acessando propriedades de um objeto por variável
let testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};


let playerNumber = 16;
let player = testObj[playerNumber];
console.log(player);

// 2. Atualizando uma propriedade.

let myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.name = "Happy Coder"; // dot notation
myDog["legs"] = "8"; // bracket notation

console.log(myDog);
