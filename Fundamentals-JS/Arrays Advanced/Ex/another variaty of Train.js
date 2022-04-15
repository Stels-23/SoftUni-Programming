   /*function train(arr) {
                                                                   //arr = ['75','Add 10', 'Add 0','30', '10','75']
                                                                   let wagons = arr.shift().split(' ').map(Number); // wagons = [32,54,21,12,4,0,23]
                                                                   let maxCapacity = Number(arr.shift()); //75

                                                                   for (let command of arr) {
                                                                       let currComand = command.split(' '); //['Add', '10']
                                                                       if (currComand[0] === "Add") { //['Add']
                                                                           wagons.push(Number(currComand[1]));
                                                                       } else {
                                                                           for (let i = 0; i < wagons.length; i++) {
                                                                               if (wagons[i] + Number(currComand[0]) <= maxCapacity) {
                                                                                   wagons[i] += Number(currComand[0]);
                                                                                   break;
                                                                               }
                                                                           }
                                                                       }
                                                                   }
                                                                   console.log(wagons.join(' '));
                                                               }*/
   function train(arr) {
       let wagons = arr.shift().split(' ').map(Number) //трябва да има интервал в split, за да отедели всеки елемент
       let maxCapacity = arr.shift();
       let sumEl = 0;
       let el1 = 0;
       let el2 = 0;
       for (let element of arr) {
           let currentEl = element.split(" ");
           if (currentEl[0] === "Add") {
               wagons.push(currentEl[1]);
           } else {
               for (let i = 0; i < wagons.length; i++) {
                   el1 = wagons[i];
                   el2 = Number(currentEl[0])
                   sumEl = wagons[i] + Number(currentEl[0]);
                   if (sumEl <= maxCapacity) {
                       wagons[i] += Number(currentEl[0]);
                       break;
                   }



               }

           }

       }
       console.log(wagons.join(' '));
   }
   train(['32 54 21 12 4 0 23', //низ, съдържащ вагони (числа). 
       '75', //Вторият елемент в масива ще бъде максималният капацитет на всеки вагон (единичен номер).
       'Add 10', //	Добавяне на {пътници} – добавете вагон до края с дадения брой пътници
       'Add 0',
       '30', //{пътници}  - намери съществуващ вагон, който да побере всички пътници (започвайки от първия вагон
       '10',
       '75'
   ]); //72 54 21 12 4 75 23 10 0
   console.log("---------------------------")
   train(['0 0 0 10 2 4',
       '10',
       'Add 10', //Добавяне на {пътници} – добавете вагон до края с дадения брой пътници
       '10',
       '10',
       '10',
       '8',
       '6'
   ]); //10 10 10 10 10 10 10