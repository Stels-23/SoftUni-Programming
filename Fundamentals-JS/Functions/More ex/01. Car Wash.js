/*function carWash(input) {
    let inputL = input.length;
    let command = '';
    let value = 0;
    for (let i = 0; i < inputL; i++) {
        command = input[i];
        switch (command) {
            case 'soap':
                value += 10;
                break;
            case 'water':
                value *= 1.20;
                break;
            case 'vacuum cleaner':
                value *= 1.25;
                break;
            case 'mud':
                value *= 0.90;
                break;

        }

    }

    console.log(`The car is ${value.toFixed(2)}% clean.`); // Note: The value should be rounded to the second decimal point.
}*/
//Предаване по стойност
/*function carWash(input) {
    let value = 0;
    let soap = x => x + 10;
    let water = x => x + x * 0.2;
    let vacuum = x => x + x * 0.25;
    let mud = x => x - x * 0.10;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'soap') {
            value = soap(value);
        } else if (input[i] === 'water') {
            value = water(value);
        } else if (input[i] === 'vacuum cleaner') {
            value = vacuum(value);
        } else {
            value = mud(value);
        }
    }
    console.log(`The car is ${value.toFixed(2)}% clean.`);
}*/


//с референции
/*function carWash(input) {
    let obj = { value: 0 };
    let soap = x => x.value += 10;
    let water = x => x.value *= 1.2;
    let vacuum = x => x.value *= 1.25;
    let mud = x => x.value *= 0.90;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'soap') {
            soap(obj);
        } else if (input[i] === 'water') {
            water(obj);
        } else if (input[i] === 'vacuum cleaner') {
            vacuum(obj);
        } else {
            mud(obj);
        }
    }
    console.log(`The car is ${obj.value.toFixed(2)}% clean.`);
}

//с reduce
function carWash(input) {
    let funcs = {
        soap: x => x + 10,
        water: x => x + x * 0.2,
        'vacuum cleaner': x => x + x * 0.25,
        mud: x => x - x * 0.10
    };
    let value = input.reduce((acc, curr) => funcs[curr](acc), 0);
    console.log(`The car is ${value.toFixed(2)}% clean.`);
}*/

function carWash(input) {
    let soap = x => x + 10;
    let water = x => x + x * 0.20;
    let vacuumCleaner = x => x + x * 0.25;
    let mud = x => x - x * 0.10;
    let value = 0;
    let arrL = input.length
    for (let i = 0; i < arrL; i++) {
        let index = input[i];
        switch (index) {
            case 'soap':
                value = soap(value);
                break;
            case 'vacuum cleaner':
                value = vacuumCleaner(value);
                break;
            case 'water':
                value = water(value);
                break;
            case 'mud':
                value = mud(value);
                break;
        }
    }
    console.log(`The car is ${value.toFixed(2)}% clean.`)
}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
console.log("-------------------------------");
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);

//soap – add 10 to the value
//water – increase the value by 20%
//vacuum cleaner – increase the value by 25%
//	mud – decrease the value by 10%
//The input comes as an array of strings. When finished cleaning the car, print the resulting value in the format: