const add = function(n1,n2) {
  return n1+n2;
	
};

const subtract = function(n1,n2) {

  return n1-n2;
	
};

const sum = function(array) {

if(array.length === 0){
  return 0;
}else{
  return array.reduce((total, item)=>{
    return total + item;
  }, 0)
};
	
};

const multiply = function(array) {
  if(array.length === 0){
    return 0;
  }else{
    return array.reduce((total, item)=>{
      return total*item;
    })
  }
};

// Pow is multiply 
const power = function(n1,n2) {
  let total = 1;
  let base = n1;
  // 4* 4 * 4
  for(let i = 0; i<n2;i++){
    total *= base;
  }
  return total;
	
};

const factorial = function(n) {
  if(n === 0){
    return 1;
  }
  let total = 1;
  for(let i = n; i > 0; i--){
    total *= i;
  }  
  return total;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
