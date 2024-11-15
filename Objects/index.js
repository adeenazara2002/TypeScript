// QUESTION 1
// 1. Suppose You have an array of object
// var itemsArray = [
// {name:”juice”,price:”50”, quantity:”3”},
// {name:”cookie”,price:”30”, quantity:”9”},
// {name:”shirt”,price:”880”, quantity:”1”},
// {name:”pen”,price:”100”, quantity:”2”}];
// Calculate total price of each item and all items;
var user = {
    name: "Adina Zara",
    email: "adinazara@gmail.com",
    password: "adi123",
    age: 23,
    gender: "Female",
    city: "Karachi",
    country: "Pakistan",
};
// Correct function with 'property' type as string
function hasProperty(obj, property) {
    return Object.prototype.hasOwnProperty.call(obj, property);
}
console.log("Does 'age' property exist?", hasProperty(user, "age")); // true
console.log("Does 'country' property exist?", hasProperty(user, "country")); // true
console.log("Does 'firstName' property exist?", hasProperty(user, "firstName")); // false
console.log("Does 'lastName' property exist?", hasProperty(user, "lastName")); // false
