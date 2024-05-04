var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Making a array of countries and Print orginal name.
var countriesToVisit = ["Canda", "Dominica", "Bhutan", "Algeria"];
console.log("Orginal Order", countriesToVisit);
// Print the array in alphabetical order without modifying the actual list.
console.log("Alphabetical Order", __spreadArray([], countriesToVisit, true).sort());
// Show that the array is still in its original order 
console.log("Still in orginal Order:", countriesToVisit);
//  Print the array in Reverse order without mpdifying the acual array list
console.log("Reverse Order", __spreadArray([], countriesToVisit, true).reverse());
// Show that the array is still in its original order 
console.log("Still in orginal Order:", countriesToVisit);
// We have changed the orginal: Array order Now.
console.log("Orginal Array Reverse:", countriesToVisit.reverse());
// Print the array to show that it's back its orginal order
console.log("Back to Orginal Order", countriesToVisit.reverse());
// Print the array to show that its order has been changed in Alphabetical order Now. 
console.log("Sorted in Alphabetical Order", countriesToVisit.sort());
// We have changed again the orginal: Array order now in reverse again
console.log("Orginal Array Reverse Again:", countriesToVisit.reverse());
