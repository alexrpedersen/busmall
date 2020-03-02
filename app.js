'use strict';

var ctx = document.getElementById('voteChart').getContext('2d');
var totalVotes = 0;
var listOfProducts = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var listOfProductObjects = [];
var container = document.getElementById('image-container')
//create event listener when clicking on images
container.addEventListener('click', onClick);

function Product(name, path) {
  this.name = name; //name of product/image
  this.path = path; //relative path to jpg
  this.votes = 0; //clicks for this product
  this.views = 0; //number of times image has been shown
  listOfProductObjects.push(this);
};

(function() {
  for (var i = 0; i < listOfProducts.length; i++) {
    new Product(listOfProducts[i], './assets/' + listOfProducts[i] + '.jpg');
  }
  if (typeof(localStorage.getItem('stringifiedProducts')) === 'string') {
    var stringifiedProducts = localStorage.getItem('stringifiedProducts');
    var parsedProducts = JSON.parse(stringifiedProducts);
    for (var i = 0; i < parsedProducts.length; i++) {
      listOfProductObjects[i].votes = parsedProducts[i].votes;
      listOfProductObjects[i].views = parsedProducts[i].views;
    };
  }
  // voteChart.update();
})();

var first = document.getElementById('first');
var img0 = document.createElement('img');
first.appendChild(img0);

var second = document.getElementById('second');
var img1 = document.createElement('img');
second.appendChild(img1);

var third = document.getElementById('third');
var img2 = document.createElement('img');
third.appendChild(img2);

function populate() {

  var rand = [];
  while (rand.length < 3) {
    var randNum = (Math.ceil(Math.random() * listOfProducts.length)) - 1;
    if (rand.indexOf(randNum) === -1) {
      rand.push(randNum);
    }
    continue;
  }
  // console.log(rand)

  img0.src = listOfProductObjects[rand[0]].path;
  img0.id = listOfProductObjects[rand[0]].name;
  listOfProductObjects[rand[0]].views++;

  img1.src = listOfProductObjects[rand[1]].path
  img1.id = listOfProductObjects[rand[1]].name;
  listOfProductObjects[rand[1]].views++;

  img2.src = listOfProductObjects[rand[2]].path
  img2.id = listOfProductObjects[rand[2]].name;
  listOfProductObjects[rand[2]].views++;
}

var clicks = 0;
var buttonSection = document.getElementById('button');

function checkForClicks() {
  if (clicks === 15) {
    console.log(clicks);
    var button = document.createElement('button');
    button.id = 'show-results';
    button.textContent = 'Show Results'
    buttonSection.appendChild(button);
    //create event listener for clicking show-results button
    button.addEventListener('click', renderResults);
    container.removeEventListener('click', onClick);
  }
}

function onClick(click) {

  clicks+=1;
  console.log('clicks: ' + clicks)
  var productIndex = listOfProducts.indexOf(click.target.id);
  listOfProductObjects[productIndex].votes +=1;  //***use something similar to this for views up above
  // console.log('onClick', 'name: ' + click.target.id, ', productIndex: ' + productIndex, ', votes: ' + listOfProductObjects[productIndex].votes);
  var images = document.getElementsByTagName('img');
  if (clicks < 16) {
    populate();
  }
  checkForClicks()
}

function renderResults() {
  var aside = document.getElementById('aside-left');
  var results = document.getElementById('results');
  results.remove();
  var results = document.createElement('div');
  results.id = 'results';
  aside.appendChild(results);
  var resultsH2 = document.createElement('h2');
  resultsH2.textContent = 'Results:'
  results.appendChild(resultsH2);

  var ulEl = document.createElement('ul');
  results.appendChild(ulEl);

  for(var j = 0; j < listOfProductObjects.length; j++) {
    voteChart.data.datasets[0].data.pop();
  };

  for(var i in listOfProductObjects) {
    var liEl = document.createElement('li');
    liEl.textContent = listOfProductObjects[i].name + ': ' + listOfProductObjects[i].votes;
    voteChart.data.datasets[0].data.push(listOfProductObjects[i].votes);
    voteChart.update();
    ulEl.appendChild(liEl);
  };
  storeData();
};

//display three random images
populate();

var voteChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: listOfProducts, // loads array of list of products for which the product constructor above also relies
    datasets: [{
      label: '# of Votes',
      data: [], // Blank until updated by renderResults function above
      // data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], // Zeroed dataset for testing purposes
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

//push data to local storage
function storeData() {
 var stringifiedProducts = JSON.stringify(listOfProductObjects);
 localStorage.setItem('stringifiedProducts', stringifiedProducts);
 console.log(storeData);
};

for(var i in listOfProductObjects) {
  voteChart.data.datasets[0].data.push(listOfProductObjects[i].votes);
  voteChart.update();
};