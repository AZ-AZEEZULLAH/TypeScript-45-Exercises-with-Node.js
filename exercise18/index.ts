// Making a array of countries and Print orginal name.
let countriesToVisit:string[]= ["Canda","Dominica","Bhutan","Algeria"];
console.log("Orginal Order", countriesToVisit);

// Print the array in alphabetical order without modifying the actual list.
 console.log("Alphabetical Order",[...countriesToVisit].sort());

// Show that the array is still in its original order 
console.log("Still in orginal Order:",countriesToVisit);

//  Print the array in Reverse order without mpdifying the acual array list
console.log("Reverse Order",[...countriesToVisit].reverse());

// Show that the array is still in its original order 
console.log("Still in orginal Order:",countriesToVisit);

// We have changed the orginal: Array order Now.
console.log("Orginal Array Reverse:",countriesToVisit.reverse());

// Print the array to show that it's back its orginal order
console.log("Back to Orginal Order",countriesToVisit.reverse());

// Print the array to show that its order has been changed in Alphabetical order Now. 
console.log("Sorted in Alphabetical Order",countriesToVisit.sort());

// We have changed again the orginal: Array order now in reverse again
console.log("Orginal Array Reverse Again:",countriesToVisit.reverse());





