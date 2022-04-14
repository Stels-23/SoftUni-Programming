function triangle(num) {
    //let line = " "/1 122 nov red 122333 nov red 1223334444 nov red122333444455555 
    for (let i = 1; i <= num; i++) {
        let line = " "

        for (let j = 1; j <= i; j++) {
            line += i + " "

        }
        console.log(line)
    }
}
triangle(6) //5, 3
    // друг вариант
function triangle(num) {
    //let line = " "/1 122 nov red 122333 nov red 1223334444 nov red122333444455555 
    for (let i = 1; i <= num; i++) {
        let line = " "

        for (let j = 1; j <= i; j++) {
            line += i;
            if (j !== i) {
                line += ""

            }
        }
        console.log(line)
    }
}