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
  