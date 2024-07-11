const reverseString = function(sentence) {

    let splittedString = sentence.split(" ");
    let reversedString = [];

    splittedString.reverse();
    for(word of splittedString){
        reversedString.push(word.split("").reverse().join(""));
    }

    let joinedWord = reversedString.join(" ");
    return joinedWord;

};
// Do not edit below this line
module.exports = reverseString;
