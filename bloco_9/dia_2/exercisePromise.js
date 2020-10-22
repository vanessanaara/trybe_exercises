const promise = new Promise ((resolve, reject) => {
  const array = [];

  for (let i = 0; i < 10; i++) {
    let number = Math.ceil(Math.random() * 50) + 1;
    array.push(number * number);
  }

  const arraySum = array.reduce((result, number) => result + number, 0);

  if (arraySum < 8000) {
    resolve(arraySum);
  } else {
    reject(`É mais de oito mil! Essa promise deve estar quebrada!`);
  }

})
.then(arraySum => [2, 3, 5, 10].map(arrayNumber => Math.round(arraySum / arrayNumber)))
.then(newArray => console.log(newArray.reduce((result, number) => result + number, 0)))
.catch(error => console.log(error));
