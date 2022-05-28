function lastK(numL, countN) {
    let array = [];

    while (array.length !== numL) {
        if (array.length > 0) {
            let sumary = 0;
            let start = array.length - countN;
            let end = array.length - 1;
            for (let i = start; i <= end; i++) {
                if (i >= 0) {
                    let number = array[i];
                    sumary += number;
                }
            }
            array.push(sumary);
        } else {
            array.push(1);

        }
    }
    return array;

}
lastK(6, 3);
lastK(8, 2)