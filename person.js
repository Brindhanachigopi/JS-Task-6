// 3. Write a “person” class to hold all the details.

class Person {
  constructor(firstname, lastname, Dob, location) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.Dob = Dob;
    this.location = location;
  }
}
var person1 = new Person("Vidhu", "Bharath", "12-02-1998", "chennai");
var person2 = new Person("Vembu", "Arul", "02-08-2001", "Salem");

console.log(person1.firstname);
console.log(person1.lastname);
console.log(person1.Dob);
console.log(person1.location);

console.log(person2.firstname);
console.log(person2.lastname);
console.log(person2.Dob);
console.log(person2.location);

console.log(`Person Names are "Person1" : ${person1.firstname}
"Person2":${person2.firstname}`);
