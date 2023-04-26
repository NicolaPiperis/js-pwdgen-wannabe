    // Declare the variables
    let userName, userSurname, userFavoriteColor, password, message;

    // Ask the name of the user
    userName = prompt("Insert your name");
    console.log(userName);
    
    // Then the surname
    userSurname = prompt("Insert your surname");
    console.log(userSurname);

    // Then the favorite color
    userFavoriteColor = prompt("Insert your favorite color");
    console.log(userFavoriteColor);

    // Build the password
    password = userName + userSurname + userFavoriteColor + 23;
    console.log(password);

    // Make the message
    message = `The best password for you is ` + password;
    console.log(message);

    // Finally write on the page name+surname+favoritecolor+23
    document.getElementById("mio_id").innerHTML = message
    