const name = "Rupesh";
const repoCount = 50;

//console.log(name + repoCount + "value"); //outdated

// ====string interpolation====
console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`); //latest approach for concating strings
// example of string interpolation ==> ${name.toUpperCase()}

// ===other way to define String===
const gameName = new String("RupeshRoy")
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('p'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   ritesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://ritesh.com/ritesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));