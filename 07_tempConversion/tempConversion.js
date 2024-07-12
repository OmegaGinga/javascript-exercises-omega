const convertToCelsius = function(celsius) {
  let conversion = (celsius -32) / 1.8;  
  let rounded = round(conversion,1);
  return rounded;
};

const convertToFahrenheit = function(fahrenheit) {
  

  let conversion = (fahrenheit * 1.8) +32;
  let rounded = round(conversion,1);
  return rounded;
};

function round(value, presicion){
  let multiplier = Math.pow(10, presicion || 0);
  return Math.round(value * multiplier) / multiplier;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
