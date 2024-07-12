const sumAll = function(number1, number2) {

    let result = 0;

    if (number1 < 0 || number2 < 0 || isString(number1) || isString(number2)){
        return "ERROR";

    }
    if (number1 < number2){

        for(let i = number1; i <= number2; i++){
            result += i;    
        }    
    }else if(number1 > number2){

        for(let i = number2; i <= number1; i++){
            result += i;    
        }    
    };

    return result;

};

function isString(value){
    return typeof value === 'string';
}

console.log(sumAll(1,12));
// Do not edit below this line
module.exports = sumAll;
