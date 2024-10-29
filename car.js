// Step 2: Implement the Car class
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.start = function () {
        console.log("Car engine started: ".concat(this.year, " ").concat(this.make, " ").concat(this.model));
    };
    return Car;
}());
// Step 3: Create an instance of the Car class
var myCar = new Car("Toyota", "Camry", 2021);
// Step 4: Call the start method
myCar.start(); // Logs "Car engine started: 2021 Toyota Camry" to the console.
