function schoolGrades(input) {
    let averageGrades = new Map();
    for (let line of input) {
        let separate = line.split(" ");
        let studentName = separate.shift();
        let grades = separate.map(Number);
        if (!averageGrades.has(studentName)) {
            averageGrades.set(studentName, []);
            for (let grade of grades) {
                averageGrades.get(studentName).push(grade); //.get(key) – returns the value of the given key 

            }
        }
        let sorted = Array.from(averageGrades.entries()).sort((a, b) => a[0].localeCompare(b[0]));
        for (let [kvp, avg] of sorted) {



            console.log(`${kvp}: ${sortAvg(avg).toFixed(2)}`)
        }

    }

    function sortAvg(array) {

        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum / array.length;
    }

}


schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'
]);
console.log("===========");
schoolGrades(['Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3'
])