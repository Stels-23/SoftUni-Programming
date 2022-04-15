function evenAndOddSubstraction(arr) {
    let number = 0;
    let even = 0;
    let odd = 0;
    let totalCount = 0;
    for (let i = 0; i < arr.length; i++) {
        number = Number(arr[i]);

        /*  if (number % 2 === 0) {
            even += number;

        } else {
            odd += number;
        }
    }*/
        let result = number % 2 === 0 ?
            even += number : odd += number;
    }
    totalCount = even - odd;
    console.log(totalCount);

}
evenAndOddSubstraction([1, 2, 3, 4, 5, 6]);
evenAndOddSubstraction([3, 5, 7, 9]);
evenAndOddSubstraction([2, 4, 6, 8, 10]);