/*function data(year, m, day) {

    if (day >= 30) {
        m++
        day = 1
        if (m > 12) {
            m = 1
        }
    } else {
        day++;
    }
    if (year < 2) {
        year = 1900;
        year++;
        console.log(`${year}-${m}-${day}`)
    } else {
        console.log(`${year}-${m}-${day}`);
    }
}*/
function data(year, m, day) {
    let nextData = new Date(year, m - 1, day + 1); //wed Jan 02 1901
    let newYear = nextData.getFullYear(); //1901
    let newMonth = nextData.getMonth() + 1; //1
    let newDay = nextData.getDate(); //2
    console.log(`${newYear}-${newMonth}-${newDay}`)
}
data(1, 1, 1) //(2020, 3, 24);
    //(2016, 9, 30)