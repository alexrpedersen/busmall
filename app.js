'use strict';

var firstImage = document.getElementById('first-image');
var renderedImage1 = null;
var busIndex1 = null;
var secondImage = document.getElementById('second-image');
var renderedImage2 = null;
var busIndex2 = null;
var allBusImages = [];
var totalClicks = 0;

function BusImage(name, imagePath) {
  this.name = name;
  this.image = imagePath;
  this.timesClicked = 0;
  this.timesRendered = 0;
  allBusImages.push(this);
}

new BusImage('R2D2 Bag', 'img/bag.jpg');
new BusImage('Shark Blanket', 'img/shark.jpg');
new BusImage('Banana Slicer', 'img/banana.jpg');
new BusImage('iPad Toilet Paper Holder', 'img/bathroom.jpg');
new BusImage('');
new BusImage();
new BusImage();


function renderImages() {
  firstImage.setAttribute('src', allBusImages.image);
  firstImage.setAttribute('alt', allBusImages.name);
}

renderImages();

function getRandomBusImage() {
  var randomIndex = Math.floor(Math.random() * allBusImages.length);
}
return randomIndex;
