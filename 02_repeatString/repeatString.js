const repeatString = function(text, times) {
    let outPut = "";

    if(times < 0){
        return "ERROR";
    }
    for(let i = 1; i <= times; i++){
        outPut += text;
    }

    return outPut;

};

// Do not edit below this line
module.exports = repeatString;
