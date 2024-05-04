// Define a function to create a car object with optional.
function create_car(manufacturer, model, ... option){
      // Initialize a car object with manufacturer and model.
    let car = {
        manufacturer: manufacturer,
        model: model
    };
    // Add additiional options to the car object .
    option.forEach(option => {
        let [key,value] = option.split(":");
        car [key.trim()] = value.trim();
    });
    return car;
}

// Call the function to create a car object.
let my_car = create_car("Toyota", "Corrolla", "color: White", "Sunroof: True", "Year: 2024");

// Print the variable .

console.log(my_car);