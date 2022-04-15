function addNewElement() {
    let arr = [10, 20, 30];
    arr[arr.length] = 40;
    console.log(arr.join(" ")); //може и с .toString(), но ще добави запетаи и числата ще са слети
}
//addNewElement();

function addNewElement() {
    let arr = [10, 20, 30];
    arr.push(50);
    console.log(arr.join(" "));
}
addNewElement(); //винаги ще гледа последната стойност за резултат. Това става въпрос, ако са въведени наведнъж и 2-те програми