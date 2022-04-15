function movies(input) {
    let listOfMovie = [];
    for (let line of input) {
        if (line.includes("addMovie")) {
            let name = line.split("addMovie ")[1];
            listOfMovie.push({ name });
        } else if (line.includes("directedBy")) {
            let info = line.split(" directedBy ")
            let name = info[0];
            let director = info[1];
            let movie = listOfMovie.find((movieObj) => movieObj.name === name);
            if (movie) {
                movie.director = director;

            }
        } else if (line.includes("onDate")) {
            let info = line.split(" onDate ");
            let name = info[0];
            let date = info[1];
            let movie = listOfMovie.find((movieObj) => movieObj.name === name);
            if (movie) { // ако филма съществува
                movie.date = date; // добавяме ключ
            }
        }
    }
    listOfMovie.forEach(movie => {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie)); //({"name":"The Avengers","director":"Anthony Russo","date":"30.07.2010"})
        }
    });


}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);
console.log("===============");
movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
]);