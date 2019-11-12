'use strict';
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//max hourly customers across locations
//average cookies per customer
//method generating a random number and customers 
//array with results
//display value of array in <ul>
// calculate the sum of these hourly totals

function randomCustomer(shop) {
  for (var i = 0; i < hours.length; i++) {
    var customerCount = Math.floor(Math.random() * (shop.maxCustomers - shop.minCustomers + 1)) + shop.minCustomers;
    var cookieSales = Math.ceil(shop.averageCookieCustomer * customerCount);
    shop.hourlyResultsArray.push(cookieSales);
    shop.totalSales += cookieSales;
  }
}

var seattle = {
  name: 'Seattle',
  minCustomers: 23,
  maxCustomers: 65,
  averageCookieCustomer: 6.3,
  hourlyResultsArray: [],
  totalSales: 0,
  generateHourlySales: function () {
    randomCustomer(this);
  },
};
seattle.generateHourlySales();
console.log('output', seattle.hourlyResultsArray);
console.log('Seattle total', seattle.totalSales);



var tokyo = {
  name: 'Tokyo',
  minCustomers: 3,
  maxCustomers: 24,
  averageCookieCustomer: 1.2,
  hourlyResultsArray: [],
  totalSales: 0,
  generateHourlySales: function () {
    randomCustomer(this);
  },
};
tokyo.generateHourlySales();
console.log('output', tokyo.hourlyResultsArray);
console.log('Tokyo total', tokyo.totalSales);

var dubai = {
  name: 'Dubai',
  minCustomers: 11,
  maxCustomers: 38,
  averageCookieCustomer: 3.7,
  hourlyResultsArray: [],
  totalSales: 0,
  generateHourlySales: function () {
    randomCustomer(this);
  },
};
dubai.generateHourlySales();
console.log('output', dubai.hourlyResultsArray);
console.log('Dubai total', dubai.totalSales);

var paris = {
  name: 'Paris',
  minCustomers: 20,
  maxCustomers: 38,
  averageCookieCustomer: 2.3,
  hourlyResultsArray: [],
  totalSales: 0,
  generateHourlySales: function () {
    randomCustomer(this);
  },
};
paris.generateHourlySales();
console.log('output', paris.hourlyResultsArray);
console.log('Paris total', paris.totalSales);

var lima = {
  name: 'Lima',
  minCustomers: 2,
  maxCustomers: 16,
  averageCookieCustomer: 4.6,
  hourlyResultsArray: [],
  totalSales: 0,
  generateHourlySales: function () {
    randomCustomer(this);
  },
};
lima.generateHourlySales();
console.log('output', lima.hourlyResultsArray);
console.log('Lima total', lima.totalSales);

//DOM Seattle
var parentElement = document.getElementById('Shops');
var article = document.createElement('article');
parentElement.appendChild(article);

var h2 = document.createElement('h2');
h2.textContent = seattle.name;
article.appendChild(h2);

var ul = document.createElement('ul');
article.appendChild(ul);

for (var i = 0; i < seattle.hourlyResultsArray.length; i++) {
  var li = document.createElement('li');
  li.textContent = hours[i] + ': ' + seattle.hourlyResultsArray[i] + ' cookies';
  ul.appendChild(li);
}
var totalLi = document.createElement('li');
totalLi.textContent = `Total: ${seattle.totalSales} cookies`;
ul.appendChild(totalLi);


//DOM Tokyo

var parentElement = document.getElementById('Shops');
var article = document.createElement('article');
parentElement.appendChild(article);

var h2 = document.createElement('h2');
h2.textContent = tokyo.name;
article.appendChild(h2);

var ul = document.createElement('ul');
article.appendChild(ul);

for (var i = 0; i < tokyo.hourlyResultsArray.length; i++) {
  var li = document.createElement('li');
  li.textContent = hours[i] + ': ' + tokyo.hourlyResultsArray[i] + ' cookies';
  ul.appendChild(li);
}
var totalLi = document.createElement('li');
totalLi.textContent = `Total: ${tokyo.totalSales} cookies`;
ul.appendChild(totalLi);

// DOM Dubai

var parentElement = document.getElementById('Shops');
var article = document.createElement('article');
parentElement.appendChild(article);

var h2 = document.createElement('h2');
h2.textContent = dubai.name;
article.appendChild(h2);

var ul = document.createElement('ul');
article.appendChild(ul);

for (var i = 0; i < dubai.hourlyResultsArray.length; i++) {
  var li = document.createElement('li');
  li.textContent = hours[i] + ': ' + dubai.hourlyResultsArray[i] + ' cookies';
  ul.appendChild(li);
}
var totalLi = document.createElement('li');
totalLi.textContent = `Total: ${dubai.totalSales} cookies`;
ul.appendChild(totalLi);

//DOM Paris

var parentElement = document.getElementById('Shops');
var article = document.createElement('article');
parentElement.appendChild(article);

var h2 = document.createElement('h2');
h2.textContent = paris.name;
article.appendChild(h2);

var ul = document.createElement('ul');
article.appendChild(ul);

for (var i = 0; i < paris.hourlyResultsArray.length; i++) {
  var li = document.createElement('li');
  li.textContent = hours[i] + ': ' + paris.hourlyResultsArray[i] + ' cookies';
  ul.appendChild(li);
}
var totalLi = document.createElement('li');
totalLi.textContent = `Total: ${paris.totalSales} cookies`;
ul.appendChild(totalLi);

//DOM Lima

var parentElement = document.getElementById('Shops');
var article = document.createElement('article');
parentElement.appendChild(article);

var h2 = document.createElement('h2');
h2.textContent = lima.name;
article.appendChild(h2);

var ul = document.createElement('ul');
article.appendChild(ul);

for (var i = 0; i < lima.hourlyResultsArray.length; i++) {
  var li = document.createElement('li');
  li.textContent = hours[i] + ': ' + lima.hourlyResultsArray[i] + ' cookies';
  ul.appendChild(li);
}
var totalLi = document.createElement('li');
totalLi.textContent = `Total: ${lima.totalSales} cookies`;
ul.appendChild(totalLi);
