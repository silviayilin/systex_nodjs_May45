function Car() {
    this.speed = 0
    this.number = ""
    this.fuel = 0
    this.setSpeed = function (speed) { this.speed = speed }
    this.isOverSpeed = function (speedLimit) {
        return this.speed > speedLimit
    }
}