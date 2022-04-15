function companyUsers(input) {
    let company = {};

    for (let line of input) {
        let [nameOfCompany, number] = line.split(' -> ');
        number = number.split(" ")
        if (company.hasOwnProperty(nameOfCompany) === false) {
            let addNumbers = new Set();
            company[nameOfCompany] = addNumbers;
        }
        for (let element of number) {
            company[nameOfCompany].add(element)

        }
    }
    let sorted = Object.entries(company);
    sorted.sort()
    for (let [name, number] of sorted) {

        console.log(name);
        for (let n of number) {
            console.log("--", n)
        }

    }

}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);
console.log("==========");
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]);