/*function solve(arr, num) {

    let firstL = arr.length;


    for (i = 0; i < firstL; i++) {
        let numFirst = arr[i];
        let newArr = [];
        for (j = i + 1; j < firstL; j++) {
            let numSecond = arr[j];

            let result = numFirst + numSecond;
            if (result === num) {
                newArr.push(numFirst + ' ' + numSecond);
                console.log(newArr.join(' '));
            }
            // newArr = [];
        }

    }
}*/
function solve(arr, num) {

    let firstL = arr.length;

    for (i = 0; i < firstL; i++) {
        let numFirst = arr[i];

        for (j = i + 1; j < firstL; j++) {
            let numSecond = arr[j];

            let result = numFirst + numSecond;
            if (result === num) {
                console.log(numFirst + ' ' + numSecond);
            }
        }

    }
}
solve[1, 7, 6, 2, 19, 23],
    8