var x1 = "Foo, foo".replace(/[Ff]/g, "q")
console.log(x1)
var x2 ="Foo, foo".replace(/f/ig, "q")
console.log(x2)
var reqex1 = new RegExp("[Ff]", 'g')
var x3 = "Foo, foo, Ffoo, fFoo".replace(reqex1, 'q')
console.log(x3)