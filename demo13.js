var x1 = 'hello world'
var x2 = 500
var x3 = 3.14
var x4 = [3, 5, 7, null, undefined,9]
var x5 = { name: "NoJS", duration: "14hr" }
var y1 = JSON.stringify(x1)
console.log(typeof y1, y1)
var y2 = JSON.stringify(x2)
console.log(typeof y2, y2)
var y3 = JSON.stringify(x3)
console.log(typeof y3, y3)
var y4 = JSON.stringify(x4)
console.log(typeof y4, y4)
var y5 = JSON.stringify(x5)
console.log(typeof y5, y5)
var z1 = JSON.parse(y1)
console.log(typeof z1, z1)
var z2 = JSON.parse(y2)
console.log(typeof z2, z2)
var z3 = JSON.parse(y3)
console.log(typeof z3, z3)
var z4 = JSON.parse(y4)
console.log(typeof z4, z4)
var z5 = JSON.parse(y5)
console.log(typeof z5, z5)