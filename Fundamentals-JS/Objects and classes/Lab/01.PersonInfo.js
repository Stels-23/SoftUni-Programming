/*function personInfo(fName, lName, a) {
    let object = {
        firstName: fName,
        lastName: lName,
        age: a
    }
    return object

}
function personInfo(nameF, lName, a) {
    let obj = {
        name: nameF,
        lastName: lName,
        age: a
    }
    for (let key of Object.keys(obj)) {
        console.log(`${key}: ${obj[key]}`);
    }

}*/
function personInfo(fName, lName, a) { //обект във функция
    let person = {
        firstName: fName,
        lastName: lName,
        age: a,
        sayHello() { // ili moje i taka sayHello : function(){
            console.log("Hello");
        }

    }
    person.sayGoodbye = () => console.log("Bye");

    person.sayHello();
    person.sayGoodbye();

    return person;
} // Hello
//Bye
personInfo("Peter", "Pan", "20")