function firstAndLastK(str) {
    let k = str.shift(); //  в str [7, 8, 9] иначе във firstElDelete е 2
    let firstArr = str.slice(0, k);
    let first = str.length - k;
    let second = str.length;
    //let secondArr = str.slice(str.length - k, str.length);// 1-ви индекс и 3-последен
    console.log(firstArr.join(" "));
    console.log(secondArr.join(" "));

}
firstAndLastK([2, 7, 8, 9]);
console.log("----------------------------")

firstAndLastK([3, 6, 7, 8, 9]);