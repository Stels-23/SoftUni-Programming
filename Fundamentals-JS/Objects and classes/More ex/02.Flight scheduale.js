/*class Animal {

    sleep() {
        console.log("zzzzzzzzzzzzzzzzzzzz");

    }
}// mojem da propusnem costructor
let spot = new Animal();
spot.sleep();*/
function flightScheduale(input) {

    let firstArr = input.shift();
    let secondArr = input.shift();
    let thirdArr = input.shift();
    let flights = {};

    for (let line of firstArr) {
        let number = line.split(" ").shift();
        let Destination = line.split(" ")
            .splice(1)
            .join(' ')
            .split(" , ").toString()

        flights[number] = { Destination, Status: 'Ready to fly' }
    }

    for (let line of secondArr) {
        let [number, currentStatus] = line.split(' ');

        if (flights.hasOwnProperty(number)) {
            flights[number].Status = currentStatus;
        }
    }

    for (let line in flights) {
        if (flights[line].Status == thirdArr) {
            console.log(flights[line])
        }
    }

}
/*flightScheduale([
    ['WN269 Delaware',
        'FL2269 Oregon',
        'WN498 Las Vegas',
        'WN3145 Ohio',
        'WN612 Alabama',
        'WN4010 New York',
        'WN1173 California',
        'DL2120 Texas',
        'KL5744 Illinois',
        'WN678 Pennsylvania'
    ],
    ['DL2120 Cancelled',
        'WN612 Cancelled',
        'WN1173 Cancelled',
        'SK430 Cancelled'
    ],
    ['Cancelled']
]);*/
flightScheduale([
    ['WN269 Delaware',
        'FL2269 Oregon',
        'WN498 Las Vegas',
        'WN3145 Ohio',
        'WN612 Alabama',
        'WN4010 New York',
        'WN1173 California',
        'DL2120 Texas',
        'KL5744 Illinois',
        'WN678 Pennsylvania'
    ],
    ['DL2120 Cancelled',
        'WN612 Cancelled',
        'WN1173 Cancelled',
        'SK330 Cancelled'
    ],
    ['Ready to fly']
])