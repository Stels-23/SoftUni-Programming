function login(input) {
    let userName = input[0];
    let index = 1;
    let password = input[index++];
    let newString = "";
    let enterCounter = 0;

    for (let i = userName.length - 1; i >= 0; i--) {
        newString += userName[i];

    }
    while (newString !== password && enterCounter < 3) {
        enterCounter++;
        console.log("Incorrect password. Try again.");
        password = input[index++];
    }
    if (newString === password) {
        console.log(`User ${userName} logged in.`);
    } else {
        console.log(`User ${userName} blocked!`);
    }

}
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);
//(['momo', 'omom']) (['Acer', 'login', 'go', 'let me in', 'recA']);