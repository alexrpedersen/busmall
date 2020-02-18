'use strict';

var numberOfRandomItems = 3
var maxlistProductsToDisplay, maxNumSelections;
var allProductList=[];  
var listProductsToDisplay=[]; 
var allBusMallProduct=[];

function busMallProduct(name, imagePath) {
  this.name = name;
  this.image = imagePath;
  allBusMallProduct.push(this);
}

//Hard Coded BusMall Products to be cycled through

var bag = new busMallProduct('R2D2 Bag', 'img/bag.jpg');
var shark = new busMallProduct('Shark Blanket', 'img/shark.jpg');
var banana = new busMallProduct('Banana Slicer', 'img/banana.jpg');
var toilet = new busMallProduct('iPad Toilet Paper Holder', 'img/bathroom.jpg');
var boots = new busMallProduct('Rain Boots', 'img/boots.jpg');
var breakfast = new busMallProduct('Breakfast Machine', 'img/breakfast.jpg');
var gum = new busMallProduct('MeatBall Gum', 'img/bubblegum.jpg');
var chair = new busMallProduct('Chair', 'img/chair.jpg');
var cthulhu = new busMallProduct('Cthulhu', 'img/cthulhu.jpg');
var duck = new busMallProduct('Dog Duck', 'img/dog-duck.jpg');
var dragon = new busMallProduct('Dragon', 'img/dragon.jpg');
var pen = new busMallProduct('Pen', 'img/pen.jpg');
var scissors = new busMallProduct('Scissors', 'img/scissors.jpg');
var sweep = new busMallProduct('Sweep', 'img/sweep.png');
var tauntaun = new busMallProduct('TaunTaun', 'img/tauntaun.jpg');
var unicorn = new busMallProduct('Unicorn', 'img/unicorn.jpg');
var usb = new busMallProduct('USB', 'img/usb.gif');
var watercan = new busMallProduct('Water Can', 'img/water-can.jpg');
var wineglass = new busMallProduct('Wine Glass', 'img/wine-glass.jpg');

function randomProductToDisplay()
{

  return(Math.floor(Math.random() * busMallProduct.length));
}

function listProductsToDisplay()
{
  var randomIndex;
  var duplicated;
 
  while (listProductsToDisplay.length < maxlistProductsToDisplay)
  {
   
    randomIndex = randomProductToDisplay();
    duplicated = false;
    
    for (var i=0; i < listProductsToDisplay.length; i++)
    {
      if (listProductsToDisplay[i] === randomIndex)
      {
        duplicated = true;
      }
    } 
    if (!duplicated){
      listProductsToDisplay.push(randomIndex); 
      allProductList[randomIndex].timesRendered++; 
    }
  }return(randomIndex); 
}

function productsToChooseFrom(productName, productPath){
  this.productName = productName;
  this.productPath = productPath;
  this.timesClicked = 0; 
  this.timesRendered = 0; 
  allProductList.push(this); 
}

 new productsToChooseFrom();
 new productsToChooseFrom();
 new productsToChooseFrom();

console.log(listProductsToDisplay);


