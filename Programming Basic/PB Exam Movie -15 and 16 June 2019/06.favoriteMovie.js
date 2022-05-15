/*function favoriteMovie(input) {
    let nameOfMovie = input.shift();
    let points = 0;
    let countMovies = 0;
    let totalPointsForWord = 0;
    let maxPoints = 0;
    let bestMovie = '';
    while (nameOfMovie !== "STOP") {
        countMovies++;
        let findSpace = nameOfMovie.split('');
        if (countMovies === 7) {
            console.log('The limit is reached.');
            break;

        }
        if (findSpace.includes(' ')) {
            let indexOfSpace = findSpace.indexOf(' ');
            let leftPart = findSpace.splice(0, indexOfSpace);
            let removeSpace = findSpace.shift();
            findSpace = leftPart.concat(findSpace);
            nameOfMovie = findSpace.join('');

        }

        for (let letter = 0; letter < nameOfMovie.length; letter++) {
            let asciiCode = nameOfMovie[letter].charCodeAt()
            let letterL = nameOfMovie.length;
            if (asciiCode >= 65 && asciiCode <= 90) {
                points = asciiCode - letterL;

            } else if (asciiCode >= 97 && asciiCode <= 122) {
                points = asciiCode - letterL * 2;
            }
            totalPointsForWord += points;
        }
        if (totalPointsForWord > maxPoints) {
            maxPoints = totalPointsForWord;
            bestMovie = nameOfMovie;

        }
        nameOfMovie = input.shift();
        totalPointsForWord = 0;
    }

    console.log(`The best movie for you is ${bestMovie} with ${maxPoints} ASCII sum.`);


}*/
function favoriteMovie(input) {
    //let maxSum = Number.MIN_SAFE_INTEGER;
    let maxSum = 0;
    let bestMovie = '';
    for (let n = 1; n <= 7; n++) {

        let currentMovie = input.shift();
        let sum = 0;
        if (currentMovie == 'STOP') {
            console.log(`The best movie for you is ${bestMovie} with ${maxSum} ASCII sum.`);
            return;
        }
        let movieL = currentMovie.length;
        for (let i = 0; i < movieL; i++) {
            if (
                currentMovie.charCodeAt(i) >= 65 &&
                currentMovie.charCodeAt(i) <= 90
            ) {
                sum -= movieL;
            } else if (
                currentMovie.charCodeAt(i) >= 97 &&
                currentMovie.charCodeAt(i) <= 122
            ) {
                sum -= 2 * movieL;
            }
            sum += currentMovie.charCodeAt(i)
        }
        if (sum > maxSum) {
            maxSum = sum;
            bestMovie = currentMovie;
        }
    }
    console.log(`The limit is reached.`);
    console.log(`The best movie for you is ${bestMovie} with ${maxSum} ASCII sum.`);
}
favoriteMovie(["Matrix",
    "Breaking bad",
    "Legend",
    "STOP"
])
console.log('========');
favoriteMovie(["Wrong turn",
    "The maze",
    "Area 51",
    "Night Club",
    "Ice age",
    "Harry Potter",
    "Wizards"
]);