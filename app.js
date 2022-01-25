'use strict';

function Drink(name,ingredients,isCold,isHot,imgUrl){
  this.name = name;
  this.ingredients = ingredients;
  this.imagePath =imgUrl;
  this.isCold = isCold;
  this.isHot = isHot;
  this.price = 0;
  
}




Drink.prototype.render = function(){
    document.write(`<p>${this.name} is added to the menu</p>`)//js interpolation
}

const espresso = new Drink('espresso',['espresso'],false,true,'./images/espresso.PNG');
const latte = new Drink('latte',['espresso','milk','whipped milk'],true,true,'./images/latte.PNG');
const mocha = new Drink('mocha',['espresso milk', 'whipped cream','chocolate syrub'],true,true,'./images/mocha.PNG');



espresso.render();
latte.render();
mocha.render();