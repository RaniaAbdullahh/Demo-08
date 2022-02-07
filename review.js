'use strict';
//arrow functions 
const squer = function(num){
    return num*num
  }
  
  const squere = (num)=>num*num;
  
  //ex :
  let resturants = [
    {id:1, isOpen : true},
    {id:2, isOpen : true},
    {id:3, isOpen : false},
  
  ]
  // i want to get only the open resturents :
  const openRest= resturants.filter(rest =>{
    return rest.isOpen
  })
  console.log(openRest)
  
  ///array methods 
  //1. reduce : reduce all elements in array to a single value 
// reduce method takes 2 params, callback func, initial value for accumulator
const numbers=[1,-3,2,3]

let sum = numbers.reduce((accumulator,currentValue) =>{
  return accumulator + currentValue;

},0);
console.log(sum)//3
// if you didnt give accumulator an initialvalue it will be set to the firt element in the array 

/////// loops 
for (let step = 0; step < 5; step++) {
    // Runs 5 times, with values of step 0 through 4.
    console.log('Walking east one step');
  }

//////event handling 

const btn = document.querySelector('button');

function greet(event){
  // print the event object to console
  console.log('greet:', arguments)
}

btn.onclick = greet;
///event listener 

const btn = document.querySelector('button');

function greet(event){
  // print the event object to console
  console.log('greet:', arguments)
}

btn.addEventListener('click', greet);



///DOM manipulation
// When writing web pages and apps, one of the most common things you'll want to do is manipulate the document structure in some way. This is usually done by using the Document Object Model (DOM), a set of APIs for controlling HTML and styling information that makes heavy use of the Document object. In this article we'll look at how to use the DOM in detail, along with some other interesting APIs that can alter your environment in interesting ways.



 sect.removeChild(linkPara);
 sect.appendChild(linkPara)

 //array methods 
 fruits.forEach(function(item, index, array) {
    console.log(item, index)
  })
  // Apple 0
  // Banana 1

  let last = fruits.pop() // remove Orange (from the end)
// ["Apple", "Banana"]

let first = fruits.shift() // remove Apple from the front
// ["Banana"]

let newLength = fruits.unshift('Strawberry') // add to the front
// ["Strawberry", "Banana"]

let shallowCopySlice = fruits.slice()
// ["Strawberry", "Mango"]

let shallowCopyFrom = Array.from(fruits)
// ["Strawberry", "Mango"]

let deepCopy = JSON.parse(JSON.stringify(fruits));
// ["Strawberry", "Mango"]

