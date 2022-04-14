function vacation(groupOfPeopleCount, typeOfGroup, dayOfTheWeek) {
    let studentFridayPrice = 8.45;
    let buisnessFridayPrice = 10.9;
    let regularFridayPrice = 15;
    let studentsSaturdayPrice = 9.8;
    let buisnessSaturdayPrice = 15.6;
    let regularSaturdayPrice = 20;
    let studentSundayPrice = 10.46;
    let buisnessSundayPrice = 16;
    let regularSundayPrice = 22.5;

    let studenDiscountPercentage = 15;
    let buisinessDicount = 10;
    let regularPercentage = 5;

    let totalPrice = 0;

    if (typeOfGroup === "Business" && groupOfPeopleCount >= 100) {
        groupOfPeopleCount -= buisinessDicount;
    }

    if (typeOfGroup === "Students" && dayOfTheWeek === "Friday") {
        totalPrice += groupOfPeopleCount * studentFridayPrice;
    } else if (typeOfGroup === "Business" && dayOfTheWeek === "Friday") {
        totalPrice += groupOfPeopleCount * buisnessFridayPrice;
    } else if (typeOfGroup === "Regular" && dayOfTheWeek === "Friday") {
        totalPrice += groupOfPeopleCount * regularFridayPrice;
    } else if (typeOfGroup === "Students" && dayOfTheWeek === "Saturday") {
        totalPrice += groupOfPeopleCount * studentsSaturdayPrice;
    } else if (typeOfGroup === "Business" && dayOfTheWeek === "Saturday") {
        totalPrice += groupOfPeopleCount * buisnessSaturdayPrice;
    } else if (typeOfGroup === "Regular" && dayOfTheWeek === "Saturday") {
        totalPrice += groupOfPeopleCount * regularSaturdayPrice;
    } else if (typeOfGroup === "Students" && dayOfTheWeek === "Sunday") {
        totalPrice += groupOfPeopleCount * studentSundayPrice;
    } else if (typeOfGroup === "Business" && dayOfTheWeek === "Sunday") {
        totalPrice += groupOfPeopleCount * buisnessSundayPrice;
    } else if (typeOfGroup === "Regular" && dayOfTheWeek === "Sunday") {
        totalPrice += groupOfPeopleCount * regularSundayPrice;
    }
    if (typeOfGroup === "Students" && groupOfPeopleCount >= 30) {
        totalPrice -= (studenDiscountPercentage / 100) * totalPrice;
    } else if (
        typeOfGroup === "Regular" &&
        groupOfPeopleCount >= 10 &&
        groupOfPeopleCount <= 20
    ) {
        totalPrice -= (regularPercentage / 100) * totalPrice;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(40, "Regular", "Saturday") //(30, "Students", "Sunday")