function biggerHalf(nums) {
    nums.sort((a, b) => a - b);
    const result = [];
    for (let i = Math.floor(nums.length / 2); i < nums.length; i++) {
        result.push(nums[i]);
    }
    return result; // трябва да е return, не отпечатването
}
console.log(biggerHalf([4, 7, 2, 5]));
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));