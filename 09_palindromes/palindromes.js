const palindromes = function (word) {

    word = word.toLowerCase();        
    word = word.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g,'');
    word = word.replaceAll(' ','');
    let new_word = '';  
    for(let i = word.length-1; i>=0;i--){

        new_word+=word[i];
    }   

    if(new_word === word){
        return true;
    }else{
        return false;
    }

};


// Do not edit below this line
module.exports = palindromes;
