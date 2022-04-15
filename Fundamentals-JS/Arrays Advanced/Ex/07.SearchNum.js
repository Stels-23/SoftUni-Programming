function searchForANumber(arr, number) {
    let addNumsFromArr = number[0];
    let countRemoveNumsFromArr = number[1];
    let searchedN = number[2];
    let myNewArr = arr.splice(0, addNumsFromArr); //взима зададения брой елементи
    let deleteNums = myNewArr.splice(countRemoveNumsFromArr); //изтрива зададения брой елементи
    let counter = 0;
    for (let i = 0; i < deleteNums.length; i++) {
        if (deleteNums[i] === searchedN) {
            counter++;
        }
    }

    //console.log(addNumsFromArr);
    //console.log(countRemoveFromArr);
    //console.log(searchedN);
    console.log(`Number ${searchedN} occurs ${counter} times.`);


}
searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5])