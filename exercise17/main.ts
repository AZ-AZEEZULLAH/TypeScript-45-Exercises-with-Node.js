// Creating a Guest List Array!

let guestList = ["Waheed", "Raza", "Faheem", "Naeem"];


// Making  variable for those guest who can not come?
let donotCome = guestList [0];


// Print the name of guest who can not come ?
console.log(donotCome,"Do not come ??");


// Add or remove values from guest List array.
guestList.splice(0,1,"Jabbar");


// Message print for bigger table .
console.log("Good News ! we have found a bigger table for dinner");

// Adding a new value at starting index of array.
guestList.unshift("Zafar");

// Adding a new value at ending index of array.
guestList.push("Wajid");


// Adding a new guest at middle index of array.
let middleIndex: number = Math.floor(guestList.length / 2);

// Adding a new guest to middle index of array .
guestList.splice(middleIndex, 0,"Kareem");

// Printed Message of Updated List.
console.log("updated List of our Guests");

// Sending a  invitation message to our guests one by one with their names.
guestList.forEach(oneguest => console.log(`Assalam -u-Alaikum ${oneguest}, would you like to dinner with me`));

// Inform that only two guests can invited for dinner.
console.log("unfortunately, the new dinner table wont arrive on time, so I  can only invited two Guests to dinner with me");


// Using while - loop to remove guests from the array until only two names remain
while(guestList.length > 2){
    let removeGuest = guestList.pop();
    console.log(`Sorry,${removeGuest} I can not invited you to dinner`);
}

// Sending a invitations to the last two guest on the list.
console.log("Invitations to the last two Guest ");
guestList.forEach(lastTwo => console.log (`Luckly ${lastTwo}, Your are still invited to dinner`));

// Removing last two Guest from the list.
guestList.pop();
guestList.pop();


console.log("Empty list",guestList)