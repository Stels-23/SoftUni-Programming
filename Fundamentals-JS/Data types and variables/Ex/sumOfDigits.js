/*function sumOfDigits(sum) {
    let allSumLikeStr = String(sum)
    let result = 0;
    for (let i = 0; i < allSumLikeStr.length; i++) {
        let parsNum = Number(allSumLikeStr[i])
        result += parsNum;
        //console.log(result)
    }
    console.log(result)
}

function sumOfDigits(input) {
    let sum = 0;
    let numAsString = String(input);
    for (let i of numAsString) {
        sum += Number(i)
    }
    console.log(sum);
}*/
function sumOfDigits(input) {
    let sum = 0;
    let numAsString = input.toString();
    numAsString.split(" ").map(function(char) {
        sum += Number(char);
        console.log(sum)
    });

}
sumOfDigits(97561) //(543); (245678);