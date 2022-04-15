/*function primeNums(n) {
    if (n % 2 === 0 || n % 4 === 0 || n % 6 === 0 || n % 8 === 0 || n % 9 === 0) {
        console.log("false");
    } else { //if (n % 3 === 0 && n % 5 === 0 || n % 7 === 0 || n % 11 === 0) {
        console.log("true");
    }


}
function isAPrimeNumber(num) {
    let counter = 0;
    //loop will go k equals to $num
    for (let k = 1; k <= num; k++) {
        //check if the num is divisible by itself and 1
        // `%` modulus gives the reminder of the value, so if it gives the reminder `0` then it is divisible by the value
        if (num % k == 0) {
            //increment counter value 1
            counter++;
        }
    }
    //if the value of the `counter is 2` then it is a `prime number`
    //A prime number is exactly divisible by 2 times only (itself and 1)
    if (counter == 2) {
        console.log('true');
    } else {
        console.log('false');
    }
}*/
function isAPrimeNumber(x) {
    let boolean = true;
    for (let i = 2; i < x; i++) {
        if (x % i === 0) {
            boolean = false;

        }
    }
    console.log(boolean);


}
isAPrimeNumber(7) //
isAPrimeNumber(8)
isAPrimeNumber(81)