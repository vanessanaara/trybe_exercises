const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  
  fetch(API_URL, myObject)
  .then(response => response.json())
  .then(data => {
    const jokeText = document.querySelector('#jokeContainer');
    jokeText.style.color = 'red';
    jokeText.innerText = data.joke;
  });
};

window.onload = () => fetchJoke();
