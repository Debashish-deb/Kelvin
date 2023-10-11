//creating a variable and setting value//
const kelvin = 0;
//converting variable value from kelvin to celcius//
const celcius=kelvin-273;
//converting variable value from celcius to fahrenheit//
let fahrenheit = celcius*(9/5)+32;
//Round down fahrenheit value//
fahrenheit = Math.floor(fahrenheit);
console.log('The temperature is '+fahrenheit+' degree Fahrenheit.')
console.log(kelvin+ ' Kelvin is about '+fahrenheit+' degrees Fahrenheit.')
//set the variable newton and assign its value//
let newton = celcius*(33/100);
//Round down//
newton = Math.floor(newton);
console.log('The temperature is about '+newton+' degrees Newton.')