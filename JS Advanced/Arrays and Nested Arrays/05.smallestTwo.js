// Друг вариант със splice
function smallestTwo(params) {
    let sorted = params.sort((a, b) => a - b);
    let smallestTwo = sorted.splice(0, 2);
    console.log(smallestTwo.join(' '));

}
smallestTwo([30, 15, 50, 5]);
smallestTwo([3, 0, 10, 4, 7, 3]);