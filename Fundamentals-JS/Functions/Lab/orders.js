/*function orders(string, number) {
    let result = 0; // тук не можем да сложим закръгляне, тъй като ще има отклонения в изчисляванията
    for (let i = 0; i < number; i++) {
        switch (string) {
            case "coffee":
                result += 1.50;
                break;
            case "water":
                result += 1.00;
                break;
            case "coke":
                result += 1.40;
                break;
            case "snacks":
                result += 2.00;
        }

    }
    console.log(result.toFixed(2));
}*/
function orders(str, n) {
    let res = 0;
    for (let i = 0; i < n; i++) {
        if (str === "coffee") {
            res += 1.50;
        } else if (str === "water") {
            res += 1.00;
        } else if (str === "coke") {
            res += 1.40;
        } else if (str === "snacks") {
            res += 2.00
        }
    }
    console.log(res.toFixed(2));
}
orders("water", 5);
orders("coffee", 2);