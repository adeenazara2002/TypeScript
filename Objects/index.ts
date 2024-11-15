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

type User ={
  name: string;
  email: string;
  password: string;
  age: number;
  gender: string;
  city: string;
  country: string;
}
