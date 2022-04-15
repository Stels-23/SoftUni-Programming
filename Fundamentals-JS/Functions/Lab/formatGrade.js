function formatGrade(grade) {
    let result = '';
    let grades = grade.toFixed(2)
    if (grades < 3.00) {
        result = 'Fail (2)'
    } else if (grades >= 3.00 && grades < 3.50) {
        result = `Poor (${grades})`
    } else if (grades >= 3.50 && grades < 4.50) {
        result = `Good (${grades})`
    }
    if (grades >= 4.50 && grades < 5.50)
        result = `Very good (${grades})`;

    else if (grades >= 5.50) {
        result = `Excellent (${grades})`;

    }
    console.log(result)
}
formatGrade(3.33);
formatGrade(4.50);
formatGrade(2.99);