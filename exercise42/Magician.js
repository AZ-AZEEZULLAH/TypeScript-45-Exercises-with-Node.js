// Define the function to show magicians_name.
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// Function to make great through.map ()
function make_great(magicians) {
    return magicians.map(function (name) { return "The great ".concat(name); });
}
// Define an Array of magicians_name.
var magician_names = ["Raheem", "Ahmed", "Ali"];
// Calling make_great function
var great_magicains = make_great(magician_names);
// Calling  show_magicains.
show_magicians(great_magicains);
