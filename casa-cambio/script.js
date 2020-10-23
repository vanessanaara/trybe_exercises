window.onload = () => {
  setupEventHandlers();
}

const showAlert = (message) => {
  window.alert(message);
}

const renderRate = ([ currency, value ]) => {
  const currenyList = document.querySelector('#currency-list');
  const elementList = document.createElement('li');
  elementList.innerText = `${currency}: ${parseFloat(value.toFixed(3))}`;
  currenyList.appendChild(elementList);
}

const handleRates = (rates) => {
  const ratesEntries = Object.entries(rates).sort();
  ratesEntries.forEach((entry) => renderRate(entry)); //ratesEntries.forEach(renderRate);
}

const fetchCurrency = (currency) => {
  const endPoint = `https://api.ratesapi.io/api/latest?base=${currency}`;

  fetch(endPoint)
    .then((response) => response.json())
    .then((object) => {
      if (object.error) {
        throw new Error (object.error);
      } else {
        handleRates(object.rates);
      }
    })
    .catch((error) => showAlert(error));
}

const handleSearchEvent = () => {
  const currencyInputValue = document.querySelector('#currency-input').value.toUpperCase();

  const ul = document.querySelector('#currency-list');
  ul.innerText = '';

  if (currencyInputValue === '') {
    showAlert('A moeda deve ser informada');
  } else if (currencyInputValue === 'BTC') {
    // Consultar API
  } else {
    fetchCurrency(currencyInputValue);
  }
}

const setupEventHandlers = () => {
  const searchButton = document.querySelector('#search-button');
  searchButton.addEventListener('click', handleSearchEvent);
}