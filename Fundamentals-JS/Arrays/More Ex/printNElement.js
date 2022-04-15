function element(input) {
    let lastEl = input[input.length - 1] //взимаме и изтриваме последният елемент от масива
    let arrL = input.length - 1
    let result = [];
    for (let i = 0; i < arrL; i++) {
        if (i % lastEl === 0) {
            result.push(input[i]);

        }


    }
    console.log(result.join(" "));

}
/*function element(arr) {
    let lastNum = arr.pop(); // взима последната стойност от маисва
    let resultArr = [];
    for (let i in arr) {
        if (i % lastNum === 0) {
        resultArr.push(arr[i]);
         }
    }
    console.log(result.join(" "));
}*/
element(['dsa', 'asd', 'test', 'test', '2']);
console.log("--------------");
element(['5', '20', '31', '4', '20', '2']);
console.log("--------------");
element(['1', '2', '3', '4', '5', '6']);