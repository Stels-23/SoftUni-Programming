function cinema(input) {
    let priceForOneTicket = 5;
    let capacityOfHall = Number(input[0]);
    let index = 1;
    let countPeople = Number(input[index]);
    let capacityLeft = capacityOfHall;
    let pay = 0;
    let totalPay = 0;
    while (isNaN(countPeople) === false) {
        if (capacityLeft >= countPeople) {
            capacityLeft -= countPeople;
            if (countPeople % 3 === 0) {
                pay = (countPeople * priceForOneTicket) - priceForOneTicket
                totalPay += pay;
            } else {
                pay = countPeople * priceForOneTicket;
                totalPay += pay;
            }

        } else {
            console.log(`The cinema is full.`);
            break;
        }
        index++;
        countPeople = Number(input[index])
    }
    if (capacityLeft >= 0 && isNaN(countPeople)) {
        console.log(`There are ${capacityLeft} seats left in the cinema.`);
    }
    console.log(`Cinema income - ${totalPay} lv.`);

}
cinema(["60",
    "10",
    "6",
    "3",
    "20",
    "15",
    "Movie time!"
])
console.log('=============');
cinema(["50",
    "15",
    "10",
    "10",
    "15",
    "5"
])
console.log('===========');
cinema(["100",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "Movie time!"
])