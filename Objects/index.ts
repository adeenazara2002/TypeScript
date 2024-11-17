// QUESTION 1
// 1. Suppose You have an array of object
// var itemsArray = [
// {name:”juice”,price:”50”, quantity:”3”},
// {name:”cookie”,price:”30”, quantity:”9”},
// {name:”shirt”,price:”880”, quantity:”1”},
// {name:”pen”,price:”100”, quantity:”2”}];
// Calculate total price of each item and all items;

// let itemsArray = [
//   { name: "Juice", price: 50, quantity: 3 },
//   { name: "cookie", price: 30, quantity: 9 },
//   { name: "shirt", price: 880, quantity: 1 },
//   { name: "pen", price: 100, quantity: 2 },
// ];

// let total = 0;

// itemsArray.forEach((item) => {
//   let itemTotal = item.price * item.quantity;
//   console.log(`Total price for ${item.name}:
//         ${itemTotal}`);
//   total += itemTotal;
// });

// console.log(`Total cost of all items: ${total}`);

// QUESTION 2

// 2. Create an object with properties name, email, password, age,
// gender, city, country.
// Check if age and country properties exist in object or not.
// Also check firstName and lastName properties in object.

// type User = {
//   name: string;
//   email: string;
//   password: string;
//   age: number;
//   gender: string;
//   city: string;
//   country: string;
// };

// const user: User = {
//   name: "Adina Zara",
//   email: "adinazara@gmail.com",
//   password: "adi123",
//   age: 23,
//   gender: "Female",
//   city: "Karachi",
//   country: "Pakistan",
// };

// function hasProperty<T>(obj: T, property: string): boolean {
//   return Object.prototype.hasOwnProperty.call(obj, property);
// }

// console.log("Does 'age' property exist?", hasProperty(user, "age"));
// console.log("Does 'country' property exist?", hasProperty(user, "country"));
// console.log("Does 'firstName' property exist?", hasProperty(user, "firstName"));
// console.log("Does 'lastName' property exist?", hasProperty(user, "lastName"));

// QUESTION 3

// 3. Create a constructor function with some properties. Now
// create multiple records using the constructor.

// class User {
//   name: string;
//   email: string;
//   age: number;
//   gender: string;
//   city: string;
//   country: string;

//   constructor(
//     name: string,
//     email: string,
//     age: number,
//     gender: string,
//     city: string,
//     country: string
//   ) {
//     this.name = name;
//     this.email = email;
//     this.age = age;
//     this.gender = gender;
//     this.city = city;
//     this.country = country;
//   }
// }

// const user1 = new User(
//   "Adina Zara",
//   "adinazara@gmail.com",
//   22,
//   "Female",
//   "Karachi",
//   "Pakistan"
// );
// const user2 = new User(
//   "Saad Nisar",
//   "saad@gmail.com",
//   22,
//   "Male",
//   "Karachi",
//   "Pakistan"
// );
// const user3 = new User(
//   "Usman",
//   "usman@gmail.com",
//   22,
//   "Male",
//   "Karachi",
//   "Pakistan"
// );

// console.log(user1);
// console.log(user2);
// console.log(user3);

// 4. Suppose you want to check population of your area, their
// educations and professions.
// Create a constructor function which holds following
// properties:
// Name, gender, address, education, profession,
// Enter all records one by one.
// Hint:

//  use select box for education and profession,
//  use radio box for gender

// Bonus : use can use localStorage to save records.

class Person {
  name: string;
  gender: string;
  address: string;
  education: string;
  profession: string;

  constructor(name: string, gender: string, address: string, education: string, profession: string){
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
  }
}

function saveToLocalStorage(person: Person): void {
  let people: Person[] = JSON.parse(localStorage.getItem('people') || '[]');
  people.push(person);
  localStorage.setItem('people', JSON.stringify(people)); 
}

function handleFormSubmit(event: Event): void {
  event.preventDefault();
  
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const gender = (document.querySelector('input[name="gender"]:checked') as HTMLInputElement)?.value;
  const address= (document.getElementById('address') as HTMLInputElement).value;
  const education = (document.getElementById('eduaction') as HTMLInputElement).value;
  const profession = (document.getElementById('profession') as HTMLInputElement).value;

  const person  = new Person(name, gender, address, education, profession);
  saveToLocalStorage(person);

  (document.getElementById('personForm') as HTMLFormElement)?.reset();
  alert('Record saved successfully'); 
}