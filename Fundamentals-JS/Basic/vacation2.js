/*function input(peoples, people, days) {

    let price = 0;

    if (days == "Friday" && people == "Students") {
        price += 8.45;

    } else if (days == "Friday" && people == "Business") {
        price += 10.90;

    } else if (days == "Friday" && people == "Regular") {

        price += 15;

    } else if (days == "Saturday" && people == "Students") {
        price += 9.80;

    } else if (days == "Saturday" && people == "Business") {
        price += 15.60;

    } else if (days == "Saturday" && people == "Regular") {
        price += 20;

    } else if (days == "Sunday" && people == "Students") {
        price += 10.46;

    } else if (days == "Sunday" && people == "Business") {
        price += 16;

    } else if (days == "Sunday" && people == "Regular") {

        price += 22.50;
    }

    let totalPrice = peoples * price

    if (peoples >= 30 && people == "Students") {
        totalPrice *= 0.85;

    } else if (peoples >= 100 && people == "Business") {
        totalPrice = totalPrice - 10 * price;

    }
    if (peoples >= 0 && peoples >= 10 && peoples <= 20 && people == "Regular") {
        totalPrice *= 0.95;

    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);

}
input(40, "Regular", "Saturday")*/
//(30,"Students","Sunday")
function vacation(peopleCount, groupType, dayOfWeek) {
    let studentsFridayPrice = 8.45;
    let businessFridayPrice = 10.9;
    let regularFridayPrice = 15;
    let studentsSaturdayPrice = 9.8;
    let businessSaturdayPrice = 15.6;
    let regularSaturdayPrice = 20;
    let studentsSundayPrice = 10.46;
    let businessSundayPrice = 16;
    let regularSundayPrice = 22.5;

    let totalPrice = 0;

    let studentsDiscountPercentage = 15;
    let businessDiscountPeople = 10;
    let regularDiscountPercentage = 5;

    if (groupType === "Business" && peopleCount >= 100) {
        peopleCount -= businessDiscountPeople;
    }

    switch (groupType) {
        case "Business":
            switch (dayOfWeek) {
                case ("Friday"):
                    totalPrice += peopleCount * businessFridayPrice;
                    break;
                case ("Saturday"):
                    totalPrice += peopleCount * businessSaturdayPrice;
                    break;
                case ("Sunday"):
                    totalPrice += peopleCount * businessSundayPrice;
                    break;
            }
            break;
        case "Students":
            switch (dayOfWeek) {
                case ("Friday"):
                    totalPrice += peopleCount * studentsFridayPrice;
                    break;
                case ("Saturday"):
                    totalPrice += peopleCount * studentsSaturdayPrice;
                    break;
                case ("Sunday"):
                    totalPrice += peopleCount * studentsSundayPrice;
                    break;
            }
            break;
        case "Regular":
            switch (dayOfWeek) {
                case ("Friday"):
                    totalPrice += peopleCount * regularFridayPrice;
                    break;
                case ("Saturday"):
                    totalPrice += peopleCount * regularSaturdayPrice;
                    break;
                case ("Sunday"):
                    totalPrice += peopleCount * regularSundayPrice;
                    break;
            };
            break;
    }

    if (groupType === "Students" && peopleCount >= 30) {
        totalPrice -= totalPrice * (studentsDiscountPercentage / 100);
    }

    if (groupType === "Regular" && peopleCount >= 10 && peopleCount <= 20) {
        totalPrice -= totalPrice * (regularDiscountPercentage / 100);
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}
vacation(30, "Students", "Friday");
//(30, "Students", "Sunday");