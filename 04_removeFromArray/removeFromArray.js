const removeFromArray = function(array, value, value2, value3, value4) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] === value || array[i] === value2 || array[i] === value3 || array[i] === value4) {
            array.splice(i, 1);
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
