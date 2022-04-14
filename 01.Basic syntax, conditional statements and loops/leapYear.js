/*function leapYear(year) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        console.log("yes");
    } else {
        console.log("no");
    }

}*/

//Може и с тернарен оператор
function leapYear(year) {
    let leap = year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 ? "yes" : "no";
    console.log(leap);
}
leapYear(1984)
leapYear(2003)
leapYear(4)
leapYear(2016)