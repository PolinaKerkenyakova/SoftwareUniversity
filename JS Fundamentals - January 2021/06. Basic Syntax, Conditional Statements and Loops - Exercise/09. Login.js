function logIn(input) {

    let username = input.shift();
    let password = '';

    for (let i = username.length - 1; i >= 0; i--) {
        password += username[i];
    }
    
    let counter = 0;
    let nextPassword = input.shift();

    while (nextPassword !== password) {
        counter++;

        if (counter > 3) {
            console.log(`User ${username} blocked!`);
            break;
        } else {
            console.log(`Incorrect password. Try again.`);
        }

        nextPassword = input.shift();
    }

    if (nextPassword === password) {
        console.log(`User ${username} logged in.`);
    }
}

logIn(['Acer','login','go','let me in','recA']);
logIn(['momo','omom']);
logIn(['sunny','rainy','cloudy','sunny','not sunny']);