function gladiatorExpences(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let expences = 0;
    let armorRepair = 0;
    for (let i = 1; i <= lostFightsCount; i++) {
        if (i % 2 === 0) { // Trashed helmet -> 3 times; 
            //
            expences += helmetPrice; //1,2
        }
        if (i % 3 === 0) { //Trashed sword -> 2 times
            expences += swordPrice; //1,2,3
        }
        if (i % 6 === 0) { //Every second time, when his shield brakes, his armor also needs to be repaired. 
            expences += shieldPrice; //1
            armorRepair++;
        }
        if (i % 12 === 0) {
            expences += armorPrice
        }
    }
    console.log(`Gladiator expenses: ${expences.toFixed(2)} aureus`);
}
gladiatorExpences //(7, 2, 3, 4, 5);
    (23, 12.50, 21.50, 40, 200)

/*

Trashed shield -> 1 time
Total: 6 + 6 + 4 = 16.00 aureus;
*/
/* function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
 
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
}*/