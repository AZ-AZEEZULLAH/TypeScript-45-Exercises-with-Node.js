// Define the function to show magicians_name.
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// Function to make great through.map () It will modify an Array.
function make_great(magicians) {
    return magicians.map(function (name) { return "The great ".concat(name); });
}
// Define an Array of magicians_names
var magician_names = ["Raheem", "Ahmed", "Ali"];
// Making a copy of orginal an array . Slice() function.
var copy_magician_names = magician_names.slice();
// Modify the copied an array to include "The great" with their names.
var copy_great_magicians = make_great(copy_magician_names);
// Show both an arrays orginal and copied.
// Original.
console.log("Original Array\n");
show_magicians(magician_names);
// Copied.
console.log("Copied Array\n");
show_magicians(copy_great_magicians);
