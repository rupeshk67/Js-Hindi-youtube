const accountId=144553
let accountEmail="rupesh@google.com"
/*
Prefer NOT to use "var"
because of issue in block scope and functional scope
*/
var accountPassword="123@google"
accountCity ="Katihar"
let accountState;
//accountId=2
console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
