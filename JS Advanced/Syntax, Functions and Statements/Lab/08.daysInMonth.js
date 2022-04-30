function daysInMonth(month, year) {
    let date = new Date(year, month, 0) // трябва да зададем 0 за датата, за д не ни показва 1 за резултат!!!
    let newDate = date.getDate();
    console.log(newDate)
}



daysInMonth(1, 2012);
console.log('============');
daysInMonth(2, 2021);