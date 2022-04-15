/*function centuriesToMinutes(c) { //Oт векове до минути
    let y = c * 100;
    let d = Math.round(y * 365.2422); //Да предположим, че една година има 365.2422 дни    средно  (Тропическата година).
    let h = d * 24;
    let m = h * 60;
    console.log(`${c} centuries = ${y} years = ${d} days = ${h} hours = ${m} minutes`);
}*/
function centuriesToMinutes(c) {
    let year = c * 100;
    let days = Math.trunc(year * 365.2422);
    let hours = days * 24;
    let minutes = hours * 60;
    console.log(c + " centuries = " + year + " years = " + days + " days = " + hours + " hours = " + minutes + " minutes ")
}

centuriesToMinutes(1);