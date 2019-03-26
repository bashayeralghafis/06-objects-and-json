console.log("monkey.js loaded");




var Superhero = function (firstName, superheroName) {
    // Important to understand here that the object properties firstName and superheroName
    // are set through the this keyword with the value passed through the constructor function
    this.firstName = firstName;
    this.superheroName = superheroName;
    console.log('Superhero instantiated');
  };

  var superman = new Superhero('Clark', 'Superman');
  console.log(superman.firstName + ' is ' + superman.superheroName);
/*Work with a partner to create a monkey object, which has the following properties:

* name
* species
* foodsEaten

And the following methods:
* eatSomething(thingAsString)
* introduce: produces a string introducing itself, including its name, species, and what it's eaten.

Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.

Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes
for retrieving properties (dot notation and brackets).

*/
