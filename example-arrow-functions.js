var names = ['Chloe', 'Derrick', 'Lucas'];
//
// names.forEach(function(name) {
//   console.log('forEach', name);
// });
//
// // using arrow functions
// names.forEach(
//   (name) => {console.log('arrowFunc', name)}
// );
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Derrick'));


// doesn't work
var person1 = {
  name: 'Derrick',
  greet: function() {
    names.forEach(function(name) {
      console.log(this.name + ' says hi to ' + name);
    });
  }
};
person1.greet();

// now it works
var person2 = {
  name: 'Derrick',
  greet: function() {
    var theUserObj = this;
    names.forEach(function(name) {
      console.log(theUserObj.name + ' says hi to ' + name);
    });
  }
};
person2.greet();

// using fat arrow functions
var person3 = {
  name: 'Derrick',
  greet: function() {
    names.forEach((name) => {
      // lexical 'this'
      console.log(this.name + ' says hi to ' + name);
    });
  }
};
person3.greet();

// challenge area
var addStatement = (a, b) => {
  return a + b;
};
var addExpression = (a, b) => a + b;

console.log(addStatement(4,7));
console.log(addExpression(4,7));
