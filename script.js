
function Car(model,make){
    this.model=model
    this.make=make

}
Car.prototype.getMakeModel=function(){
        return `${this.model} ${this.make}`
    }
function Sportscar(model,make,topspeed){
    Car.call(this,model,make)
    this.topspeed=topspeed
}
Sportscar.prototype=Object.create(Car.prototype)
Sportscar.prototype.constructor=Sportscar
Sportscar.prototype.gettopspeed=function(){
    return this.topspeed
}

let car=new Sportscar("bmw","24/26","240")
console.log(car.getMakeModel

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
