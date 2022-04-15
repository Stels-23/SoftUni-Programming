function spice(startingYield) {

    let countDays = 0;
    let yeildDrops = 0;
    let extract = 0;
    let totalAmount = 0;
    while (startingYield >= 100) {
        countDays++;
        extract += startingYield - 26;
        yeildDrops = startingYield - 10;
        startingYield = yeildDrops;

    }
    console.log(countDays);

    if (countDays !== 0) {
        totalAmount = extract - 26;
        console.log(totalAmount);
    } else {
        totalAmount = extract;
        console.log(totalAmount);
    }

}
spice(450) // (111)