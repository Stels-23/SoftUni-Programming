/*function integerAndFloat(a, b, c) {
    let sum = a + b + c;
    let type = "Integer";
    let sumAsSting = String(sum);
    for (let i = 0; i <= sumAsSting.length; i++) {
        if (sumAsSting[i] === ".") {
            type = "Float"

        }
    }
    console.log(`${sum} - ${type}`);
}
function integerAndFloat(a, b, c) {
    let sum = a + b + c;
    let type = "Integer";
    let roundedSum = Math.round(sum);
    if (roundedSum != sum) {
        type = "Float"
        console.log(`${sum} - ${type}`);
    } else {
        console.log(`${sum} - ${type}`);
    }
}

function integerAndFloat(a, b, c) {
    let sum = a + b + c;
    let type = "Integer";
    let roundedSum = Math.round(sum);
    if (roundedSum === sum) {
        console.log(`${sum} - ${type}`);

    } else {
        type = "Float"
        console.log(`${sum} - ${type}`);

    }
}
function integerAndFloat(a, b, c) {
    let sum = a + b + c;

    sum % 1 === 0 ? sum += " - Integer" : sum += " - Float"
    console.log(sum);
}*/
function integerAndFloat(a, b, c) {
    let sum = a + b + c;
    if (sum % 1 === 0) {
        sum += " - Integer";
        console.log(sum);
    } else {
        sum += " - Float"
        console.log(sum);
    }
}

function integerAndFloat(a, b, c) {
    let sum = a + b + c;
    let integer = `${sum} - Integer`;
    let float = `${sum} - Float`;
    sum % 1 === 0 ? console.log(integer) : console.log(float);

}
integerAndFloat(9, 100, 1.1); //(100, 200, 303);