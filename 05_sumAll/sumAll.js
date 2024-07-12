const sumAll = function(number1, number2) {

    let result = 0;

    for(let i = number1; i <= number2; i++){

        result += i;

    }    
    return result;

};

console.log(sumAll(1,4));
// Do not edit below this line
module.exports = sumAll;
