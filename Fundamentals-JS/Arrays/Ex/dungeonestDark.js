function dark(input) {
    // ("item/monster number").
    let rooms = input[0].split("|"); // split премахва разделителя в инпута и се замества със запетаи
    let health = 100; //You have initial health 100 and initial coins 0. 
    let coins = 0;
    let isFinishedGame = true;
    //let monsterName = "";
    for (let i = 0; i < rooms.length; i++) {
        let room = rooms[i].split(" "); // за да може да се принтира изцяло думата, пр: rat, bat...
        if (room[0] === "potion") { //проверява първите 2-елемента ['rat', '10']
            //You are healed with the number in the second part. However, your health cannot exceed your initial health (100). 
            let currentHealt = Number(room[1]);
            if (health <= 100) {
                if (health + currentHealt >= 100) {
                    currentHealt = 100 - health;
                    health = 100;
                } else {
                    health += currentHealt; // ако healt + currentHealt e по-малко от 100, да се добави към healt + currentHealt
                }
                console.log(`You healed for ${currentHealt} hp.`);
                console.log(`Current health: ${health} hp.`)
            }
        } else if (room[0] === "chest") { //	If the first part is "chest": 	
            let currCoins = Number(room[1]); //You have found some coins, the number in the second part
            console.log(`You found ${currCoins} coins.`);
            coins += currCoins;
            //In any other case, you are facing a monster, you are going to fight. 
            //The second part of the room contains the attack of the monster, and the first the monster's name. You should remove the monster's attack from your health. 

        } else {
            let monsterName = room[0]; // заема стойността на конкретното чудовище
            let fightWithMonster = room[1]; // биеш се с чудовището
            health -= fightWithMonster // кръвта заема стойност 100, която се отема от стойността на чудовишето


            //If you are not dead (health > 0) you have slain the monster, and you should print: 

            if (health > 0) {
                console.log(`You slayed ${monsterName}.`);

            } else { //If you have died, print: `You died! Killed by {monster-name}.` and your quest is over. 
                console.log(`You died! Killed by ${monsterName}.`)
                    //Print the best room you`ve to manage to reach: `Best room: {room}`.
                console.log(`Best room: ${i + 1}`); // стаята е броя на итерации, но тъй като започват от 0, затова добавяме 1 към всеки брой итерации
                isFinishedGame = false;
                break; //програмата прекъсва, когато се открие най-добрата стая
            }
        }


    }
    if (isFinishedGame) {
        //If you managed to go through all the rooms in the dungeon, print on the next three lines: 
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);


    }
}
//dark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
dark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);