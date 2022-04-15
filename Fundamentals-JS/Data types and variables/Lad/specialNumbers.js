/*function specialNumbers(n) {
    let specialN = "Falce";
    for (let i = 0; i < n; i++) {
        if (n % 10 === 0) {
            i = i / 10;
        }
        if (i % 5 === 0 && i % 7 === 0 || i % 11 === 0) {
            specialN = "True";

        }
        console.log(`${n} -> ${specialN}`);
    }

}
specialNumbers(15) //20

function special(num) {
    for (let i = 1; i <= num; i++) {
        if (i < 10) {
            if (i === 5 || i === 7) {
                console.log(`${i} -> True`)
            } else {
                console.log(`${i} -> False`)
            }
        } else {
            let sum = 0;
            let value = i;
            while (value) {
                sum += value % 10;
                value = Math.floor(value / 10);
            }

            if (sum === 5 || sum === 7 || sum === 11) {
                console.log(`${i} -> True`)
            } else {
                console.log(`${i} -> False`)
            }
        }
    }
}
special(15);
function specialN(n) {
    for (let i = 1; i <= n; i++) {
        let special = "False";
        let num = String(i) //let num = i + ""; - числото i се долепя до празен стринг, което означава, че това е вариянт за превръщане на число в стринг
        let sum = 0; //приема броя на числата, ако пр е 10-са 2 числата
        for (let j = 0; j < num.length; j++) {
            sum += Number(num[j]);
        }
        if (sum === 5 || sum === 7 || sum === 11) {
            special = "True";
        }
        console.log(`${i} -> ${special}`);
    }
}*/
function specialN(n) {
    for (let i = 1; i <= n; i++) {
        let a = i.toString();
        let sum = 0;
        let special;
        for (let j = 0; j < a.length; j++) {
            sum = sum + Number(a[j]);
        }
        if (sum === 5 || sum === 7 || sum === 11) {
            special = "True";
        } else {
            special = "False";
        }

        console.log(i + " -> " + special);
    }
}
specialN(15)