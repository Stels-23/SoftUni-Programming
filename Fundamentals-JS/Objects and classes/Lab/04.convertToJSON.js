/*function convertToJson(name, lastName, hairColor) {
    let person = {}
    person.name = name;
    person.lastName = lastName;
    person.hairColor = hairColor;
    let convertToStr = JSON.stringify(person)
    console.log(convertToStr);
}*/
function convertToJson(name, lastName, hairColor) {
    let person = { //ако имената на променливите съвпадат със стойностите
        name: name, // може да не се пишат променливите, т.е. само стойностите да се пишат
        lastName: lastName, //
        hairColor: hairColor,
    }
    let convertToStr = JSON.stringify(person);
    console.log(convertToStr);
}
convertToJson('George', 'Jones', 'Brown');
console.log("==================")
convertToJson('Peter', 'Smith', 'Blond');