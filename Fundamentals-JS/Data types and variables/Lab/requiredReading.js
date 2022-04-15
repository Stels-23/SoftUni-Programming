function requiredReading(countPage, pagesReadingFor1H, countDays) {
    let totalTimeToReadTheBook = countPage / pagesReadingFor1H;
    let requaredPerH = totalTimeToReadTheBook / countDays;
    console.log(requaredPerH);
}
requiredReading(212, 20, 2); //(432,15 ,4)