 function matrix(number) {

     //let n = number;
     function line(number) {

         let result = '';

         for (let i = 0; i < number; i++) {
             result += number + ' ';

         }
         return result;
     }

     for (let index = 0; index < number; index++) {

         console.log(line(number));
     }

 }
 matrix(3)
 matrix(7)
 matrix(2)

 /*
 function matrix(n) {// без вложена функция
     let result = "";
     for (let i = 0; i < n; i++) {
         result += n + " ";
        
     }
     for (let i = 0; i < n; i++) {
         console.log(result);

     }

    }*/
 matrix(3)