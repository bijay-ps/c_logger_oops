// Constructor function
const Person = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  //   this.citizenShip = citizenShip;
  //   this.greet = function () {
  //     console.log(`Hi I'm ${this.firstName}`);
  //   };
};

Object.prototype.citizenShip = "Indian";
Person.prototype.greet = function () {
  console.log(`Hi I'm ${this.firstName}`);
};

const rahul = new Person("Rahul", "Sahani");
console.log("citizenShip" in Person);
console.log("greet" in Person);
console.log(rahul.citizenShip);

const divya = new Person("Divya", "Ambore");
console.log(divya);

divya.greet();

Array.prototype.print = function () {
  for (let i = 0; i < this.length; i++) {
    console.log(`${this[i]}`);
  }
};

const nameArr = ["Farhan", "Danish", "Saurabh"];

nameArr.print();

const PersonProto = {
  calcAge() {
    const age = 2023 - this.birthYear;
    return age;
  },
};

const sanket = Object.create(PersonProto); // It will make PersonProto as the prototype of sanket object
sanket.fName = "Sanket";
sanket.birthYear = 2000;

console.log(sanket);
const sAge = sanket.calcAge();
console.log(sAge);
