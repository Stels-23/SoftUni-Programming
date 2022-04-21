function easterTrip(input) {
    let country = input.shift();
    let reservationDates = input.shift();
    let countOvernights = Number(input);
    let price = 0;
    switch (reservationDates) {
        case "21-23":
            if (country === "Germany") {
                price = 32;

            } else if (country === "Italy") {
                price = 28;

            } else if (country === "France") {
                price = 30;
            }
            break;
        case "24-27":
            if (country === "Germany") {
                price = 37;
            } else if (country === "Italy") {
                price = 32;

            } else if (country === "France") {
                price = 35;
            }

            break;
        case "28-31":
            if (country === "Germany") {
                price = 43;
            } else if (country === "Italy") {
                price = 39;
            } else if (country === "France") {
                price = 40;

            }

            break;

    }
    let totalCost = countOvernights * price;
    console.log(`Easter trip to ${country} : ${totalCost.toFixed(2)} leva.`);
}
easterTrip(["Germany",
    "24-27",
    "5"
]);
console.log('=========');
easterTrip(["Italy",
    "21-23",
    "7"
]);
console.log('============');
easterTrip(["France",
    "28-31",
    "8"
]);