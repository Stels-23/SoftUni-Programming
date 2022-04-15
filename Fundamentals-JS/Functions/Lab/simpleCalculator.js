 /*function simpleCalc(n1, n2, operator) {
           let result = 0;
           let a = n1;
           let b = n2;
           switch (operator) {
               case 'multiply':
                   result = a * b;
                   break;
               case 'divide':
                   result = a / b;
                   break;
               case 'add':
                   result = a + b;
                   break;
               case 'subtract':
                   result = a - b;
           }
           console.log(result);

       }
     function simpleCalc(a, b, op) {
         let n1 = a;
         let n2 = b;
         let res = 0;
         if (op === "multiply") {
             res = n1 * n2;
         } else if (op === "divide") {
             res = n1 / n2;
         } else if (op === "add") {
             res = n1 + n2;

         } else if (op === "subtract") {
             res = n1 - n2;
         }
         console.log(res);
     }*/
 function simpleCalc(numOne, numTwo, operator) {
     let sign = operator;
     sign = sign.replace("multiply", "*");
     sign = sign.replace("add", "+");
     sign = sign.replace("divide", "/");
     sign = sign.replace("subtract", "-");
     console.log(eval(numOne + sign + numTwo)); // тук е само пробно, но реално никога не трябва да се използва тази ф-я eval, огромен риск за сигурността е
 }
 simpleCalc(5, 5, 'multiply'); //*
 simpleCalc(40, 8, 'divide'); //деление
 simpleCalc(12, 19, 'add'); //събиране
 simpleCalc(50, 13, 'subtract'); //изваждане