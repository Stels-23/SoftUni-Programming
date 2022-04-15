function solve(arr) {

    let newArrey = []
    let lenghtOFArrey = arr.length //броя на елементите в масива
    let lastNum = 0

    for (let i = 0; i < lenghtOFArrey; i++) {
        let currentNum = arr[i]

        if (currentNum >= lastNum) {
            lastNum = currentNum
            newArrey.push(currentNum)
        }
    }

    console.log(newArrey.join(' '));
}
solve([1, 3, 8, 4, 10, 12, 3, 2, 24])