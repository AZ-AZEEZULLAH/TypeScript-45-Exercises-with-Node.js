// Array of Current  users
let current_users = ["Mustafa","Aness","fahad","Farhan","Zahab"];

// Array of New users.
let new_users =["Waseem","Kareem","Fahad","Farhan","Naseem"];


// Loop through new_users to check for users  availablity.
new_users.forEach(new_one_user =>{
    // Making a condition for user_name already exit and save in our_condition variable.
    let our_condition=current_users.some(current_one_user => current_one_user.toLowerCase()=== new_one_user.toLowerCase())
    
    // Print a message using if statement.
    if (our_condition){
        console.log(`Sorry ${new_one_user} is already taken`);
    }

    // Print a message using else statement.
    else{
        console.log(`This Username ${new_one_user} is available`);
    }
})