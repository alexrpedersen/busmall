'use strict';

var resDisplay = true;
var totalClicks = 0;
var reverse = 0;
var imgArr = [];
var imgCache = imgArr.slice(0);
var id = [];
var clicks = [];
var shown = [];

var imgContainer = document.getElementById('container');
imgContainer.addEventListener('click', handleImageClick);

function busMallProduct(id, src, shown, clicked) {
    this.name = name;
    this.src = src;
    this.id = id;
    this.shown = shown;
    this.clicked = clicked;
    imgArr.push(this);
}

function randomImgs(numImgs) {
    var images = [];
    var random;
    for (var i = 0; i < numImgs; i++) {

        if (imgCache.length <= 12) {
            if (reverse === 2) {
                imgCache = imgArr.slice(0).reverse();
            } else {
                imgCache = imgArr.slice(0);
                reverse++;
            }
        }
        if (imgCache.length > 12) {
            var index = Math.floor(Math.random() * imgCache.length);
            random = imgCache[index];
            images.push(imgCache[index]);
            imgCache.splice(index, 1);
        };
        for (var j = 0; j < imgArr.length - 1; j++) {
            if (random.id === imgArr[j].id) {
                imgArr[j].shown++;
                break;
            }
        };
    };
    return images;
}

function render(images) {
    var imageContainer = document.getElementById('container');
    for (var i = 0; i < images.length; i++) {
        var li = document.createElement('li');
        li.innerHTML = '<img src="' + images[i].src + '" ' + 'id="' + images[i].id + '">';
        imageContainer.appendChild(li);
    }
}

function results() {
    var resultContainer = document.getElementById('results');
    for (var i = 0; i < imgArr.length; i++) {
        var li = document.createElement('li');
        li.innerHTML = 'Product ' + imgArr[i].id + ' was clicked ' + imgArr[i].clicked + ' times and shown ' + imgArr[i].shown + ' times.';
        resultContainer.appendChild(li);
    }
}

function handleImageClick(event) {
    event.preventDefault;
    var imgClicked = event.target.id;
    if (imgClicked === 'container') {
        alert('That isnt an image. Please try again.');
    } else if (imgClicked && totalClicks < 24) {
        for (var i = 0; i < imgArr.length; i++) {
            if (imgClicked === imgArr[i].id) {
                imgArr[i].clicked++;
            }
        }
        totalClicks++;
        imgContainer.innerHTML = '';
        render(randomImgs(3));
    } else if (resDisplay === true) {
        createChart();
        resDisplay = false;
    }
}

function loadImages() {
    new busMallProduct('bag', 'img/bag.jpg', 0, 0);
    new busMallProduct('banana', 'img/banana.jpg', 0, 0);
    new busMallProduct('bathroom', 'img/bathroom.jpg', 0, 0);
    new busMallProduct('boots', 'img/boots.jpg', 0, 0);
    new busMallProduct('breakfast', 'img/breakfast.jpg', 0, 0);
    new busMallProduct('bubblegum', 'img/bubblegum.jpg', 0, 0);
    new busMallProduct('chair', 'img/chair.jpg', 0, 0);
    new busMallProduct('cthulhu', 'img/cthulhu.jpg', 0, 0);
    new busMallProduct('dog-duck', 'img/dog-duck.jpg', 0, 0);
    new busMallProduct('dragon', 'img/dragon.jpg', 0, 0);
    new busMallProduct('pen', 'img/pen.jpg', 0, 0);
    new busMallProduct('pet-sweep', 'img/pet-sweep.jpg', 0, 0);
    new busMallProduct('scissors', 'img/scissors.jpg', 0, 0);
    new busMallProduct('shark', 'img/shark.jpg', 0, 0);
    new busMallProduct('sweep', 'img/sweep.png', 0, 0);
    new busMallProduct('tauntaun', 'img/tauntaun.jpg', 0, 0);
    new busMallProduct('unicorn', 'img/unicorn.jpg', 0, 0);
    new busMallProduct('usb', 'img/usb.gif', 0, 0);
    new busMallProduct('water-can', 'img/water-can.jpg', 0, 0);
    new busMallProduct('wine-glass', 'img/wine-glass.jpg', 0, 0);
}

function populateChartArr() {
    for (var i = 0; i < imgArr.length; i++) {
        id.push(imgArr[i].id);
        clicks.push(imgArr[i].clicked);
        shown.push(imgArr[i].shown);
        console.log('id', id);
        console.log('clicks', clicks);
        console.log('shown', shown);
    }
}

function createChart() {
  populateChartArr();
  Chart.defaults.global.defaultFontColor = '#FFF';
  var context = document.getElementById('results_chart').getContext('2d');
  var chart = new Chart(context, dataObj);
}

function storageSupport() {
  try {
      return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
      return false;
  }
}

if (storageSupport()) {
  var idFLS = localStorage.getItem(id);
  var clicksFLS = localStorage.getItem(clicks);
  var shownFLS = localStorage.getItem(shown);
  var imgsFLS = localStorage.getItem('imgs');
  
  var idJSON = JSON.parse(idFLS);
  var clicksJSON = JSON.parse(clicksFLS);
  var shownJSON = JSON.parse(shownFLS);
  var imgsJSON = JSON.parse(imgsFLS);
  console.log(idJSON);
} else {

 
  var imgsLS = JSON.stringify(imgArr);
  localStorage.setItem('imgs', imgsLS);
  var imgsFLS = localStorage.getItem('imgs');
  var imgsJSON = JSON.parse(imgsFLS);
}

loadImages();
render(randomImgs(3));

var idLS = JSON.stringify(id);
var clicksLS = JSON.stringify(clicks);
var shownLS = JSON.stringify(shown);

localStorage.setItem('id', idLS);
localStorage.setItem('clicks', clicksLS);
localStorage.setItem('shown', shownLS);

var idFLS = localStorage.getItem(id);
var clicksFLS = localStorage.getItem(clicks);
var shownFLS = localStorage.getItem(shown);

var idJSON = JSON.parse(idFLS);
var clicksJSON = JSON.parse(clicksFLS);
var shownJSON = JSON.parse(shownFLS);



