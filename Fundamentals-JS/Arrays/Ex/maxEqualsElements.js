function equalsElements(arr) {
    let arrEnd = [];
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        arr1 = []; //да го refresh-ва всеки път при цикъла;
        for (let j = i; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                arr1.push(arr[j]);
            } else {
                break;
            }
            if (arr1.length > arrEnd.length) {
                arrEnd = arr1; // запазваме поредицата, за да можем след това да я ползваме
            }
        }

    }
    console.log(arrEnd.join(" "))

}
equalsElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
equalsElements([1, 1, 1, 2, 3, 1, 3, 3]);
equalsElements([4, 4, 4, 4]);
equalsElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);