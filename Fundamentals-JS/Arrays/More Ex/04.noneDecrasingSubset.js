function none(arr) {
    let arrL = arr.length;
    let newArr = [];
    let num = 0;
    let nextNum = 0;
    for (let i = 0; i < arrL; i++) {
        num = arr[i];
        if (num >= nextNum) {
            newArr.push(num);
            nextNum = num;

        }


    }
    console.log(newArr.join(" "));


}
none([1, 3, 8, 4, 10, 12, 3, 2, 24]);
none([1, 2, 3, 4]);
none([20, 3, 2, 15, 6, 1]);