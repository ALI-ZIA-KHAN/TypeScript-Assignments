"use strict";
//1. Start by creating an abstract class called Vehicle that will serve as the base class
//for all types of vehicles in the rental system
class Vehicle {
    //3. Create a constructor in the Vehicle class that takes in these properties as
    //parameters and initializes them.
    constructor(mk, md, yr, rnt) {
        this._make = mk;
        this._model = md;
        this._year = yr;
        this._rented = rnt;
    }
    //    4. Define accessor methods (getters) for the make, model, year, and rented instance
    //    variables in the Vehicle class.
    get make() {
        return this._make;
    }
    get model() {
        return this._model;
    }
    get year() {
        return this._year;
    }
    get rented() {
        return this._rented;
    }
    //    5. Define a mutator method (setter) for the rented instance variable in the Vehicle
    //    class.
    set rented(r) {
        this._rented = r;
    }
    // 7. Define two methods in the Vehicle class: rent() and return(). The rent() method
    // should check if the vehicle is already rented and provide a message to the user
    // accordingly. If the vehicle is available, it should set the rented instance variable to
    // true. The return() method should check if the vehicle has been rented and provide
    // a message to the user accordingly. If the vehicle has been rented, it should set
    // the rented instance variable to false.
    rent() {
        if (this._rented) {
            return "Vehicle is already rented";
        }
        this._rented = true;
        return "Vehicle is now rented to you";
    }
    return() {
        if (this._rented) {
            this._rented = false;
            return ("Vehicle is now returned by you");
        }
        return "Vehicle is not already rented";
    }
}
// 8. Create subclasses of Vehicle for each type of vehicle in the rental system (e.g.
//     Car, Truck, Motorcycle). Each subclass should implement the rentalRate method
//     to provide the rental rate for that type of vehicle
class Car extends Vehicle {
    constructor(make, model, year, rented, 
    //its own attribute below
    hoursRequired) {
        super(make, model, year, rented);
        this.hoursRequired = hoursRequired;
        // 9. Define additional instance variables and methods in the subclasses as needed to
        // model the specific characteristics of each type of vehicle.
        this._hourlyPrice = 50000;
        this._mileage = 30;
    }
    rentalRate() {
        return this._hourlyPrice * this.hoursRequired;
    }
}
class MotorCycle extends Vehicle {
    constructor(make, model, year, rented, 
    //its own attribute below
    hoursRequired) {
        super(make, model, year, rented);
        this.hoursRequired = hoursRequired;
        this._hourlyPrice = 5000;
        this._selfstart = true;
    }
    rentalRate() {
        return this._hourlyPrice * this.hoursRequired;
    }
}
class Truck extends Vehicle {
    constructor(make, model, year, rented, 
    //its own attribute below
    hoursRequired) {
        super(make, model, year, rented);
        this.hoursRequired = hoursRequired;
        this._hourlyPrice = 200000;
        this._loader = true;
    }
    rentalRate() {
        return this._hourlyPrice * this.hoursRequired;
    }
}
// 10. In the main program, create instances of each type of vehicle and test the rent()
// and return() methods to make sure they work as expected.
console.log("Car");
console.log("------------");
const car1 = new Car("Corolla", "xli", 2019, true, 20);
console.log("car1", car1);
console.log(car1.rent());
console.log(car1.return());
console.log("The rental rate for car whose hourly price is  ", car1._hourlyPrice, "and for hours ", car1.hoursRequired, " is ", car1.rentalRate(), " PKR");
console.log("MotorCycle");
console.log("------------");
const motorcycle1 = new MotorCycle("Honda", "YBR", 2020, false, 10);
console.log("Motorcycle1", motorcycle1);
console.log(motorcycle1.rent());
console.log(motorcycle1.return());
console.log("The rental rate for bike whose hourly price is  ", motorcycle1._hourlyPrice, "and for hours ", motorcycle1.hoursRequired, " is ", motorcycle1.rentalRate(), " PKR");
console.log("Truck");
console.log("------------");
const truck1 = new Truck("Hyundai", "Bumper", 2015, true, 40);
console.log("car1", truck1);
console.log(truck1.rent());
console.log(truck1.return());
console.log("The rental rate for truck whose hourly price is  ", truck1._hourlyPrice, "and for hours ", truck1.hoursRequired, " is ", truck1.rentalRate(), " PKR");
//# sourceMappingURL=app.js.map