function neither(input) {
    let splitPattern = /[, ]+/g;
    let demonsArr = input[0].split(splitPattern);
    let demons = {};
    let healtPattern = /[^\d.\/+*-]/g;
    let sumPattern = /[+-]?\d+\.?\d*/g;
    let damagePattern = /\*|\//g;
    for (let demon of demonsArr) {
        let hp = 0;
        let damage = 0;
        if (demon.match(healtPattern) !== null) {
            for (let char of demon.match(healtPattern)) {
                hp += char.charCodeAt(0);

            }
        }
        let digits = demon.match(sumPattern);
        if (digits !== null) {
            for (let digit of digits) {
                damage += Number(digit);
            }
        }
        let substractOrMultiply = demon.match(damagePattern);
        if (substractOrMultiply !== null) {
            for (let operand of substractOrMultiply) {
                if (operand === '*') {
                    damage *= 2;
                } else {
                    damage /= 2;
                }
            }
        }
        demons[demon] = {};
        demons[demon]['healt'] = hp;
        demons[demon]['damage'] = damage;

    }
    let sorted = Object.entries(demons).sort((a, b) => a[0].toLocaleComapare(b[0]));
    //let result = 0;
    for (let [key, value] of sorted) {

        console.log(`${key} - ${value['healt']} health, ${value['damage'].toFixed()} damage`);

    }

}

neither('M3ph-0.5s-0.5t0.0**')
neither('M3ph1st0**, Azazel')
neither('Gos/ho')