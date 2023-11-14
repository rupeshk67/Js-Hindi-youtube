// let value = 3;
// let negValue = -value;
// console.log(negValue);
// console.log(typeof negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

// let str1 = "Hello";
// let str2 = " Rupesh";
// let str3 = str1+str2;
// console.log(str3);

// console.log("1"+2);
// console.log(1+"2");
// console.log("1"+2+2);
// console.log(1+2+"2");

// console.log(true);
// console.log(+true);
// console.log(+"");

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);


//========Comparison========
// console.log("2">1); //true
// console.log("02">1); //true

// console.log(null > 0); //false
// console.log(null == 0); //false
// console.log(null >= 0); //true
/*
An Equality check (==) and comparisons(<,>,>=.<=,!=) works differently
Comparisons convert "Null" to a number , treating it as 0.
That's why case-3 ==> console.log(null >= 0); is 'true' and 
case-1 ==>console.log(null > 0); is 'false'
*/

// ====Strictly check====
// ===
console.log("2"===2);