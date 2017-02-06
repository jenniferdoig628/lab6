function tempConvert(temp, unit) {

var whichUnit = unit;

if(whichUnit == "f")  {

//Uses standard equation to convert from fahrenheit to celsius.
  var fToCelsius = (temp - 32) * 5 / 9;

//Rounds the result to a whole number
  var roundNum = Math.round(fToCelsius);

//Concatenates strings and prints result to the console for user
  var message = temp+' degrees farenheit is ' + roundNum + ' degrees celsius';
    console.log(message);
} else if (whichUnit == "c") {

  //uses standard equation to convert value
  var celsiusToF = (temp * 9)/5 + 32;

  // rounds to the nearest whole number
  var roundNum = Math.round(celsiusToF);

  //concatenates strings and prints to console for user
  var message = temp +' degrees celsius is ' + roundNum + ' degrees fahrenheit';
    console.log(message);

} else {
  console.log("Not a valid type.")
};
}
