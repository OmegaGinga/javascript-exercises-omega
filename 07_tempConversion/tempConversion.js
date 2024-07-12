const convertToCelsius = function(celcius) {
  let conversion = celcius - 32;
  return conversion;
};

const convertToFahrenheit = function(fahrenheit) {
  let conversion = fahrenheit + 32;
  return conversion;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
