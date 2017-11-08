/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1: Window Binding - window/global this points to that object

function sayName(name) {
  console.log(`hello my name is ${name}`);
  console.log(this);
}

sayName('Ryan');

// Principle 2: Implicit Binding - object before the dot becomes this

const myObj = {
  greeting: 'hello',
  sayHello: function(name) {
    console.log(`${this.greeting} ${name}`);
    console.log(this);
  }
}

myObj.sayHello('Ryan');

const sayNameFunc = (obj) => {
  obj.sayName = function () {
    console.log(`Hello my name is ${this.name}`);
    console.log(this);
  }
};

const me = {name: 'Ryan'};
const you = {name: 'Freddy' };

sayNameFunc(me);
console.log(me);
sayNameFunc(you);
console.log(you);

me.sayName();
you.sayName();

// Principle 3: New Binding - the object where the new keyword called.

function CordialPerson(greeter) {
  this.greeting = 'hello';
  this.greeter = 'greeter';
  this.speak = function() {
    console.log(this.greeting + this.greeter);
    console.log(this);
  }
}

const jerry = new CordialPerson('Newman');
const newman = new CordialPerson('Jerry');

jerry.speak();
newman.speak();

console.log(jerry);
console.log(newman);

// Principle 4: Explicit Binding - Whenever javascript's call or apply method is used, this is explicitly

jerry.speak.call(newman);
newman.speak.apply(jerry);