class Person {
  constructor(n, a) {
    let b = 'haha';
    this.name = n;
    this.age = a;
    this._sayHi = this.sayHi.bind(this, b) ;
  }
  sayHi(name) {
    console.log(`${this.name} ${name}`);
  }
}

const d = new Person('daniel', 21);
const e = new Person('ellie', 22);
d.sayHi();
d._sayHi();
const f = () => d._sayHi();
f();
