/*function reversArray(n, arr) {
    let newArr = [];
    for (let i = 0; i < n; i++) {
        newArr.push(arr[i]); //излизат масиви, които са отрязани 

        //
    }
    let output = "";
    for (let i = newArr.length - 1; i >= 0; i--) {
        // output += `${newArr[i]} `
        output += newArr[i];
        output += " "
        


    }
    console.log(output);


}*/
function reversArray(n, arr) {
    let result = [];
    for (let i = n - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    console.log(result.join(" "));

}
reversArray(3, [10, 20, 30, 40, 50]);
console.log("------")
reversArray(4, [-1, 20, 99, 5]);
console.log("--------")
reversArray(2, [66, 43, 75, 89, 47]);