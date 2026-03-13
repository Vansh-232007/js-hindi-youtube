let score = "33abc"

console.log(typeof score)

let valueInNumber = Number(score)

console.log(typeof valueInNumber)

console.log(valueInNumber)      //NaN => NOT A NUMBER


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

// null => 0
//undefined => NaN

let isLoggedIn = "vansh"
let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanisLoggedIn)
console.log(booleanisLoggedIn)


// 1 => true
// 0 => false
// "" => false
// "vansh" => true