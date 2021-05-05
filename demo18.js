function echoMe(name) {
    console.log("echo:" + name)
}
echoMe("Mark")
echoMe()
echoMe('a', 'b')
echoMe(['a', 'b'])
function mySum() {
    var sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}
console.log(mySum())
console.log(mySum(1, 2, 3, 4, 5))
console.log(mySum('a', 'b', 'c'))
const a1 = [1, 2, 3, 4, 5]
console.log(typeof mySum(a1), mySum(a1))
// using apply
console.log("using apply", mySum.apply(null, a1))
console.log("using ...", mySum(...a1))
const a2 = { name: "Mark", age: 45 }
console.log(a2)
echoMe(a2)
function echoPerson(user) {
    console.log("echo name:", user.name, " ,age:", user.age)
}
echoPerson(a2)