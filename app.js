'use strict';

var numberOfRandomItems = 3
var maxlistProductsToDisplay, maxNumSelections;
var allProductList=[];  
var listProductsToDisplay=[]; 

function busMallProduct(name, imagePath) {
  this.name = name;
  this.image = imagePath;
  this.timesClicked = 0;
  this.timesRendered = 0;
  allBusMallProduct.push(this);
}

//Hard Coded BusMall Products to be cycled through

new busMallProduct('R2D2 Bag', 'img/bag.jpg');
new busMallProduct('Shark Blanket', 'img/shark.jpg');
new busMallProduct('Banana Slicer', 'img/banana.jpg');
new busMallProduct('iPad Toilet Paper Holder', 'img/bathroom.jpg');
new busMallProduct('Rain Boots', 'img/boots.jpg');
new busMallProduct('Breakfast Machine', 'img/breakfast.jpg');
new busMallProduct('MeatBall Gum', 'img/bubblegum.jpg');
new busMallProduct('Chair', 'img/chair.jpg');
new busMallProduct('Cthulhu', 'img/cthulhu.jpg');
new busMallProduct('Dog Duck', 'img/dog-duck.jpg');
new busMallProduct('Dragon', 'img/dragon.jpg');
new busMallProduct('Pen', 'img/pen.jpg');
new busMallProduct('Scissors', 'img/scissors.jpg');
new busMallProduct('Sweep', 'img/sweep.png');
new busMallProduct('TaunTaun', 'img/tauntaun.jpg');
new busMallProduct('Unicorn', 'img/unicorn.jpg');
new busMallProduct('USB', 'img/usb.gif');
new busMallProduct('Water Can', 'img/water-can.jpg');
new busMallProduct('Wine Glass', 'img/wine-glass.jpg');

function randomProductToDisplay()
{

  return(Math.floor(Math.random() * busMallProduct.length));
}

function generatelistProductsToDisplay()
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
  } 
}

function Product(productName, productPath){
  this.productName = productName;
  this.productPath = productPath;
  this.timesClicked = 0; 
  this.timesRendered = 0; 
  allProductList.push(this); 

}


