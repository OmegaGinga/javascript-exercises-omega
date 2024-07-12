const sumAll = function(number1, number2) {

    let result = 0;

    if (number1 < number2){

        for(let i = number1; i <= number2; i++){
            result += i;    
        }    
    }else if(number1 > number2){

        for(let i = number2; i <= number1; i++){
            result += i;    
        }    
    }

    return result;

};

console.log(sumAll(123,1));
// Do not edit below this line
module.exports = sumAll;
