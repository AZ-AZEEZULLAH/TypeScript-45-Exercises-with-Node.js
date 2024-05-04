// Creating an Array

let userNames = ["Waheed","Razaq","Latif","Sajid","Shakoor"];

// Using forEach loop an Array.

userNames.forEach(oneUser =>{
    if(oneUser ==="Latif"){
        console.log(`Hello   ${oneUser}, would you like to see a status report?`);
    }else{
        console.log(`Hello   ${oneUser}, thank you for logging in again.`);
    }
})

