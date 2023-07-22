const sumAll = function(startNum, endNum) {
    for (let arg of arguments) {
        if (typeof arg !== "number" || arg < 0) {
            return "ERROR";
        }
    }

    let range = Array.from(arguments);
    range.sort((num1, num2) => num1 - num2);

    let sum = 0;
    for (let num = range[0]; num <= range[1]; num++) {
        sum += num;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
