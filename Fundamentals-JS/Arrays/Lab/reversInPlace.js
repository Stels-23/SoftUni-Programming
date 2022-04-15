/*function reversInPlace(arr) {
    let place = "";
    for (let i = arr.length - 1; i >= 0; i--) {
        place += `${arr[i]} `;


    }
    console.log(place);

}*/
function reversInPlace(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let oldElement = arr[i];
        let previosIndex = arr.length - 1 - i;
        arr[i] = arr[previosIndex];
        arr[previosIndex] = oldElement;

    }
    console.log(arr.join(" "));
}
reversInPlace(['a', 'b', 'c', 'd', 'e']);
reversInPlace(['abc', 'def', 'hig', 'klm', 'nop']);
reversInPlace(['33', '123', '0', 'dd']);