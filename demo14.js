var array1 = new Array()
var array2 = [3, 4, 5, 6, 7]
console.log(typeof array1, typeof array2)
console.log(array1, array2)
console.log(array2[0], array2[4])
console.log(array1[0], array2[5])
array1.push('A')
array2.push(8)
array1.push('B')
array2.push(9)
console.log(array1, array2)
console.log(array1.pop(), array1)
console.log(array2.pop(), array2)
delete array2[0]
console.log(array2)
delete array2[0]
console.log(array2)
console.log(array2.length)
console.log("array1", array1)
array1[5]='X'
console.log(array1)
var jsonArray1 = JSON.stringify(array1);
console.log(typeof jsonArray1, jsonArray1)