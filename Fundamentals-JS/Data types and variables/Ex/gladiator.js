function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
 
    let shieldRepair = 0;
    let sum = 0
 
    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 === 0) {
            sum += helmetPrice;
        }
        if (i % 3 === 0) {
            sum += swordPrice;
        }
        if (i % 2 === 0 && i % 3 === 0) {
            sum += shieldPrice;
            shieldRepair++;
            if (shieldRepair % 2 === 0) {
                sum += armorPrice;
            }
        }
    }
 
    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
}
gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200
);