class User {
  constructor(fullName, age, gender, mob, hobbies = ["Reading", "movies"]) {
    this.fullName = fullName;
    this.age = age;
    this.gender = gender;
    this.mob = mob;
    this.hobbies = hobbies;
  }

  greet() {
    console.log(`Hi I'm ${this.fullName}`);
  }
}

// const str = new String('Hello World!')

const ramesh = new User("Ramesh T.", 30, "Male", 9876543210);
ramesh.greet();

const bijay = new User("Bijay Singh", 32, "Male", 9638527410);
bijay.greet();

// What does this 'new' keyword do?
// 1. It creats an empty obj {}
// 2. constructor function will be called and the 'this'
//    keyword will point to the empty obj created in first step
// 3. Newly created empty obj will be linked to the 'Prototype'
// 4. The created obj will be returned from the constructor with the values

console.log(ramesh);
// console.log(bijay);

class Emp extends User {
  constructor(fullName, age, gender, mob, eId, desg, dept) {
    super(fullName, age, gender, mob);
    this.eId = eId;
    this.desg = desg;
    this.dept = dept;
  }
}

const danish = new Emp(
  "Danish Bhat",
  24,
  "Male",
  8974561230,
  "AMZ007",
  "Developer",
  "Prod"
);

console.log(danish);
danish.greet();
