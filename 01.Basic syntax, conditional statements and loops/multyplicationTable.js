function multyplicationTable(num) {

    /*while(num <= 10){
        let result = (`${num} +  `)
    console.log(result)*/
    for (let i = 1; i <= 10; i++) {
        let result = num * i;
        console.log(`${num} * ${i} = ${result}`);

    }

}
multyplicationTable(5)