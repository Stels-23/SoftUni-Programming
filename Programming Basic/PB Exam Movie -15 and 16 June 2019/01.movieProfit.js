function movieProfits(input) {
    let movieName = input[0];
    let countDays = Number(input[1]);
    let countTickets = Number(input[2]);
    let priceForTicket = Number(input[3]);
    let percentForTheMovie = Number(input[4]);
    let priceForTicketOnDay = countTickets * priceForTicket;
    let revenuesForTheWholePeriod = countDays * priceForTicketOnDay;
    let percentFromRevenues = revenuesForTheWholePeriod * percentForTheMovie / 100;
    let revenuesFromTheMovie = Math.abs(revenuesForTheWholePeriod - percentFromRevenues);
    console.log(`The profit from the movie ${movieName} is ${revenuesFromTheMovie.toFixed(2)} lv.`)
}
movieProfits(["The Programmer",
    "20",
    "500",
    "7.50",
    "7"
])

console.log('========');
movieProfits(["Python Basics",
    "40",
    "34785",
    "10.45",
    "14"
])

console.log('=======');
movieProfits(["The Jungle",
    "22",
    "20500",
    "9.37",
    "30"
])