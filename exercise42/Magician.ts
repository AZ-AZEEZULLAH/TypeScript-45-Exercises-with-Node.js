// Define the function to show magicians_name.

function show_magicians(magicians:string[]){
    magicians.forEach(name => console.log(name));
}

// Function to make great through.map ()
function make_great(magicians:string[]){
   return  magicians.map(name=> `The great ${name}`);
}

// Define an Array of magicians_name.
let magician_names = ["Raheem", "Ahmed", "Ali"];

// Calling make_great function
let great_magicains = make_great(magician_names);

// Calling  show_magicains.
show_magicians (great_magicains);
