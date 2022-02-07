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

///////
