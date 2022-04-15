function smallestTwoNums(input) {
    let sortedAscending = input.sort((a, b) => {
        return a - b;
    });
    let result = sortedAscending.splice(0, 2)
    console.log(result.join(" "));
}
smallestTwoNums([30, 15, 50, 5]);
smallestTwoNums([3, 0, 10, 4, 7, 3]);