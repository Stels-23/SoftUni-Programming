/*Day / Age	0 <= age <= 18	18 < age <= 64	 64 < age <= 122
Weekday	         12$	         18$	         12$
Weekend	         15$	         20$	         15$
Holiday	          5$	         12$	         10$*/

function theatre(typeOfDay, age) {
    let price = 0;
    if (age < 0 || age > 122) {
        console.log("Error!")
    } else if (age >= 0 && age <= 18) {
        switch (typeOfDay) {
            case "Weekday":
                price = 12;
                break;
            case "Weekend":
                price = 15;
                break;
            case "Holiday":
                price = 5;
                break;

        }
        console.log(`${price}$`);

    } else if (age > 18 && age <= 64) {
        switch (typeOfDay) {
            case "Weekday":
                price = 18;
                break;
            case "Weekend":
                price = 20;
                break;
            case "Holiday":
                price = 12;
                break;

        }
        console.log(`${price}$`);

    } else if (age > 64 && age <= 122) {


        switch (typeOfDay) {
            case "Weekday":
                price = 12;
                break;
            case "Weekend":
                price = 15;
                break;
            case "Holiday":
                price = 10;
                break;

        }
        console.log(`${price}$`);
    }

}
theatre('Holiday', 15) //('Holiday', -12), ('Weekday', 42)