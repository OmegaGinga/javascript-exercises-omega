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

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
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
