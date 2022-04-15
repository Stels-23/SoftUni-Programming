function employess(input) {

    for (let singleName of input) {
        let employess = {
            name: singleName,
            personalNum: singleName.length

        };

        console.log(`Name: ${employess.name} -- Personal Number: ${employess.personalNum}`);
    }
}
employess([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);

//може и без обект- 
/*function employess(input) {
input.forEach(element => console.log(`Name: ${element} -- Personal Number: ${element.length}`));
employess([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'); */