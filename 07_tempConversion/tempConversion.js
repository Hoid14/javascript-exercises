const convertToCelsius = function(f) {
  let result
  result=(f-32)/1.8
  result=result.toFixed(1)
  result=Number(result)
  return result
};

const convertToFahrenheit = function(c) {
  let result
  result=(c*1.8)+32
  result=result.toFixed(1)
  result=Number(result)
  return result
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
