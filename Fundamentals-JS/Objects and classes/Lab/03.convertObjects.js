function convertObjects(jsonStr) {
    let person = JSON.parse(jsonStr); // прави го от string  в обект
    let entries = Object.entries(person) // взима променливата и стойността в масив
    for (let [key, value] of entries) { // обхождаме в масива
        console.log(`${key}: ${value}`)
    }


}
convertObjects('{"name": "George", "age": 40, "town": "Sofia"}');
console.log("====================");
convertObjects('{"name": "Peter", "age": 35, "town": "Plovdiv"}');