/*function reversChar(x1, x2, x3) {
    let string = (`${x1} ${x2} ${x3}`);
    let revers = string.split("").reverse().join("")
    console.log(revers)
}
function reversChar(n1, n2, n3) {
    let array = [n3, n2, n1].join(" ");
    console.log(array)
}
reversChar('1', 'L', '&');
// ('A', 'B', 'C');
*/
// При неопределен брой параметри ще имаме следният сорс код
function reversElement(...params) {
    console.log(params.reverse().join(" ")); // не може да се добавя split
}
reversElement("A", "B", "C", "D", "E", "F", "G")