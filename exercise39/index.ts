// Describe a function with parameters which return a values in string.

function city_country(city: string, country: string) : string{
   return `${city} , ${country}`;
}


// Calling a function and printing the returned message.
city_country("Karachi","Pakistan");

console.log(city_country("Karachi","Pakistan"));

city_country("Tehran","Iran");
console.log(city_country("Tehran","Iran"));


city_country("Delhi","India");
console.log(city_country("Delhi","India"));