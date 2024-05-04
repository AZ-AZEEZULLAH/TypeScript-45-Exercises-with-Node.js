// Creating a Guest List Array!
var guestList = ["Waheed", "Raza", "Faheem", "Naeem"];
// Making  variable for those guest who can not come?
var donotCome = guestList[0];
// Print the name of guest who can not come ?
console.log(donotCome, "Do not come ??");
// Add or remove values from guest List array.
guestList.splice(0, 1, "Jabbar");
// Message print for bigger table .
console.log("Good News ! we have found a bigger table for dinner");
// Adding a new value at starting index of array.
guestList.unshift("Zafar");
// Adding a new value at ending index of array.
guestList.push("Wajid");
// Adding a new guest at middle index of array.
var middleIndex = Math.floor(guestList.length / 2);
// Adding a new guest to middle index of array .
guestList.splice(middleIndex, 0, "Kareem");
// Printed Message of Updated List.
console.log("updated List of our Guests");
// Sending a  invitation message to our guests one by one with their names.
guestList.forEach(function (oneguest) { return console.log("Assalam -u-Alaikum ".concat(oneguest, ", would you like to dinner with me")); });
