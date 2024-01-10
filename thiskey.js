const obj = {
  name: "Rocky Randhawa",
  age: 30,
  intro: function () {
    console.log("Line 5: ", this);
    console.log(`Hi ${this.name} this side`);
    // const self = this;
    const test = () => {
      console.log("Test in arrow func");
      console.log("Line 9; ", this);
    };
    test();
  },
};

obj.intro();

function test() {
  console.log("Inside Test function");
  console.log(this);
}

test();

const testII = () => {
  console.log("Arrow Func test");
  console.log(this);
};

testII();
