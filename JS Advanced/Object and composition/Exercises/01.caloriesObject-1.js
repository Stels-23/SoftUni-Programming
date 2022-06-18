function caloriesObject(array) {
    let obj = {};
    while (array.length != 0) {
        let product = array.shift();
        let calories = array.shift();
        obj[product] = Number(calories);
    }
    console.log(obj)

}
caloriesObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
caloriesObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])