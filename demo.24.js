function oops() {
    throw new Error("oops something happen")
}

console.log("start program")

try {
    oops()
} catch(e) {
    console.log("oops generate error...")
}

console.log("start without try/catch")
oops()
console.log("end program")
console.log("my car:", myCar1.number, " has speed=", myCar1.speed)
console.log(myCar1.isOverSpeed(100), myCar1.isOverSpeed(60), myCar1.isOverSpeed(50))