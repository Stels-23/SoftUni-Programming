 function num(n1, n2, n3) {
     let massNum = [n1, n2, n3];
     let number = massNum.sort(function(a, b) {
         return b - a;
     }).join("\n"); //добавя се join, за да не се чете като масив инпута
     console.log(number);


 }
 num(2, 1, 3)
     /*
     function solve(num1, num2, num3) {
         let firstPosition = Number.MIN_SAFE_INTEGER;
         let secondPosition = 0;
         let thirdPosition = 0;

         let waitingPosition = 0;

         if (num1 > firstPosition) {
             firstPosition = num1;
             secondPosition = num2;
             thirdPosition = num3;
         }
         if (num2 > firstPosition) {
             firstPosition = num2;
             secondPosition = num1;
             thirdPosition = num3;
         }
         if (num3 > firstPosition) {
             firstPosition = num3;
             secondPosition = num1;
             thirdPosition = num2;
         }

         if (thirdPosition > secondPosition) {
             waitingPosition = secondPosition;
             secondPosition = thirdPosition;
             thirdPosition = waitingPosition;
         }

         console.log(firstPosition);
         console.log(secondPosition);
         console.log(thirdPosition);
     }
     solve(5, 6, 1);
     function sort(a,b,c){
         const numbers = [a,b,c];
         for(let i = 0; i < numbers.length; i++){
           numbers.sort((a, b) => b-a);
           console.log(numbers[i]);
         }}

    

     function nums(num1, num2, num3) {
         let firstPosition = Number.MIN_SAFE_INTEGER;
         let secondPosition = 0;
         let thirdPosition = 0;

         let waitingPosition = 0;

         if (num1 > firstPosition) {
             firstPosition = num1;
             secondPosition = num2;
             thirdPosition = num3;
         }
         if (num2 > firstPosition) {
             firstPosition = num2;
             secondPosition = num1;
             thirdPosition = num3;
         }
         if (num3 > firstPosition) {
             firstPosition = num3;
             secondPosition = num1;
             thirdPosition = num2;
         }

         if (thirdPosition > secondPosition) {
             waitingPosition = secondPosition;
             secondPosition = thirdPosition;
             thirdPosition = waitingPosition;
         }

         console.log(firstPosition);
         console.log(secondPosition);
         console.log(thirdPosition);
     }
     function minNumber(n1, n2, n3) { // Обратно на задачата. От по-малко към по-голямо число
         let firstNumber = Number.MAX_SAFE_INTEGER;
         let secondNumber = 0;
         let thirdNumber = 0;

         if (n1 < firstNumber) {
             firstNumber = n1;
             secondNumber = n2;
             thirdNumber = n3;

         }
         if (n2 < firstNumber) {
             firstNumber = n2;
             secondNumber = n1;
             thirdNumber = n3;
         }
         if (n3 < firstNumber) {
             firstNumber = n3;
             secondNumber = n2;
             thirdNumber = n1;
         }
         if (secondNumber > thirdNumber) {
             firstNumber = n3;
             secondNumber = n1;
             thirdNumber = n2;
         }
         console.log(firstNumber);
         console.log(secondNumber);
         console.log(thirdNumber);
     }
 minNumber(5, 1, 6)
 function solve(n1, n2, n3) {
     let numArray = [n1, n2, n3];
     let newArray = numArray.sort((a, b) => b - a).join("\n");
     console.log(newArray)
 }
 solve(2, 1, 3)*/