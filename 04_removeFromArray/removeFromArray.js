const removeFromArray = function(array, valueToRemove) {
    array.splice(array.indexOf(valueToRemove), 1);

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
