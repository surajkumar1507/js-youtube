const accountId = 9001
let accountEmail = "surajyadav@gmail.com"
var accountPassword = "123456"
accountCity = "Mumbai"
// we didnt use var for its scope related issues.
accountEmail = "sy@gmail.com"
accountPassword = "654321"
accountCity = "Noida"
let accountState;
console.log(accountId);
console.table([accountEmail, accountId, accountCity,accountPassword, accountState]);