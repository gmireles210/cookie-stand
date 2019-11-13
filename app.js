'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var hourlyCookies = [];

var tableElement = document.getElementById('stores');

//Stores capitalized due to contruction parameters further down//
var Stores = function(location, minCustomer, maxCustomer, avgCookies){
  this.location = location;
  this.minCust = minCustomer;
  this.maxCust = maxCustomer;
  this.avgCookies = avgCookies;
  this.hourlyCustomer = [];
  this.hourlyCookies = [];
  this.totalSales = 0;
  this.calculateCustomerPerHour();
  this.arrayObject();
  hourlyCookies.push(this.hourlyCookies);
}

// Counting the total cookies sold for open hours for each store //
Stores.prototype.totCookies = function(){
  var totCookiesSold = function(total, num){
    return total + num;
  }
  this.totalSales = this.hourlyCookies.reduce(totCookiesSold);
}

// counting the total hourly customers //
Stores.prototype.calculateCustomerPerHour = function(){
  for(var i = 0; i < hours.length; i++){
    this.hourlyCustomer.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
  }
}

// counting the hourly cookies sold //
Stores.prototype.arrayObject = function(){
  for(var i = 0; i < hours.length; i++){
    var cookiesPerHour = Math.round(this.avgCookies * this.hourlyCustomer[i]);
    this.hourlyCookies.push(cookiesPerHour);
  }
}

// Data for the store rows //
Stores.prototype.dataRow = function(){
  this.totCookies();
  var trElement = document.createElement('tr');
  var thElement = document.createElement('th');
  thElement.textContent = this.location;
  trElement.appendChild(thElement);

  // Placing data into table //
  var tdElement = document.createElement('td');
  for(var i = 0; i < this.hourlyCookies.length; i++){
    tdElement = document.createElement('td');
    tdElement.textContent = this.hourlyCookies[i];
    trElement.appendChild(tdElement);
    tableElement.appendChild(trElement);
  }

  // Adding cookie data sold by every store //
  tdElement = document.createElement('td');
  tdElement.textContent = this.totalSales;
  trElement.appendChild(tdElement);
  tableElement.appendChild(trElement);
}

// Built new stores // Stores are capitalized due to constructor parameters mentioned at the start //
var store = [];
store.push(new Stores('Seattle', 23, 65, 6.3));
store.push(new Stores('Tokyo', 3, 24, 1.2));
store.push(new Stores('Dubai', 11, 38, 3.7));
store.push(new Stores('Paris', 20, 38, 2.3));
store.push(new Stores('Lima', 2, 16, 4.6));

// Table header //
function headerRow(){

  var trElement = document.createElement('tr');
  var thElement = document.createElement('th');
  thElement.textContent = 'Cities';
  trElement.appendChild(thElement);

  for(var i = 0; i < hours.length; i++){
    thElement = document.createElement('th');
    thElement.textContent = hours[i];
    trElement.appendChild(thElement);
  }
  tableElement.appendChild(trElement);

  thElement = document.createElement('th');
  thElement.textContent = 'Total';
  trElement.appendChild(thElement);
  tableElement.appendChild(trElement);
}
headerRow();

// Produces a table for the stores in proper order //
Stores.prototype.inputData = function(){
  this.totalSales = 0;
  this.hourlyCookies = [];
  this.calculateCustomerPerHour();
  this.arrayObject();
  this.dataRow();
}

// Table footer //
var hourTotals = function(){

  var footerTr = document.createElement('tr');
  var totalName = document.createElement('th');

  totalName.textContent = 'Hourly Totals';
  footerTr.appendChild(totalName);

  // The hourly total of all sales //
  for(var i = 0; i < hours.length; i++){
    var hourlyTotal = 0;
    for(var j = 0; j < store.length; j++){
      hourlyTotal += store[j].hourlyCookies[i];
    }
    var footerTd = document.createElement('td');
    footerTd.textContent = hourlyTotal;
    footerTr.appendChild(footerTd);
  }

  // The final total of cookies sold each hour, for each store //
  var grandTotal = 0;
  for(var k = 0; k < store.length; k++){
    grandTotal += store[k].totalSales;
  }

  var footerTotals = document.createElement('td');
  footerTotals.textContent = grandTotal + ' Grand Total';
  footerTr.appendChild(footerTotals);
  tableElement.appendChild(footerTr);
}


var renderCookieTable = function(){
  for(var i = 0; i < store.length; i++){
    store[i].dataRow();
  }

  console.log(store);
  hourTotals();
}
renderCookieTable();
