const repeatString = function(text, times) {
    let outPut = "";

    for(let i = 1; i <= times; i++){
        outPut += text;
    }

    return outPut;

};

// Do not edit below this line
module.exports = repeatString;
