function Car() {}

Car.prototype.speed = 0
Car.prototype.number = ""
Car.prototype.fuel = 0
Car.prototype.setSpeed = function (speed) { Car.prototype.speed = speed }
Car.prototype.isOverSpeed = function (speedLimit) {
    return Car.prototype.speed > speedLimit
}
function HybridCar() {}

HybridCar.prototype = new Car()
HybridCar.prototype._proto_ = Car.prototype
HybridCar.prototype.batteyLimit = 50000
HybridCar.prototype.totalEnergy = function() {
    return this.fuel * 21 + this.batteryLimit / 500
} 

function driveCar() {

}
console.log(typeof Car, typeof driveCar)

var myCar1 = new HybridCar()
console.log(typeof myCar1)
myCar1.setSpeed(60)
myCar1.number = "abc-1234"
console.log("my car:", myCar1.number, " has speed=", myCar1.speed)
myCar1.fuel = 40
console.log("total power for KM:" + myCar1.totalEnergy())
console.log(myCar1.isOverSpeed(100), myCar1.isOverSpeed(60), myCar1.isOverSpeed(50))
console.log("my car:", myCar1.number, " has speed=", myCar1.speed)
console.log(myCar1.isOverSpeed(100), myCar1.isOverSpeed(60), myCar1.isOverSpeed(50))