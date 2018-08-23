// While loop 
var number = 1;
while (number <= 120) {
	console.log(number);
	number += 1;
// if the number is divisible by 4 and 10, write "FizzBuzz"
if ((number % 4 && number % 10) === 0) {
	console.log(" FizzBuzz");
} 
 // if the number is divisible by 4, write "Fizz"
if ((number % 4) === 0) {
	console.log( " Fizz");
} 
// if the number is divisible by 10, write "buzz"
if ((number % 10) === 0){
	console.log( " Buzz");
}
}


// For Loop 
for (num=1; num<=120; num++) { 
 // if the number is divisible by 4 and 10, write "FizzBuzz"
  if ( num % 4 === 0 && num % 10 === 0) { 
    console.log("FizzBuzz"); }
  // if the number is divisible by 4, write "Fizz"
  else if ( num % 4 === 0) {
    console.log("Fizz"); }
    // if the number is divisible by 10, write "buzz"
  else if ( num % 10 === 0) {
      console.log("Buzz"); }
      // otherwise, write just the number
  else {
    console.log(num);
  }
}