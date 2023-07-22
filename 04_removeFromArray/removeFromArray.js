const removeFromArray = function(originalArray, ...toBeRemoved) {
    for (let removableIndex = 0; removableIndex < toBeRemoved.length; removableIndex++) {
        for (let arrayIndex = 0; arrayIndex < originalArray.length; arrayIndex++) {
            if (toBeRemoved[removableIndex] === originalArray[arrayIndex]) {
                originalArray.splice(arrayIndex, 1);
            }
        }
    }
    return originalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
