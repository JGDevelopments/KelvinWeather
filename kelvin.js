// This is the numerical value that illustrates the variable of Kelvin (temperature)
const kelvin = 293;
// This is the equation that can be used to get celcius from the numerical value of the variable Kelvin 
const celsius = kelvin - 273 ;
// This is the equation that describes the numerical value of fahrenheit using the celcius variable 
let fahrenheit = celsius * 9/5 + 32 ;
//This describes how we use the .floor () method to round down the number produces in the fahrenheit variable equation 
fahrenheit = Math.floor(fahrenheit) ;
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

const kelvinn = 303; 
const celciuss = kelvinn -273;
let fahrenheitt = celciuss * 9/5 + 32 ; 
fahrenheit = Math.floor(fahrenheitt)
console.log(`The temperature is ${fahrenheitt} degrees Fahrenheit.`)
