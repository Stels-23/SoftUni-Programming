//1-ви начин
/*
function reverse(str) {
    console.log(str.split("").reverse().join("")); // може да се сложи кавички в reverse, но не е задължително

}
reverse("Hello")
    
    reverseString("Hello");
    // 2-ри начин
    function reverse(str) {
        console.log([...str].reverse().join(""));
    }
    reverse("Hello");



    function reverseString(input) { //3-ти начин
        let reversed = "";
        for (let i = input.length - 1; i >= 0; i--) {// i=4-общ бр букви в думата
            reversed += input[i];// в reversed се добавя 1-ва буква- о, после l, l, e, H. На този принцип работи тази програма

        }
        console.log(reversed);

    }
    reverseString("Hello");*/


/*function reverseString(input) { 
    let reversed = "";
    for (let i = input.length - 1; i >= 0; i--) {
        reversed += input[i];
        console.log(reversed);// ol
    }                         //oll
                            // ello
                            //elloh

}
reverseString("Hello"); //ako e вътре в цикъла отпечатването, колкото е дължината на думата, затова, 
//за да е на 1-ред думата, трябва да е извън цикъла!!!*/

function reverse(str) {
    let rev4 = "";
    for (let char of str) {
        rev4 = char + rev4;
    }
    console.log(rev4)
}
reverse("Hello")