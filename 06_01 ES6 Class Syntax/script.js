
//Defining ES6 Classes
class Vehicle {
    constructor(description, wheels) {
        this.description = description;
        this.wheels = wheels;
    } // end of constructor method

    describeYourself() {
        console.log(`I am  a${this.description} with ${this.wheels} wheels`);

    } // end of the describeYourself() method.
} // end of class definition

var coolSkiVan = new Vehicle("Cool Ski Van", 4);

coolSkiVan.describeYourself();

class SemiTruck extends Vehicle{
    constructor(){
        super('semi truck',18)
    }
}

var groceryStoreSemi = new SemiTruck();
groceryStoreSemi.describeYourself();