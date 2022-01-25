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

//DOM manipulation 
//1. methods
//document.getElementById
//document,getElementBYTagName
//document.getElementByClassName
// document.createElement

//2.properties 
//innerHTML

// let h1El = document.getElementById('h1');
// console.log(h1El);
// console.log(h1El.textContent);
// h1El.textContent+= 'LTUC ' ;
// h1El.style = 'color :blue';










// to create new Element :
//1. create the Element 
//2.append the new eement to its parent 
// 3. add the content for my new Element 
// let section = document.getElementById('drink');
// let pEl = document.createElement('p');
// section.appendChild(pEl);
// pEl.textContent = 'Hello Python Course'





