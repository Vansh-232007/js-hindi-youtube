const accountID = 144553
let accountEmail = "vansh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountID = 2 // not allowed

accountEmail = "vp@google.com"
accountPassword = "21212121"
accountCity = "delhi"


console.log(accountID); 

console.table([accountID,accountEmail,accountPassword,accountCity, accountState])


// prefer not to use var because of issue in block scope and functional scope.
