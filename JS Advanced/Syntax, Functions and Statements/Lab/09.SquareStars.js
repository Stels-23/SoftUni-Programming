function squareStars(input) {
    let stars = '';
    let type = typeof(input)
    if (type === 'undefined' || input === 0) {
        input = 5;
    }
    for (let i = 1; i <= input; i++) {
        stars += '* ';
    }
    for (let j = 1; j <= input; j++) {
        console.log(stars);
    }

}
squareStars(1);
console.log('================');
squareStars(2);
console.log('================');
squareStars(5);
console.log('================');
squareStars();