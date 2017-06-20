class Zoo {
  constructor(arr) {
    if (!Array.isArray(arr)) throw new Error('wrongtype');
    this.animalArr = arr;
  }
  sayHelloAll() {
    // console.log(this.animalArr)
    this.animalArr.map(animal => console.log(animal.name));
  }
  addAnimal(animal) {
    this.animalArr.push(animal);
  }
  removeAnimal(name) {
    const index = this.animalArr.findIndex(animal => animal.name === name);
    this.animalArr.splice(index, index >= 0 ? 1 : 0);
  }
}
class Animal {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
    // this.sayHello = this.sayHello.bind(this);
  }
  sayHello() {
    console.log(`${this.name}, age ${this.age}, ${this.type} say hello!`);
  }
}
class Dog extends Animal {
  constructor(name, age) {
    super(name, age, 'dog');
  }
  // sayHello() {
  //   return `${super.sayHello()}`
  // }
}

class Cat extends Animal {
  constructor(name, age) {
    super(name, age, 'cat');
  }
}

const dog1 = new Dog('Rys', 23);
const cat1 = new Cat('Ela', 11);
// dog1.sayHello();
const animalArr = [dog1, cat1];

// console.log(animalArr);

const zoo1 = new Zoo(animalArr);
// console.log(zoo1);
// zoo1.sayHelloAll()
// zoo1.removeAnimal('Ela');
// console.log(zoo1);
// const zoo2 = [...zoo1];
// console.log(zoo2);

function test(arr) {
  if (!Array.isArray(arr)) throw new Error('wrongtype').toString();
  console.log(arr);
}

test([1, 2, 3, 4]);
