function sameNumbers(nums) {
    let array = nums.toString().split('').map(Number);
    let digits = 0;
    array.forEach((number) => digits += number)
    let isEqualsEveryNumbers = (elements) => elements === array[0];
    let result = array.every(isEqualsEveryNumbers)
    console.log(result);
    console.log(digits);


}
sameNumbers(2222222);
console.log('=========');
sameNumbers(1234)