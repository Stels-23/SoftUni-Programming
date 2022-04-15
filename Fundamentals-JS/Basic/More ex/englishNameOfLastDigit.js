/*function englishNumbers(n) {

    let lastDigit = n % 10;
    switch (lastDigit) {
        case 1:
            console.log("one");
            break;
        case 2:
            console.log("two");
            break;
        case 3:
            console.log("three");
            break;
        case 4:
            console.log("four");
            break;
        case 5:
            console.log("five");
            break;
        case 6:
            console.log("six");
            break;
        case 7:
            console.log("seven");
            break;
        case 8:
            console.log("eight");
            break;
        case 9:
            console.log("nine");
            break;
            case 0:
            console.log("zero");
    }
    //return Math.max.apply(null, n);


}
englishNumbers(512)

function solve(input) {
    let last = input.toString();
    let last2 = last[last.length - 1];
    switch (last2) {
        case 1:
            console.log("one");
            break;
        case 2:
            console.log("two");
            break;
        case 3:
            console.log("three");
            break;
        case 4:
            console.log("four");
            break;
        case 5:
            console.log("five");
            break;
        case 6:
            console.log("six");
            break;
        case 7:
            console.log("seven");
            break;
        case 8:
            console.log("eight");
            break;
        case 9:
            console.log("nine");
            break;
        case 0:
            console.log("zero");
            break;
    }
}
solve(512)*/

/*function solve(n) {
    let words = n + ""; // превръщаме числото в стринг
    let last = words.charAt(words.length - 1); // взима последната стойност. която е 6
    let numLast = Number(last); //последната стойност от стринг я превръщаме в число

    if (numLast === 1) { /// сверяваме всички възможни числа
        console.log("one");
    } else if (numLast === 2) {
        console.log("two");
    } else if (numLast === 3) {
        console.log("three");
    } else if (numLast === 4) {
        console.log("four");
    } else if (numLast === 5) {
        console.loh("five");
    } else if (numLast === 6) {
        console.log("six");
    } else if (numLast === 7) {
        console.log("seven")
    } else if (numLast === 8) {
        console.log("eight");
    } else if (numLast === 9) {
        console.log("nine");
    } else {
        console.log("zero");
    }
}*/
function solve(number) {
    let numAsStr = number.toString().split("");
    let lastNum = numAsStr.pop();
    lastNum = Number(lastNum)
        //let newArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; 
        //, two, three, four, five, six, seven, eight, nine;

    //if(newArr.includes(lastNum)){
    //for(let i of newArr){
    if (lastNum === 0) {
        console.log("zero");
    } else if (lastNum === 1) {
        console.log("one");
    } else if (lastNum === 2) {
        cosole.log('two');
    } else if (lastNum === 3) {
        console.log("three")
    } else if (lastNum === 4) {
        console.log("four");

    } else if (lastNum === 5) {
        console.log("five");
    } else if (lastNum === 6) {
        console.log("six");
    } else if (lastNum === 7) {
        console.log("seven");
    } else if (lastNum === 8) {
        console.log("eight");
    } else if (lastNum === 9) {
        console.log("nine");
    }
}
solve(536)