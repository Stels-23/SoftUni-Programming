/*function digitsWithWord(num) {
    switch (num) {
        case "zero":
            console.log(0);
            break;
        case "one":
            console.log(1);
            break;
        case "two":
            console.log(2);
            break;
        case "three":
            console.log(3);
            break;
        case "four":
            console.log(4);
            break;
        case "five":
            console.log(5);
            break;
        case "six":
            console.log(6);
            break;
        case "seven":
            console.log(7);
            break;
        case "eight":
            console.log(8);
            break;
        case "nine":
            console.log(9);
            break;
    }

}

function digitsWithWord(x) {
    if (x === "zero") {
        console.log(0);
    } else if (x === "nine") {
        console.log(9);
    } else if (x === "eight") {
        console.log(8);
    } else if (x === "seven") {
        console.log(7);
    } else if (x === "six") {
        console.log(6);
    } else if (x === "five") {
        console.log(5);
    } else if (x === "four") {
        console.log(4);
    } else if (x === "three") {
        console.log(3);
    } else if (x === "two") {
        console.log(2);
    } else if (x === "one") {
        console.log(1);
    }
}*/
function digitsWithWord(x) {
    let num = toWord(x)
    console.log(num);
}
digitsWithWord(9);