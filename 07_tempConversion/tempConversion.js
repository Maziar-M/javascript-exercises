const convertToCelsius = function(degreeF) {
  let degreeC = (degreeF - 32) * (5 / 9);
  degreeC = Math.round(degreeC * 10) / 10;
  return degreeC;
};

const convertToFahrenheit = function(degreeC) {
  let degreeF = (degreeC * 9 / 5) + 32;
  degreeF = Math.round(degreeF * 10) / 10;
  return degreeF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
