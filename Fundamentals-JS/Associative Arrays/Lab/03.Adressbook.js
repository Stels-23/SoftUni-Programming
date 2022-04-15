function adressbook(input) {
    let obj = {};
    for (let line of input) {
        let separate = line.split(":");
        let [name, street] = separate;
        obj[name] = street;

    } // при замяна от стара на нова стойност няма нужда от условна конструкция
    let sorted = Object.entries(obj);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));
    for (let key in sorted) {
        let name = sorted[key].shift();
        console.log(name, "->", sorted[key].join(""));
    }
}
adressbook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'
]);
console.log("==============");
adressbook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd'
]);