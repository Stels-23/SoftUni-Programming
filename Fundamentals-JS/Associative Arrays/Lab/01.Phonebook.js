function phonebook(input) {
    let obj = {};
    for (let element of input) {
        let separate = element.split(" ");
        let name = separate[0];
        let phoneNumber = separate[1];
        obj[name] = phoneNumber;

    }
    for (let key of Object.keys(obj)) { // или с for (let key in obj)
        console.log(key, "->", obj[key])
    }



}
phonebook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
]);
console.log("============");
phonebook(['George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344'
])