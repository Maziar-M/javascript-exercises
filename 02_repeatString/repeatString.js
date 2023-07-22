const repeatString = function(originalString, repeatTimes) {
    if (repeatTimes < 0) {
        return "ERROR";
    }
    
    let repeatedString = "";
    for (let i = 0; i < repeatTimes; i++) {
        repeatedString += originalString;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
